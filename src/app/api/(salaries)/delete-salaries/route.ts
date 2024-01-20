import { NextRequest, NextResponse } from "next/server";
import Salaries from "../../../../Model/Salaries/salary";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message:
            "Invalid request. 'id' is required for deleting a Salaries Info.",
        },
        { status: 400 }
      );
    }

    const deletedSalaries = await Salaries.findByIdAndDelete(id);

    if (!deletedSalaries) {
      return NextResponse.json(
        {
          message: `Payment with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Salary deleted",
        data: deletedSalaries,
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
