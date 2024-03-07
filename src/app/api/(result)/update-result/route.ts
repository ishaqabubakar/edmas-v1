import { NextRequest, NextResponse } from "next/server";
import Result from "@/Model/Result/result";

export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a Result Info.",
        },
        { status: 400 }
      );
    }

    const updatedResult = await Result.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    if (!updatedResult) {
      return NextResponse.json(
        {
          message: `Result with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Result updated",
        data: updatedResult,
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
