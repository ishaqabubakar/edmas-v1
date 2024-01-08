
import { NextRequest, NextResponse } from "next/server";
import School from "../../../../../Model/school/school";

export async function POST(req: NextRequest) {
  try {
    const { name, location, phone } = await req.json();
    if (!name || !location || !phone) {
      return NextResponse.json(
        {
          messasge: "Please provide name, location and phone",
        },
        { status: 400 }
      );
    }

    const newSchool = new School({
      name,
      location,
      phone,
    });

    const savedSchool = await newSchool.save();

    return NextResponse.json(
      {
        message: "School created",
        data: savedSchool,
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
