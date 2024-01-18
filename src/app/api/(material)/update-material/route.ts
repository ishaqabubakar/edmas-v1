import { NextRequest, NextResponse } from "next/server";
import Material from "../../../../../Model/Materials/material";


export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a Material Info.",
        },
        { status: 400 }
      );
    }

    const updatedMaterial = await Material.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    if (!updatedMaterial) {
      return NextResponse.json(
        {
          message: `Noticeboard with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Material updated",
        data: updatedMaterial,
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
