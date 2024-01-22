// Import necessary models

import { NextRequest, NextResponse } from 'next/server';
import Routine from '@/Model/Routine/routine';
import Class from '@/Model/Class/class';
import Subject from '@/Model/Subject/subject';
import Section from '@/Model/Section/section';

// ... (previous imports and code)

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { schoolId } = await req.json();

    // Fetch routines
    const routines = await Routine.find({ school: schoolId });

    // Fetch additional data for each routine
    const populatedRoutines = await Promise.all(
      routines.map(async (routine) => {
        const [classInfo, subjectInfo, sectionInfo] = await Promise.all([
          Class.findById(routine.class).select('classname'),
          Subject.findById(routine.subject).select('subjectname'),
          Section.findById(routine.section).select('name'),
        ]);

        return {
          day: routine.day,
          starttime: routine.starttime,
          endtime: routine.endtime,
          className: classInfo?.classname,
          subjectName: subjectInfo?.subjectname,
          sectionName: sectionInfo?.name,
        };
      })
    );

    return NextResponse.json({
      message: 'Routines found with additional information',
      data: populatedRoutines,
    });
  } catch (error: any) {
    console.error('Error:', error.message);
    return NextResponse.json(
      {
        message: 'Internal server error',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
