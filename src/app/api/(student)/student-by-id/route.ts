import Student from "@/Model/Student/student";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { id } = await req.json();

    // Validate schoolId
    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. Provide student id",
        },
        { status: 400 }
      );
    }

    const student = await Student.find({ _id:id }) as any;

    if (!student) {
      return NextResponse.json(
        {
          message: `No student found`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Student found",
        data: {
          name:student[0]?.name,
          email:student[0]?.email,
          class:student[0]?.class ,
          section:student[0]?.section ,
          parentName:student[0]?.parent?.fullname ,
          parentemail:student[0]?.parent?.parentemail,
          proffession:student[0]?.parent?.proffession,
          admission:student[0]?.admissioncode,
          address:student[0]?.address,
          dob:student[0]?.dob
        },
      },
      { status: 200 }
    );
  } catch (error :any) {
    console.error("Error:", error.message);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
