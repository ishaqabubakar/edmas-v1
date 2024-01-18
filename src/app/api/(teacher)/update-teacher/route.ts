import { NextRequest, NextResponse } from "next/server";
import Teacher from "../../../../../Model/Teacher/teacher";

export async function PUT(req: NextRequest) {
  try {
    const { data ,id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          messasge: "could not update teacher",
        },
        { status: 400 }
      );
    }

    const updatedTeacher = await Teacher.findByIdAndUpdate(id, data);

    return NextResponse.json(
      {
        message: "Teacher created",
        data: updatedTeacher,
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
