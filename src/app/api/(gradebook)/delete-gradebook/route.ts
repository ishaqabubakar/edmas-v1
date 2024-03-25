import { NextRequest, NextResponse } from "next/server";
import Gradebook from "@/Model/Gradebook/gradebook";
import Grade from "@/Model/Grade/grade";

export async function POST(req: NextRequest) {
    
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message:
            "Invalid request. 'id' is required for deleting a Gradebook Info.",
        },
        { status: 400 }
      );
    }

    const deletedGradebook = await Grade.findByIdAndDelete(id);

    if (!deletedGradebook) {
      return NextResponse.json(
        {
          message: `Gradebook with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Gradebook deleted",
        data: deletedGradebook,
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
