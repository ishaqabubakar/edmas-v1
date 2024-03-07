import Fees from "@/Model/Fees/fees";
import { NextRequest, NextResponse } from "next/server";


export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message:
            "Invalid request. 'id' is required for deleting a Fees Info.",
        },
        { status: 400 }
      );
    }

    const deletedFees = await Fees.findByIdAndDelete(id);

    if (!deletedFees) {
      return NextResponse.json(
        {
          message: `Fees with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Fees deleted",
        data: deletedFees,
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
