import { NextRequest, NextResponse } from "next/server";
import Material from "../../../../../Model/Materials/material";
import School from "../../../../../Model/School/school";

import connectDB from "@/config/connection";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { school, materialname, teacher, subject,title, description, attachment } = await req.json();

    if (!school || !materialname || !teacher || !subject || !title || !description ) {
      return NextResponse.json(
        {
          messasge: "Please provide all the details needed. ",
        },
        { status: 400 }
      );
    }

    const schoolByOne = await School.findOne({ school });

    if (!schoolByOne) {
      return NextResponse.json(
        {
          message: "Student and their respective details cannot be found.",
        },
        { status: 404 }
      );
    }
    const newMaterial = new Material({
      school: school,
      materialname,
      teacher,
      subject,
      title,
      description,
      attachment
    });

    const savedMaterial = await newMaterial.save();

    return NextResponse.json(
      {
        message: "Material created",
        data: savedMaterial,
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
