import { NextRequest, NextResponse } from "next/server";
import Student from "../../../../../Model/Student/student";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { schoolId } = await req.json();

    // Validate schoolId
    if (!schoolId) {
      return NextResponse.json(
        {
          message: "Invalid request. 'schoolId' is required.",
        },
        { status: 400 }
      );
    }

    const student = await Student.find({ schoolId });

    if (!student) {
      return NextResponse.json(
        {
          message: `No student found for schoolId ${schoolId}.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Student found",
        data: student,
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
