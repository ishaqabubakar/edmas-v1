import Salaries from "@/Model/Salaries/salary";
import { NextRequest, NextResponse } from "next/server";


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

    const salaries = await Salaries.find({ school:schoolId });

    if (!salaries) {
      return NextResponse.json(
        {
          message: `No salary found for schoolId ${schoolId}.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Student found",
        data: salaries,
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
