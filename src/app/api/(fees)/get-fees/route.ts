import Fees from "@/Model/Fees/fees";
import { NextResponse } from "next/server";

export async function POST() {
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
