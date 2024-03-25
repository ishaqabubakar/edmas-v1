import { NextRequest, NextResponse } from "next/server";
import Grade from "@/Model/Grade/grade";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    const gradebook = await Grade.findById(id)
      .populate("student", "name")
      .populate("classname", "classname")
      .populate("subject", "subjectname");

    if (!gradebook) {
      return NextResponse.json(
        {
          message: "Gradebook not found",
        },
        { status: 404 }
      );
    }

    const { student, marks, grade, subject, classname, term } = gradebook;

    return NextResponse.json(
      {
        message: "Specific gradebook",
        data: {
          studentName: student.name,
          marks,
          grade,
          subjectname: subject.subjectname,
          classname: classname.classname,
          term
        },
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
