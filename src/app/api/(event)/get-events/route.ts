import { NextRequest, NextResponse } from "next/server";
import Event from "../../../../../Model/Events/event";

export async function GET() {
  try {
    const events = await Event.find();

    return NextResponse.json(
      {
        message: "All noticeboards",
        data: events,
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
