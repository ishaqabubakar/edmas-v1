import { NextRequest, NextResponse } from "next/server";
import Gradebook from "@/Model/Gradebook/gradebook";


export async function GET() {
  try {
    
    const gradebooks = await Gradebook.find()

    return NextResponse.json(
      {
        message: "All gradebooks",
        data: gradebooks,
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
