import { NextRequest, NextResponse } from "next/server";
import Result from "@/Model/Result/result";


export async function POST( req:NextRequest) {
  try {
    const { id } = await req.json()
    const result = await Result.findById(id)

    return NextResponse.json(
      {
        message: "Speecific result",
        data: result,
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
