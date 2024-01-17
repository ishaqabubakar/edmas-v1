import { NextRequest, NextResponse } from "next/server";
import Staff from "../../../../../Model/Staff/staff";

export async function DELETE(req: NextRequest) {
  try {
    const { _id } = await req.json();

    if (!_id) {
      return NextResponse.json(
        {
          messasge: "could not delete staff",
        },
        { status: 400 }
      );
    }
    const updatedStaff = await Staff.findOneAndDelete({_id});
    return NextResponse.json(
      {
        message: "Staff deleted",
        data: updatedStaff,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
