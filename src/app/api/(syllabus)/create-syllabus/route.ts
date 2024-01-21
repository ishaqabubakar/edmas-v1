import { NextRequest, NextResponse } from "next/server";


import connectDB from "@/config/connection";
import School from "@/Model/School/school";
import Syllabus from "@/Model/Syllabus/syllabus";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { school, classname, subject , title , attachment } = await req.json();

    if (!school || !classname || !subject || !title || !attachment) {
      return NextResponse.json(
        {
          messasge: "Please provide name, location and phone",
        },
        { status: 400 }
      );
    }

    const schoolByOne = await School.findOne({ school });

    if (!schoolByOne) {
      return NextResponse.json(
        {
          message: "Student and their respective details cannot be found.",
        },
        { status: 404 }
      );
    }
    const newSyllabus = new Syllabus({
      school: school.id,
      classname,
      subject,
      title,
      attachment
    });

    const savedSyllabus = await newSyllabus.save();

    return NextResponse.json(
      {
        message: "Syllabus created",
        data: savedSyllabus,
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
