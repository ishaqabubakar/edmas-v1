import { NextRequest, NextResponse } from "next/server";
import Class from "../../../../../Model/Class/class";

export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a class.",
        },
        { status: 400 }
      );
    }

    const updatedClass = await Class.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    if (!updatedClass) {
      return NextResponse.json(
        {
          message: `Class with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Class updated",
        data: updatedClass,
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
