import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Class from "@/Model/Class/class";
import Subject from "@/Model/Subject/subject";
import Grade from "@/Model/Grade/grade";
import Student from "@/Model/Student/student";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { school, student, subject, marks, grade, term, classname } =
      await req.json();

    if (!student || !subject || !grade || !term) {
      return NextResponse.json(
        {
          messasge: "Please ensure all details are filled in.",
        },
        { status: 400 }
      );
    }

    const singleStudent = await Student.findOne({ name: student });
    const singleClass = await Class.findOne({ classname: classname });
    const singleSubject = await Subject.findOne({ subjectname: subject });

    const newGradebook = new Grade({
      school,
      student: singleStudent,
      classname: singleClass,
      subject: singleSubject,
      marks,
      grade,
      term,
    });

    const savedGradebook = await newGradebook.save();
    const extractStudent = await Student.findById(savedGradebook?.student)

    return NextResponse.json(
      {
        message: "Gradebook created",
        data: savedGradebook,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
