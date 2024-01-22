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

    const student = (await Student.findOne({ userId: id })) as any;

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
          name: student?.name,
          email: student?.email,
          class: student?.class,
          section: student?.section,
          parentName: student?.parent?.fullname,
          parentemail: student?.parent?.parentemail,
          proffession: student?.parent?.proffession,
          admission: student?.admissioncode,
          address: student?.address,
          dob: student?.dob,
        },
       
      },
      { status: 200 }
    );
  } catch (error: any) {
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
