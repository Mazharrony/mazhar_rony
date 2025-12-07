import { NextRequest, NextResponse } from 'next/server';

// You can use OpenAI, Claude, or any AI provider here
// Put your API key in .env.local as OPENAI_API_KEY

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    // Compose the prompt for the AI
    const prompt = `You are a project brief assistant. Given this raw client message, extract:\n\n* Project type\n* What they want (design / branding / marketing / web / mix)\n* Deliverables (in bullet points)\n* Rough urgency (low/normal/high)\n* Any constraints they mention.\n\nMessage: ${message}`;

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
      return NextResponse.json({ error: 'AI request failed' }, { status: 500 });
    }

    const data = await response.json();
    // Parse the AI response (assume it returns a JSON block)
    let brief = null;
    try {
      // Try to extract JSON from the AI response
      const text = data.choices[0].message.content;
      const match = text.match(/\{[\s\S]*\}/);
      brief = match ? JSON.parse(match[0]) : null;
    } catch (err) {
      brief = null;
    }

    return NextResponse.json({ brief });
  } catch (err) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
