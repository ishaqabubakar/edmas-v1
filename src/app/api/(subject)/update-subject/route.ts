import Subject from "@/Model/Subject/subject";
import { NextRequest, NextResponse } from "next/server";



export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a Subject Info.",
        },
        { status: 400 }
      );
    }

    const updatedSubject = await Subject.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    if (!updatedSubject) {
      return NextResponse.json(
        {
          message: `Subject with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Noticeboard updated",
        data: updatedSubject,
      },
      { status: 200 }
    );
  } catch (error:any) {
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
