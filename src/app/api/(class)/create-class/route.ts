// Import other necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Class from "../../../../../Model/Class/class";
import Teacher from "../../../../../Model/Teacher/teacher";
import School from "../../../../../Model/school/school";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { classname, school, teacher, size } = await req.json();
    const currentSchool = await School.findById(school);

    const existingClass = await Class.findOne({
      classname,
      school: currentSchool,
    });

    if (!classname || !school) {
      return NextResponse.json(
        {
          message: "Please provide class name and school ID",
        },
        { status: 400 }
      );
    }
    if (existingClass) {
      return NextResponse.json(
        {
          message: "Class name already exists for the specified school",
        },
        { status: 400 }
      );
    }

    // Check if teacher exists
    const teacherByOne = await Teacher.findOne({ name: teacher });

    if (!teacherByOne) {
      return NextResponse.json(
        {
          message: "Teacher not found",
        },
        { status: 404 }
      );
    }

    const newClass = new Class({
      classname,
      school: school,
      teacher: [teacherByOne._id], // Ensure teacher is an array
      size,
    });

    const savedClass = await newClass.save();

    // Populate the teacher field in the savedClass result
    await savedClass.populate("teacher");

    return NextResponse.json(
      {
        message: "Class created",
        data: {
          name: savedClass?.classname,
          size: savedClass?.size,
          teacher: savedClass?.teacher,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
