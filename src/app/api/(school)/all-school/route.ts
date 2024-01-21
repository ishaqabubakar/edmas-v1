import School from "@/Model/School/school";
import { NextRequest, NextResponse } from "next/server";


export async function GET( req:NextRequest) {
  try {

    const schools= await School.find().maxTimeMS(4000)

    return NextResponse.json(
      {
        message: "schools",
        data: schools,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
