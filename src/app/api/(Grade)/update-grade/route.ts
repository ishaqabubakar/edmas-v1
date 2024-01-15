// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Grade from "../../../../../Model/Grade/grade";

export async function PUT(req: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Extract data from the request body
    const { id, data } = await req.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a grade.",
        },
        { status: 400 }
      );
    }

    // Check if the grade exists
    const existingGrade = await Grade.findById(id);

    if (!existingGrade) {
      return NextResponse.json(
        {
          message: `Grade with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    // Update the grade
    const updatedGrade = await Grade.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    return NextResponse.json(
      {
        message: "Grade updated",
        data: updatedGrade,
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
