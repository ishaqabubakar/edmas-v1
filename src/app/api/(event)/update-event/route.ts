import { NextRequest, NextResponse } from "next/server";
import Event from "../../../../../Model/Events/event";


export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a Event Info.",
        },
        { status: 400 }
      );
    }

    const updatedEvent = await Event.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    if (!updatedEvent) {
      return NextResponse.json(
        {
          message: `Event with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Event updated",
        data: updatedEvent,
      },
      { status: 200 }
    );
  } catch (error:any) {
    console.error("Error:", error.message);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
