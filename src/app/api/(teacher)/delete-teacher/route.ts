import Teacher from "@/Model/Teacher/teacher";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          messasge: "could not delete teacher",
        },
        { status: 400 }
      );
    }
    const updatedTeacher = await Teacher.findOneAndDelete(id);
    return NextResponse.json(
      {
        message: "Taecher deletd",
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
