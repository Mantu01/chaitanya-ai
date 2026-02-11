import { PERSONA_CATEGORIES } from "@/constants/personaCategory";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const keys = Object.keys(PERSONA_CATEGORIES);
    return NextResponse.json({person:PERSONA_CATEGORIES,keys});
    console.log({keys})
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch personas" },
      { status: 500 }
    );
  }
}
