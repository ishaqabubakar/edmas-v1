 import Teacher from "../../../../../Model/Teacher/teacher";
import Admin from "../../../../../Model/Admin/admin";
import Student from "../../../../../Model/Student/student";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import { User } from "../../../../../Model/user/user";
import School from "../../../../../Model/school/school";
import { comparedPassword } from "@/helpers/bycrpt";
import Owner from "../../../../../Model/Admin/Owner/Owner";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    const singleStudent = await Student.findOne({ email });
    const singleTeacher = await Teacher.findOne({ email });
    const singleAdmin = await Admin.findOne({ email });
    const singleOwner = await Owner.findOne({ email })
    const singleUser = await User.findOne({ email });
    const studenSchool = await School.findOne({ _id: singleStudent?.school });
    const teacherSchool = await School.findOne({ _id: singleTeacher?.school });
    const ownerSchool = await School.findOne({ _id: singleOwner?.school });

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Invalid email or password",
          data: [],
        },
        { status: 401 }
      );
    }
    if (!singleUser) {
      return NextResponse.json(
        {
          message: "User not found",
          data: [],
        },
        { status: 401 }
      );
    }

    const decodedPasword = await comparedPassword(password, singleUser.password);

    if (!decodedPasword) {
      return NextResponse.json(
        {
          message: "Inccorrect password",
          data: [],
        },
        { status: 401 }
      );
    }

    if (singleUser.role === "admin") {
      return NextResponse.json(
        {
          message: "login successfully",
          data: [singleUser,singleAdmin,],
        },
        { status: 200 }
      );
    }

    if (singleUser.role === "owner") {
      return NextResponse.json(
        {
          message: "login successfully",
          data: [singleUser,singleOwner,ownerSchool],
        },
        { status: 200 }
      );
    }

    if (singleUser.role === "student") {
      return NextResponse.json(
        {
          message: "login successfully",
          data: [singleUser, singleStudent,studenSchool],
        },
        { status: 200 }
      );
    }
    if (singleUser.role === "teacher") {
      return NextResponse.json(
        {
          message: "login successfully",
          data: [singleUser,singleTeacher,teacherSchool],
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        {
          message: "No data found for this user",
          data: [],
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "internal server error",
        data: [],
      },
      { status: 500 }
    );
  }
}
