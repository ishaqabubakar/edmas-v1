import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import School from "@/Model/School/school";
import Subject from "@/Model/Subject/subject";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { school, subjectname, class: classId, teacher } = await req.json();

    if (!school || !subjectname || !classId || !teacher) {
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
    const newSubject = new Subject({
      school: school,
      subjectname,
      classId,
      teacher,
    });

    const savedSubject = await newSubject.save();

    return NextResponse.json(
      {
        message: "Subject created",
        data: savedSubject,
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
