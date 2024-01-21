import Section from "@/Model/Section/section";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          messasge: "could not delete section",
        },
        { status: 400 }
      );
    }
    const updatedSection = await Section.findOneAndDelete(id);
    return NextResponse.json(
      {
        message: "Section deleted",
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
