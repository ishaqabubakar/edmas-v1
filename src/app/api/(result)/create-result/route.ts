import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Result from "@/Model/Result/result";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { student, exam, score, subject, date, status, comments } =
      await req.json();

    if (!student || !exam || !subject || !score || !date || !status) {
      return NextResponse.json(
        {
          messasge: "Please ensure all details are filled in.",
        },
        { status: 400 }
      );
    }

    const newResult = new Result({
      student,
      exam,
      subject,
      score,
      date,
      status,
      comments,
    });

    const savedResult = await newResult.save();

    return NextResponse.json(
      {
        message: "Result recorded",
        data: savedResult,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
