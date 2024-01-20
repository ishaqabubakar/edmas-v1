import { NextRequest, NextResponse } from "next/server";
import Subject from "../../../../Model/Syllabus/syllabus";
import Syllabus from "../../../../Model/Syllabus/syllabus";


export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a Syllabus Info.",
        },
        { status: 400 }
      );
    }

    const updatedSyllabus = await Syllabus.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    if (!updatedSyllabus) {
      return NextResponse.json(
        {
          message: `Syllabus with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Syllabus updated",
        data: updatedSyllabus,
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
