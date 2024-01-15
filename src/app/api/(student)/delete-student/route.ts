import { NextRequest, NextResponse } from "next/server";
import Student from "../../../../../Model/Student/student";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          messasge: "could not delete student",
        },
        { status: 400 }
      );
    }
    const updatedStudent = await Student.findOneAndDelete(id);
    return NextResponse.json(
      {
        message: "School deletd",
        data: updatedStudent,
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
