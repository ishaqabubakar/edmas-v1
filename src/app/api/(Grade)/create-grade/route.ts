// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Grade from "@/Model/Grade/grade";

export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Extract data from the request body
    const {
      schoolId,
      teacherId,
      title,
      studentId,
      classId,
      sectionId,
      marks,
      grade,
    } = await req.json();

    // Validate required fields
    if (!schoolId || !teacherId || !title || !studentId || !classId || !sectionId || !marks || !grade) {
      return NextResponse.json(
        {
          message: "Please provide all required fields.",
        },
        { status: 400 }
      );
    }


    // Create a new grade
    const newGrade = new Grade({
      school: schoolId,
      teacher: teacherId,
      title,
      student: studentId._id,
      classname:classId,
      section: sectionId,
      marks,
      grade,
    });

    // Save the new grade to the database
    const savedGrade = await newGrade.save();

    return NextResponse.json(
      {
        message: "Grade created",
        data: savedGrade,
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
