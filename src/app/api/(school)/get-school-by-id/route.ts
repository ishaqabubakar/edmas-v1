import School from "@/Model/School/school";
import { NextRequest, NextResponse } from "next/server";


export async function POST( req:NextRequest) {
  try {
    const { id } = await req.json()
    const school= await School.findById(id)

    return NextResponse.json(
      {
        message: "school",
        data: school,
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
