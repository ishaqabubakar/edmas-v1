// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Routine from "@/Model/Routine/routine";
import Section from "@/Model/Section/section";
import Class from "@/Model/Class/class";
import Subject from "@/Model/Subject/subject";
import School from "@/Model/School/school";


export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Extract data from the request body
    const { schoolId, classIds, sectionIds, subjectIds, day, starttime, endtime } = await req.json();

    if (!schoolId || !classIds || !sectionIds || !subjectIds || !day || !starttime || !endtime) {
      return NextResponse.json(
        {
          message: "Please provide all required fields.",
        },
        { status: 400 }
      );
    }
   const findByOneSection = await Section.findOne({ name: sectionIds})
   const findByOneClass= await Class.findOne({ classname: classIds})
   const findBySubject= await Subject.findOne({ subjectname:subjectIds})

    // Create a new routine
    const newRoutine = new Routine({
      class: findByOneClass?._id,
      section: findByOneSection?._id,
      subject: findBySubject?._id,
      school: schoolId,
      day,
      starttime,
      endtime,
    });

    // Save the new routine to the database
    const savedRoutine = await newRoutine.save();

    return NextResponse.json(
      {
        message: "Routine created",
        data: savedRoutine,
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
