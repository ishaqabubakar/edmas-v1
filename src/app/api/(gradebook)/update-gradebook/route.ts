import { NextRequest, NextResponse } from "next/server";
import Gradebook from "@/Model/Gradebook/gradebook";

export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a Gradebook Info.",
        },
        { status: 400 }
      );
    }

    const updatedGradebook = await Gradebook.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    if (!updatedGradebook) {
      return NextResponse.json(
        {
          message: `Gradebook with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Gradebook updated",
        data: updatedGradebook,
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
