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
  // #region agent log
  const logData = {location:'brief/route.ts:64',message:'API POST request received',data:{timestamp:Date.now()},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'};
  await fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(logData)}).catch(()=>{});
  // #endregion
  try {
    // Get client IP for rate limiting
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded ? forwarded.split(',')[0] : req.headers.get('x-real-ip') || 'unknown';
    // #region agent log
    await fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'brief/route.ts:68',message:'Rate limit check',data:{ip},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      // #region agent log
      await fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'brief/route.ts:72',message:'Rate limit exceeded',data:{ip},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Validate environment variable
    const hasApiKey = !!process.env.OPENAI_API_KEY;
    // #region agent log
    await fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'brief/route.ts:79',message:'API key check',data:{hasApiKey},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    if (!hasApiKey) {
      if (process.env.NODE_ENV === 'development') {
        console.error('OPENAI_API_KEY is not configured');
      }
      // #region agent log
      await fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'brief/route.ts:84',message:'API key missing error',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
      return NextResponse.json(
        { error: 'Service configuration error' },
        { status: 500 }
      );
    }

    // Parse and validate input
    const body = await req.json();
    // #region agent log
    await fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'brief/route.ts:90',message:'Request body parsed',data:{hasName:!!body.name,hasEmail:!!body.email,hasMessage:!!body.message},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
    const validation = validateInput(body);
    // #region agent log
    await fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'brief/route.ts:92',message:'Input validation result',data:{valid:validation.valid,error:validation.error},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion

    if (!validation.valid || !validation.data) {
      // #region agent log
      await fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'brief/route.ts:95',message:'Validation failed',data:{error:validation.error},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
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
      // #region agent log
      await fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'brief/route.ts:125',message:'OpenAI API error response',data:{status:response.status,hasErrorData:!!Object.keys(errorData).length},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
      // #endregion
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
    // #region agent log
    await fetch('http://127.0.0.1:7242/ingest/c45ab0e7-0401-428e-a70b-621f6a3647f1',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'brief/route.ts:158',message:'API route catch block',data:{error:err instanceof Error?err.message:String(err)},timestamp:Date.now(),sessionId:'debug-session',runId:'run1',hypothesisId:'C'})}).catch(()=>{});
    // #endregion
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
