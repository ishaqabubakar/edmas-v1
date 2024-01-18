import { NextRequest, NextResponse } from "next/server";
import Material from "../../../../../Model/Materials/material";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message:
            "Invalid request. 'id' is required for deleting a Material Info.",
        },
        { status: 400 }
      );
    }

    const deletedMaterial = await Material.findByIdAndDelete(id);

    if (!deletedMaterial) {
      return NextResponse.json(
        {
          message: `Material with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Material deleted",
        data: deletedMaterial,
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
