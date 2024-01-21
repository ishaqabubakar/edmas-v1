import Subject from "@/Model/Subject/subject";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message:
            "Invalid request. 'id' is required for deleting a Subject Info.",
        },
        { status: 400 }
      );
    }

    const deletedSubject = await Subject.findByIdAndDelete(id);

    if (!deletedSubject) {
      return NextResponse.json(
        {
          message: `Subject with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Subject deleted",
        data: deletedSubject,
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
