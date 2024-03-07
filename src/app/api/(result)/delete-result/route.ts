import { NextRequest, NextResponse } from "next/server";
import Result from "@/Model/Result/result";

export async function DELETE(req: NextRequest) {
    
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message:
            "Invalid request. 'id' is required for deleting a Result Info.",
        },
        { status: 400 }
      );
    }

    const deletedResult = await Result.findByIdAndDelete(id);

    if (!deletedResult) {
      return NextResponse.json(
        {
          message: `Result with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "result deleted",
        data: deletedResult,
      },
      { status: 200 }
    );
  } catch (error: any) {
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
