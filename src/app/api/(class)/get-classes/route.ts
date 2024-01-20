import { NextRequest, NextResponse } from "next/server";
import Class from "../../../../Model/Class/class";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { schoolId } = await req.json();

    // Validate schoolId
    if (!schoolId ) {
      return NextResponse.json(
        {
          message: "Invalid request. 'schoolId' is required.",
        },
        { status: 400 }
      );
    }

    const classes = await Class.find({ school: schoolId })

    if (!classes || classes.length === 0) {
      return NextResponse.json(
        {
          message: `No class found for schoolId ${schoolId}.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Student found",
        data: classes,
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
