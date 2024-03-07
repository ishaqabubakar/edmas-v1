import Fees from "@/Model/Fees/fees";
import { NextRequest, NextResponse } from "next/server";


export async function POST( req:NextRequest) {
  try {
    const { id } = await req.json()
    const fees = await Fees.findById(id)

    return NextResponse.json(
      {
        message: " Specific fee",
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
