import { NextRequest, NextResponse } from "next/server";
import Syllabus from "../../../../Model/Syllabus/syllabus";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message:
            "Invalid request. 'id' is required for deleting a Syllabus Info.",
        },
        { status: 400 }
      );
    }

    const deletedSyllabus = await Syllabus.findByIdAndDelete(id);

    if (!deletedSyllabus) {
      return NextResponse.json(
        {
          message: `Syllabus with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Subject deleted",
        data: deletedSyllabus,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
