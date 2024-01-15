// Import other necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Class from "../../../../../Model/Class/class";
import Teacher from "../../../../../Model/Teacher/teacher";
import School from "../../../../../Model/school/school";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const { classname, school, classalias, teacher, size } = await req.json();
    
    if (!classname || !school) {
      return NextResponse.json(
        {
          message: "Please provide class name and school ID",
        },
        { status: 400 }
      );
    }

    // Check if teacher and school exist
    const teacherByOne = await Teacher.findOne({teacher});
    const schoolByOne = await School.findById(school);

    if (!teacherByOne || !schoolByOne) {
      return NextResponse.json(
        {
          message: "Teacher or school not found",
        },
        { status: 404 }
      );
    }

    const newClass = new Class({
      classname,
      school: schoolByOne._id,
      classalias,
      teacher: [teacherByOne._id], // Ensure teacher is an array
      size,
    });

    const savedClass = await newClass.save();

    return NextResponse.json(
      {
        message: "Class created",
        data: savedClass,
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
