import { client } from '@/lib/ai';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    const aiResponse = await client.chat.completions.create({
      model:'gemini-2.5-flash',
      messages
    });
    return NextResponse.json({ message: aiResponse.choices[0].message });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'AI response failed' }, { status: 500 });
  }
}
