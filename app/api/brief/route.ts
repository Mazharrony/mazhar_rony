import { NextRequest, NextResponse } from 'next/server';

// You can use OpenAI, Claude, or any AI provider here
// Put your API key in .env.local as OPENAI_API_KEY

// Input validation schema
interface ContactInput {
  name: string;
  email: string;
  message: string;
}

function validateInput(data: unknown): { valid: boolean; data?: ContactInput; error?: string } {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Invalid request body' };
  }

  const input = data as Record<string, unknown>;
  const name = typeof input.name === 'string' ? input.name.trim() : '';
  const email = typeof input.email === 'string' ? input.email.trim() : '';
  const message = typeof input.message === 'string' ? input.message.trim() : '';

  // Validate name
  if (!name || name.length < 1 || name.length > 100) {
    return { valid: false, error: 'Name must be between 1 and 100 characters' };
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { valid: false, error: 'Invalid email address' };
  }

  // Validate message
  if (!message || message.length < 10 || message.length > 5000) {
    return { valid: false, error: 'Message must be between 10 and 5000 characters' };
  }

  return { valid: true, data: { name, email, message } };
}

// Simple rate limiting (in-memory, for production use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX_REQUESTS = 5;

function checkRateLimit(identifier: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT_MAX_REQUESTS) {
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

    // Validate environment variable
    if (!process.env.OPENAI_API_KEY) {
      if (process.env.NODE_ENV === 'development') {
        console.error('OPENAI_API_KEY is not configured');
      }
      return NextResponse.json(
        { error: 'Service configuration error' },
        { status: 500 }
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

    const { name, email, message } = validation.data;

    // Sanitize message to prevent prompt injection (basic)
    const sanitizedMessage = message.replace(/[\r\n]/g, ' ').substring(0, 5000);
    
    // Compose the prompt for the AI
    const prompt = `You are a project brief assistant. Given this raw client message, extract:\n\n* Project type\n* What they want (design / branding / marketing / web / mix)\n* Deliverables (in bullet points)\n* Rough urgency (low/normal/high)\n* Any constraints they mention.\n\nMessage: ${sanitizedMessage}`;

    // Call OpenAI API (replace with your provider if needed)
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      if (process.env.NODE_ENV === 'development') {
        console.error('OpenAI API error:', response.status, errorData);
      }
      return NextResponse.json(
        { error: 'Service temporarily unavailable. Please try again later.' },
        { status: 503 }
      );
    }

    const data = await response.json();
    
    // Parse the AI response (assume it returns a JSON block)
    let brief = null;
    try {
      // Try to extract JSON from the AI response
      const text = data.choices?.[0]?.message?.content;
      if (text) {
        const match = text.match(/\{[\s\S]*\}/);
        if (match) {
          brief = JSON.parse(match[0]);
        }
      }
    } catch (err) {
      // Silently fail - brief generation is optional
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to parse AI response:', err);
      }
      brief = null;
    }

    return NextResponse.json({ brief });
  } catch (err) {
    // Log error for debugging (server-side only)
    if (process.env.NODE_ENV === 'development') {
      console.error('API route error:', err);
    }
    
    return NextResponse.json(
      { error: 'Unable to process request. Please try again later.' },
      { status: 500 }
    );
  }
}
