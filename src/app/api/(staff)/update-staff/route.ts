import { NextRequest, NextResponse } from "next/server";
import Staff from "../../../../../Model/Staff/staff";

export async function PUT(req: NextRequest) {
  try {
    const { data ,id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          messasge: "could not update staff",
        },
        { status: 400 }
      );
    }

    const updatedStaff = await Staff.findByIdAndUpdate(id, data);

    return NextResponse.json(
      {
        message: "Staff updated",
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
