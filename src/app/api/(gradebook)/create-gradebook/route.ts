
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Gradebook from "@/Model/Gradebook/gradebook";

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const {student, subject, grades,  term,  year , comments  } = await req.json();

    if (!student || !subject || !grades || !term ) {
      return NextResponse.json(
        {
          messasge: "Please ensure all details are filled in.",
        },
        { status: 400 }
      );
    }

    const newGradebook = new Gradebook({
      student,
      subject,
      grades,
      term,
      year,
      comments
    });

    const savedGradebook = await newGradebook.save();

    return NextResponse.json(
      {
        message: "Gradebook created",
        data: savedGradebook,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
