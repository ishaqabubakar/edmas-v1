import Teacher from "@/Model/Teacher/teacher";
import { NextRequest, NextResponse } from "next/server";


export async function POST( req:NextRequest) {
  try {
    const { id } = await req.json()
    const teachBySchool =await Teacher.find({ school: id})

    return NextResponse.json(
      {
        message: "Teachers",
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
