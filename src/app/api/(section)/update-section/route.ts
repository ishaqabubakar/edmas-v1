import { NextRequest, NextResponse } from "next/server";
import Section from "../../../../Model/Section/section";

export async function PUT(req: NextRequest) {
  try {
    const { name, nickname, teacher, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          messasge: "could not update section",
        },
        { status: 400 }
      );
    }

    const updatedSection = await Section.findByIdAndUpdate(id, {
      name,
      nickname,
      teacher,
    });

    return NextResponse.json(
      {
        message: "Section updated",
        data: updatedSection,
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
