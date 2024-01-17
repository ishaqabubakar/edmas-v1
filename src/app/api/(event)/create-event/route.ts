
import { NextRequest, NextResponse } from "next/server";
import Event from "../../../../../Model/Events/event";
import connectDB from "@/config/connection";

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const {school, title, description, date } = await req.json();

    if (!school ||!title || !date || !description) {
      return NextResponse.json(
        {
          messasge: "Please provide name, location and phone",
        },
        { status: 400 }
      );
    }

    const eventByOne = await Event.findOne({school}) 

    if (!eventByOne) {
        return NextResponse.json(
          {
            message: "Event and their respective details cannot be found.",
          },
          { status: 404 }
        );
      }
    const newEvent = new Event({
      school: school._id,
      title,
      date,
      description
    });

    const savedEvent = await newEvent.save();

    return NextResponse.json(
      {
        message: "Event created",
        data: savedEvent,
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
