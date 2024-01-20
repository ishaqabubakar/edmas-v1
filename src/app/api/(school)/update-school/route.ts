import { NextRequest, NextResponse } from "next/server";
import School from "../../../../Model/School/school";


export async function PUT(req: NextRequest) {
  try {
    const { name, location, phone, _id } = await req.json();

    if (!_id) {
      return NextResponse.json(
        {
          messasge: "could not update school",
        },
        { status: 400 }
      );
    }

    const updatedSchool = await School.findByIdAndUpdate({_id}, {
      name,
      location,
      phone,
    });

    return NextResponse.json(
      {
        message: "School updated",
        data: updatedSchool,
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
