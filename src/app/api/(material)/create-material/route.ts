import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import School from "@/Model/School/school";
import Material from "@/Model/Materials/material";
import Subject from "@/Model/Subject/subject";
import Section from "@/Model/Section/section";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { school, materialname, subject, description, attachment,section } = await req.json();

    if (!school || !materialname || !subject || !description) {
      return NextResponse.json(
        {
          message: "Please provide all the details needed.",
        },
        { status: 400 }
      );
    }

    const schoolByOne = await School.findOne({ _id:school });
    if (!schoolByOne) {
      return NextResponse.json(
        {
          message: "Student and their respective details cannot be found.",
        },
        { status: 404 }
      );
    }

    const subjectByOne = await Subject.findOne({ subjectname: materialname });
    const sectionByOne = await Section.findOne({ name: section });

    const newMaterial = new Material({
      school,
      materialname,
      subject: subjectByOne?._id,
      section:sectionByOne?._id,
      description,
      attachment, 
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
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
