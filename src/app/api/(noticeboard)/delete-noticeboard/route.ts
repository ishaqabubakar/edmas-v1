import { NextRequest, NextResponse } from "next/server";
import Noticeboard from "../../../../../Model/Noticeboard/noticeboard";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message:
            "Invalid request. 'id' is required for deleting a Noticeboard Info.",
        },
        { status: 400 }
      );
    }

    const deletedNoticeboard = await Noticeboard.findByIdAndDelete(id);

    if (!deletedNoticeboard) {
      return NextResponse.json(
        {
          message: `Payment with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Payment deleted",
        data: deletedNoticeboard,
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
