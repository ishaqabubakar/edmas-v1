// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Grade from "../../../../Model/Grade/grade";
import Teacher from "../../../../Model/Teacher/teacher";
import Student from "../../../../Model/Student/student";
import Class from "../../../../Model/Class/class";
import Section from "../../../../Model/Section/section";

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

    // Check if related documents (School, Teacher, Student, Class, Section) exist
    const teacher = await Teacher.findOne(teacherId);
    const student = await Student.findOne(studentId);
    const className = await Class.findOne(classId);
    const section = await Section.findOne(sectionId);

    if (!teacher || !student || !className || !section) {
      return NextResponse.json(
        {
          message: "One or more related documents not found.",
        },
        { status: 404 }
      );
    }

    // Create a new grade
    const newGrade = new Grade({
      school: schoolId,
      teacher: teacher._id,
      title,
      student: student._id,
      class: className._id,
      section: section._id,
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
