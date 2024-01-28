
import Teacher from "@/Model/Teacher/teacher";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { id } = await req.json();

    // Validate schoolId
    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. Provide teacher id",
        },
        { status: 400 }
      );
    }

    const teacher = (await Teacher.findOne({ userId: id })) as any;

    if (!teacher) {
      return NextResponse.json(
        {
          message: `No teacher found`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Teacher found",
        data:teacher,
       
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
