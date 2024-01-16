
import { NextRequest, NextResponse } from "next/server";
import Noticeboard from "../../../../../Model/Noticeboard/noticeboard";
import School from "../../../../../Model/School/school";
import connectDB from "@/config/connection";

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const {school, title, description, date } = await req.json();

    if (!school ||!title || !date || description) {
      return NextResponse.json(
        {
          messasge: "Please provide name, location and phone",
        },
        { status: 400 }
      );
    }

    const schoolByOne = await School.findOne({school}) 

    if (!schoolByOne) {
        return NextResponse.json(
          {
            message: "Student and their respective details cannot be found.",
          },
          { status: 404 }
        );
      }
    const newNoticeboard = new Noticeboard({
      school: school._id,
      title,
      date,
      description
    });

    const savedNoticeboard = await newNoticeboard.save();

    return NextResponse.json(
      {
        message: "Noticeboard created",
        data: savedNoticeboard,
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
