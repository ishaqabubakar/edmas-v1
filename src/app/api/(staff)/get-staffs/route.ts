import { NextRequest, NextResponse } from "next/server";
import Staff from "../../../../../Model/Staff/staff";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { school } = await req.json();

    // Validate schoolId
    if (!school) {
      return NextResponse.json(
        {
          message: "Invalid request. 'schoolId' is required.",
        },
        { status: 400 }
      );
    }

    const staff = await Staff.find({ school });

    if (!staff) {
      return NextResponse.json(
        {
          message: `No staff found for schoolId ${school}.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Student found",
        data: staff,
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
