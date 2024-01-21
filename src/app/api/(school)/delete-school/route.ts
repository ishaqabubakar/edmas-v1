import School from "@/Model/School/school";
import { NextRequest, NextResponse } from "next/server";



export async function DELETE(req: NextRequest) {
  try {
    const { _id } = await req.json();

    if (!_id) {
      return NextResponse.json(
        {
          messasge: "could not delete school",
        },
        { status: 400 }
      );
    }
    const updatedSchool = await School.findOneAndDelete({_id});
    return NextResponse.json(
      {
        message: "School deletd",
        data: updatedSchool,
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
