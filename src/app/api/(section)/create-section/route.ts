// Import other necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import School from "@/Model/School/school";
import Section from "@/Model/Section/section";
import Teacher from "@/Model/Teacher/teacher";


export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { name, nickname, teacher, school } = await req.json();
    const currentSchool = await School.findById(school);

    const existingSection = await Section.findOne({
      name,
      school: currentSchool,
    });

    if (!name || !nickname || !teacher) {
      return NextResponse.json(
        {
          message: "Please ensure to fill all fields",
        },
        { status: 400 }
      );
    }

    if (existingSection) {
      return NextResponse.json(
        {
          message: "Class name already exists for the specified school",
        },
        { status: 400 }
      );
    }
    // Check if teacher exists
    const teacherByOne = await Teacher.findOne({ name: teacher });
    const newSection = new Section({
      name,
      nickname,
      teacher: [teacherByOne._id],
      school,
    });

    const savedSection = await newSection.save();

    return NextResponse.json(
      {
        message: "Payment created",
        data: savedSection,
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
