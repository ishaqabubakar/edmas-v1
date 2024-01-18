import { NextRequest, NextResponse } from "next/server";
import Teacher from "../../../../../Model/Teacher/teacher";

export async function POST( req:NextRequest) {
  try {
    const { id } = await req.json()
    const teachBySchool = Teacher.find({ school: id})

    return NextResponse.json(
      {
        message: "school",
        data: teachBySchool,
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
