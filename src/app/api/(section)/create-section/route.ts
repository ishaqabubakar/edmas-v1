// Import other necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Section from "../../../../../Model/Section/section";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { name, nickname, teacher } = await req.json();

    if (!name || !nickname || !teacher) {
      return NextResponse.json(
        {
          message: "Please ensure to fill all fields",
        },
        { status: 400 }
      );
    }

    const newSection = new Section({
      name,
      nickname,
      teacher,
    });

    const savedSection = await newSection.save();

    return NextResponse.json(
      {
        message: "Payment created",
        data: savedSection,
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
