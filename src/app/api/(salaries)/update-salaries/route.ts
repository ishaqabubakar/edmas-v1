import { NextRequest, NextResponse } from "next/server";
import Salaries from "../../../../Model/Salaries/salary";

export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a Salaries Info.",
        },
        { status: 400 }
      );
    }

    const updatedSalaries = await Salaries.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    if (!updatedSalaries) {
      return NextResponse.json(
        {
          message: `Salaries with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Salaries updated",
        data: updatedSalaries,
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
