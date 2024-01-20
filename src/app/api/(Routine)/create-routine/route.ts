// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Routine from "../../../../../Model/Routine/routine";
import Class from "../../../../../Model/Class/class";
import Section from "../../../../../Model/Section/section";
import Subject from "../../../../../Model/Subject/subject";
import School from "../../../../../Model/school/school";


export async function POST(req: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Extract data from the request body
    const { schoolId, classIds, sectionIds, subjectIds, day, starttime, endtime } = await req.json();

    // Validate required fields
    if (!schoolId || !classIds || !sectionIds || !subjectIds || !day || !starttime || !endtime) {
      return NextResponse.json(
        {
          message: "Please provide all required fields.",
        },
        { status: 400 }
      );
    }

    // Check if the school exists
    const schoolExists = await School.findById(schoolId);

    if (!schoolExists) {
      return NextResponse.json(
        {
          message: `School with id ${schoolId} not found.`,
        },
        { status: 404 }
      );
    }

    // Check if related documents (Class, Section, Subject) exist
    const classes = await Class.find({ _id: { $in: classIds, school: schoolId } });
    const sections = await Section.find({ _id: { $in: sectionIds, school: schoolId } });
    const subjects = await Subject.find({ _id: { $in: subjectIds, school: schoolId } });

    if (classes.length !== classIds.length || sections.length !== sectionIds.length || subjects.length !== subjectIds.length) {
      return NextResponse.json(
        {
          message: "One or more related documents not found for the specified school.",
        },
        { status: 404 }
      );
    }

    // Check if a routine already exists for the specified school
    const existingRoutine = await Routine.findOne({
      class: { $in: classIds },
      section: { $in: sectionIds },
      subject: { $in: subjectIds },
      school: schoolId,
      day,
    });

    if (existingRoutine) {
      return NextResponse.json(
        {
          message: "Routine already exists for the specified school and parameters.",
        },
        { status: 400 }
      );
    }

    // Create a new routine
    const newRoutine = new Routine({
      class: classIds,
      section: sectionIds,
      subject: subjectIds,
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
