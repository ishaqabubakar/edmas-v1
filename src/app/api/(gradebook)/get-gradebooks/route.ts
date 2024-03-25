import { NextRequest, NextResponse } from "next/server";
import Grade from "@/Model/Grade/grade";
import Student from "@/Model/Student/student";
import Subject from "@/Model/Subject/subject";
import Class from "@/Model/Class/class";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    const gradebooks = await Grade.find({ school: id });

    const formattedGradebooks = await Promise.all(gradebooks.map(async gradebook => {
      const student = await Student.findById(gradebook.student);
      const subject = await Subject.findById(gradebook.subject);
      const classInfo = await Class.findById(gradebook.classname);
      return {
        _id: gradebook._id,
        grade: gradebook.grade,
        studentName: student ? student.name : "N/A",
        marks: gradebook.marks,
        term: gradebook.term,
        subjectName: subject ? subject.subjectname : "N/A",
        className: classInfo ? classInfo.classname : "N/A"
      };
    }));

    return NextResponse.json(
      {
        message: "All gradebooks",
        data: formattedGradebooks,
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
