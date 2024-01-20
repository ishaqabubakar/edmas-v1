import { NextRequest, NextResponse } from "next/server";
import Payment from "../../../../Model/Payment/payment";

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

    const allPayment = await Payment.find({ schoolId})

    if (!allPayment || allPayment.length === 0) {
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
        data: allPayment,
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
