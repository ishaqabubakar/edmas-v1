import Student from "@/Model/Student/student";
import User from "@/Model/user/user";
import { NextRequest, NextResponse } from "next/server";


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

    const updatedUser= await User.findByIdAndUpdate(id, data);
    const updatedStudent= await Student.findOneAndUpdate({userId:updatedUser?._id}, data);


    return NextResponse.json(
      {
        message: "Student Updated",
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
