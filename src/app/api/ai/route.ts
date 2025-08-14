import { NextRequest, NextResponse } from 'next/server';
import {OpenAI} from 'openai'

const client=new OpenAI({
  apiKey:process.env.GEMINI_API_KEY,
  baseURL:'https://generativelanguage.googleapis.com/v1beta/openai'
})

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    console.log(messages)
    const aiResponse = await client.chat.completions.create({
      model:'gemini-2.5-pro',
      messages
    });
    return NextResponse.json({ message: aiResponse.choices[0].message });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: 'AI response failed' }, { status: 500 });
  }
}
