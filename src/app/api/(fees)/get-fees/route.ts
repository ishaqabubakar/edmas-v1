import Fees from "@/Model/Fees/fees";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    
    const fees = await Fees.find()

    return NextResponse.json(
      {
        message: "All fees",
        data: fees,
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
