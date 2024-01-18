import { NextRequest, NextResponse } from "next/server";
import Noticeboard from "../../../../../Model/Noticeboard/noticeboard";


export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a Noticeboard Info.",
        },
        { status: 400 }
      );
    }

    const updatedNoticeboard = await Noticeboard.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    if (!updatedNoticeboard) {
      return NextResponse.json(
        {
          message: `Noticeboard with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Noticeboard updated",
        data: updatedNoticeboard,
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
