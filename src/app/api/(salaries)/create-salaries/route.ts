// Import other necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Salaries from "../../../../../Model/Salaries/salary";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const {
      staffname,
      school,
      amount,
      title,
      description,
      transactiondate,
      status,
      stafftype,
    } = await req.json();

    if (
      !amount ||
      !status ||
      !school ||
      !transactiondate ||
      !staffname ||
      !school ||
      !stafftype
    ) {
      return NextResponse.json(
        {
          message: "Please provide the correct details",
        },
        { status: 400 }
      );
    }

    const newSalaries = new Salaries({
      staffname,
      stafftype,
      school: school,
      title,
      description,
      transactiondate,
      status,
      amount,
    });

    const savedSalaries = await newSalaries.save();

    return NextResponse.json(
      {
        message: "Salaries Info created",
        data: savedSalaries,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
