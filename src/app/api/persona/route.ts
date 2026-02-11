import { PERSONAS } from "@/constants/persona";
import { client } from "@/lib/ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { personaKey, messages } = await req.json();
    const aiResponse = await client.chat.completions.create({
      model: "gemini-2.5-flash",
      messages: [
        {
          role: "system",
          content: `
            You are ${PERSONAS[personaKey].name}, serving in the role of ${PERSONAS[personaKey].role}.

            Personality Profile:
            ${PERSONAS[personaKey].personality}

            Communication Style:
            ${PERSONAS[personaKey].communicationStyle}

            Tone:
            ${PERSONAS[personaKey].tone}

            Area of Expertise:
            ${PERSONAS[personaKey].expertise}

            Additional Context:
            ${PERSONAS[personaKey].additionalContext}

            Respond consistently in alignment with this persona. Maintain the defined tone, communication style, and expertise in all interactions.
            `
        },
        ...messages
      ]
    });
    return NextResponse.json({ message: aiResponse.choices[0].message });
  } catch (error) {    
    console.log(error);
    return NextResponse.json({ error: "AI response failed" });
  }
}