import Teacher from "../../../../../Model/Teacher/teacher";
import Admin from "../../../../../Model/Admin/admin";
import Student from "../../../../../Model/Student/student";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import { User } from "../../../../../Model/user/user";
import School from "../../../../../Model/school/school";
import { comparedPassword } from "@/helpers/bycrpt";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    const singleStudent = await Student.findOne({ email });
    const singleTeacher = await Teacher.findOne({ email });
    const singleAdmin = await Admin.findOne({ email });
    const singleUser = await User.findOne({ email });
    const userSchool = await School.findOne({ _id: singleStudent.schoolId });

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

    const decodedPasword = comparedPassword(password, singleUser.password);

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
          data: singleAdmin,
        },
        { status: 200 }
      );
    }
    if (singleUser.role === "student") {
      return NextResponse.json(
        {
          message: "login successfully",
          data: [singleStudent, userSchool],
        },
        { status: 200 }
      );
    }
    if (singleUser.role === "teacher") {
      return NextResponse.json(
        {
          message: "login successfully",
          data: singleTeacher,
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
