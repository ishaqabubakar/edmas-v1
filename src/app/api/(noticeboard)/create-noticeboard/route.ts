import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import School from "@/Model/School/school";
import Noticeboard from "@/Model/Noticeboard/noticeboard";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { school, title, date, description, author } = await req.json();

    if (!school || !title || !description) {
      return NextResponse.json(
        {
          message: "Ensure all fields are correctly filled",
        },
        { status: 400 }
      );
    }

    const schoolByOne = await School.findOne({ _id: school });

    if (!schoolByOne) {
      return NextResponse.json(
        {
          message: "School and its details cannot be found.",
        },
        { status: 404 }
      );
    }

    // Format the date before saving
    const formattedDate = formatDate(date);

    const newNoticeboard = new Noticeboard({
      school,
      title,
      date: formattedDate,
      description,
      author,
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

function formatDate(rawDate: string): string {
  const dateObject = new Date(rawDate);
  const options = { day: "numeric", month: "short", year: "numeric" } as any;
  return dateObject.toLocaleDateString("en-US", options);
}
