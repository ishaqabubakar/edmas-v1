import Student from "@/Model/Student/student";
import User from "@/Model/user/user";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          messasge: "Could not update student",
        },
        { status: 400 }
      );
    }

    // Update specific fields in the User document
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

    // Update specific fields in the Student document
    const updatedStudent = await Student.findOneAndUpdate(
      { userId: updatedUser?._id },
      data,
      { new: true }
    );

    return NextResponse.json(
      {
        message: "Student Updated",
        data: updatedStudent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
