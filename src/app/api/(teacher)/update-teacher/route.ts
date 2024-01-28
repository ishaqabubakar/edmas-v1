import { NextRequest, NextResponse } from "next/server";
import Teacher from "../../../../Model/Teacher/teacher";
import User from "@/Model/user/user";

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

      // Update specific fields in the User document
      const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });

      // Update specific fields in the Student document
      const updatedTeacher = await Teacher.findOneAndUpdate(
        { userId: updatedUser?._id },
        data,
        { new: true }
      );

    return NextResponse.json(
      {
        message: "Teacher Updated",
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
