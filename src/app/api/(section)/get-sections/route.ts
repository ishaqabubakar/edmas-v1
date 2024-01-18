import { NextRequest, NextResponse } from "next/server";
import Section from "../../../../../Model/Section/section";

export async function GET() {
  try {
    const sections = await Section.find();

    return NextResponse.json(
      {
        message: "All schools",
        data: sections,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
