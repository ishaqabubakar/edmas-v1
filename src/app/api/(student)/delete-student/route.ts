import Student from "@/Model/Student/student";
import User from "@/Model/user/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Could not delete student. Invalid ID provided.",
        },
        { status: 400 }
      );
    }

    // Delete user
    const deletedUser = await User.findOneAndDelete({ _id: id });

    // Delete associated student
    await Student.findOneAndDelete({ userId: id });

    if (!deletedUser) {
      return NextResponse.json(
        {
          message: "User not found.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "User and associated student deleted successfully.",
        data: deletedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting user and associated student:", error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
