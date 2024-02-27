import { NextRequest, NextResponse } from "next/server";
import Class from "../../../../Model/Class/class";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for deleting a class.",
        },
        { status: 400 }
      );
    }

    const deletedClass = await Class.findByIdAndDelete(id);

    if (!deletedClass) {
      return NextResponse.json(
        {
          message: `Class with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Class deleted",
        data: deletedClass,
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
