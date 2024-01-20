// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Grade from "../../../../Model/Grade/grade";

export async function DELETE(req: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Extract data from the request body
    const { id } = await req.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for deleting a grade.",
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

    // Delete the grade
    const deletedGrade = await Grade.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: "Grade deleted",
        data: deletedGrade,
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
