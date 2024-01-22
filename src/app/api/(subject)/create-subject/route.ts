import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import School from "@/Model/School/school";
import Subject from "@/Model/Subject/subject";
import Teacher from "@/Model/Teacher/teacher";
import Class from "@/Model/Class/class";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { school, subjectname, classId, teacher } = await req.json();
    const currentSchool = await School.findById(school);

    const existingSubject = await Subject.findOne({
      subjectname,
      school: currentSchool,
    });

    if (existingSubject) {
      return NextResponse.json(
        {
          messasge: "Subject name already exist.",
        },
        { status: 400 }
      );
    }

    if (!school || !subjectname || !classId || !teacher) {
      return NextResponse.json(
        {
          messasge: "Enter all fieds",
        },
        { status: 400 }
      );
    }

    const schoolByOne = await School.findById(school);
    const teacherByOne = await Teacher.findOne({ name: teacher })
   ;
    const classsByOne = await Class.findOne({ classname: classId })
   ;

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
      class: classsByOne?._id,
      teacher: teacherByOne?._id,
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
    console.log(error)
    return NextResponse.json(
     
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
