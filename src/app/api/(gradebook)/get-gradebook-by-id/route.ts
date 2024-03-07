import { NextRequest, NextResponse } from "next/server";
import Gradebook from "@/Model/Gradebook/gradebook";


export async function POST( req:NextRequest) {
  try {
    const { id } = await req.json()
    const gradebook = await Gradebook.findById(id)

    return NextResponse.json(
      {
        message: "Speecific gradebook",
        data: gradebook,
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
