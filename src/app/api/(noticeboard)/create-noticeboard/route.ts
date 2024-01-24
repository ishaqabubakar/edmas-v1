
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import School from "@/Model/School/school";
import Noticeboard from "@/Model/Noticeboard/noticeboard";


export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const {school, title, date, description, author } = await req.json();

    if (!school || !title  || !description) {
      return NextResponse.json(
        {
          messasge: "Ensure all fieds are correctly filled",
        },
        { status: 400 }
      );
    }

    const schoolByOne = await School.findOne({_id: school}) 

    if (!schoolByOne) {
        return NextResponse.json(
          {
            message: "Student and their respective details cannot be found.",
          },
          { status: 404 }
        );
      }
    const newNoticeboard = new Noticeboard({
      school,
      title,
      date,
      description,
      author
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
