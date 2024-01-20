import { NextRequest, NextResponse } from "next/server";
import Payment from "../../../../Model/Payment/payment";

export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a Payment Info.",
        },
        { status: 400 }
      );
    }

    const updatedPayment = await Payment.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    if (!updatedPayment) {
      return NextResponse.json(
        {
          message: `Payment with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Payment updated",
        data: updatedPayment,
      },
      { status: 200 }
    );
  } catch (error:any) {
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
