import { NextRequest, NextResponse } from "next/server";
import Student from "../../../../../Model/Student/student";

export async function PUT(req: NextRequest) {
  try {
    const { data ,id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          messasge: "could not update school",
        },
        { status: 400 }
      );
    }

    const updatedStudent= await Student.findByIdAndUpdate(id, data);

    return NextResponse.json(
      {
        message: "School created",
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
