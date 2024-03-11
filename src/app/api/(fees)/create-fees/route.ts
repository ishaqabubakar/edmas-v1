// Import other necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Fees from "@/Model/Fees/fees";
import Student from "@/Model/Student/student";
import Class from "@/Model/Class/class";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const {
      classname,
      school,
      student,
      amount,
      narration,
      status,
      transactionDate,
    } = await req.json();

    const singleStudent = await Student.findOne({ name: student })
    const singleClass = await Class.findOne({ classname: classname })

    if (!singleStudent) {
      // Handle case when student is not found
      return NextResponse.json(
        {
          message: "Student not found",
        },
        { status: 404 }
      );
    }

    if ( !amount || !status) {
      return NextResponse.json(
        {
          message: "Please provide the correct details",
        },
        { status: 400 }
      );
    }
  

    const newFees = new Fees({
      classname:singleClass,
      school,
      student:singleStudent,
      amount,
      status,
      narration,
      transactionDate,
    });

    const savedFees = await newFees.save();

    return NextResponse.json(
      {
        message: "Fees created",
        data: savedFees,
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
