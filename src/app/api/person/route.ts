import { PERSONAS } from "@/constants/persona";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const data = Object.entries(PERSONAS).map(([key, value]) => ({
      key,
      name: value.name ?? null,
      image: value.image ?? null,
    }));

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to fetch personas" },
      { status: 500 }
    );
  }
}
