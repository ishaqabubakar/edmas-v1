import { NextRequest, NextResponse } from "next/server";
import Result from "@/Model/Result/result";


export async function GET() {
  try {
    
    const results = await Result.find()

    return NextResponse.json(
      {
        message: "All results",
        data: results,
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
