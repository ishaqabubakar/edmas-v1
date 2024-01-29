
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Payment from "@/Model/Payment/payment";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { classname, student, school, amount, transactiondate, status } =
      await req.json();

    if (!amount || !status || !school || !transactiondate) {
      return NextResponse.json(
        {
          message: "Please provide the correct details",
        },
        { status: 400 }
      );
    }

    if (!classname || !student || !amount) {
      return NextResponse.json(
        {
          message: "Student and their respective details cannot be found.",
        },
        { status: 404 }
      );
    }

    const newPayment = new Payment({
      classname,
      school,
      transactiondate,
      status,
      amount,
    });

    const savedPayment = await newPayment.save();

    return NextResponse.json(
      {
        message: "Payment created",
        data: savedPayment,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error); // Log the error for debugging

    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
