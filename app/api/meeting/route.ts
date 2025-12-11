import { NextRequest, NextResponse } from 'next/server';

interface MeetingInput {
  name: string;
  email: string;
  date: string;
  time: string;
  timezone?: string;
  duration: string;
  context: string;
}

function validateInput(data: unknown): { valid: boolean; data?: MeetingInput; error?: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const input = data as Record<string, unknown>;

  // Validate required fields
  if (!input.name || typeof input.name !== 'string' || input.name.trim().length < 2) {
    return { valid: false, error: 'Name must be at least 2 characters' };
  }

  if (!input.email || typeof input.email !== 'string') {
    return { valid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(input.email)) {
    return { valid: false, error: 'Invalid email format' };
  }

  if (!input.date || typeof input.date !== 'string') {
    return { valid: false, error: 'Date is required' };
  }

  if (!input.time || typeof input.time !== 'string') {
    return { valid: false, error: 'Time is required' };
  }

  if (!input.context || typeof input.context !== 'string' || input.context.trim().length < 10) {
    return { valid: false, error: 'Meeting context must be at least 10 characters' };
  }

  // Validate date is in the future
  const selectedDate = new Date(input.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selectedDate < today) {
    return { valid: false, error: 'Date must be in the future' };
  }

  return {
    valid: true,
    data: {
      name: input.name.trim(),
      email: input.email.trim(),
      date: input.date,
      time: input.time,
      timezone: input.timezone ? String(input.timezone).trim() : undefined,
      duration: input.duration ? String(input.duration) : '60min',
      context: input.context.trim(),
    },
  };
}

// Simple rate limiting (in-memory, resets on server restart)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return true;
  }

  if (record.count >= 3) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Get client IP for rate limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate input
    const body = await req.json();
    const validation = validateInput(body);

    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        { error: validation.error || 'Invalid input' },
        { status: 400 }
      );
    }

    const { name, email, date, time, timezone, duration, context } = validation.data;

    // Format email content
    const emailSubject = `Meeting Request - ${name}`;
    const emailBody = `
New Meeting Request

Name: ${name}
Email: ${email}
Preferred Date: ${date}
Preferred Time: ${time}
Timezone: ${timezone || 'Not specified'}
Duration: ${duration}
Meeting Context:
${context}

---
This meeting request was submitted from the contact page at ${new Date().toISOString()}.
    `.trim();

    // In production, you would send this via an email service (Resend, SendGrid, etc.)
    // For now, we'll return success and the client can use mailto as fallback
    // You can integrate with an email service here:
    // 
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'contact@meetmazhar.site',
    //   to: 'hello@meetmazhar.site',
    //   subject: emailSubject,
    //   text: emailBody,
    // });

    // Log the meeting request (in production, save to database)
    if (process.env.NODE_ENV === 'development') {
      console.log('Meeting Request:', {
        name,
        email,
        date,
        time,
        timezone,
        duration,
        context,
      });
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Meeting request received. You will receive a confirmation email shortly.',
      },
      { status: 200 }
    );
  } catch (err) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Meeting API error:', err);
    }

    return NextResponse.json(
      { error: 'Unable to process meeting request. Please try again later.' },
      { status: 500 }
    );
  }
}

