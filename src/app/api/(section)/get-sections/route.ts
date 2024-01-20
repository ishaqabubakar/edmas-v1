import { NextRequest, NextResponse } from "next/server";
import Section from "../../../../Model/Section/section";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    // Validate schoolId
    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'schoolId' is required.",
        },
        { status: 400 }
      );
    }

    const sections = await Section.find({ school: id });

    if (!sections || sections.length === 0) {
      return NextResponse.json(
        {
          message: `No ssection found for schoolId ${id}.`,
        },
        { status: 404 }
      );
    }
    return NextResponse.json(
      {
        message: "All sections",
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
