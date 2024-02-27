// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Routine from "@/Model/Routine/routine";


export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Extract data from the request body
    const { id } = await req.json();

    // Validate required fields
    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for deleting a routine.",
        },
        { status: 400 }
      );
    }

    // Check if the routine exists
    const existingRoutine = await Routine.findById(id);

    if (!existingRoutine) {
      return NextResponse.json(
        {
          message: `Routine with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    // Delete the routine
    const deletedRoutine = await Routine.findByIdAndDelete(id);

    return NextResponse.json(
      {
        message: "Routine deleted",
        data: deletedRoutine,
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
