import Class from "@/Model/Class/class";
import Fees from "@/Model/Fees/fees";
import Student from "@/Model/Student/student";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { schoolId } = await req.json();

    const fees = await Fees.find({ school: schoolId });

    const feeData = [];
    for (const fee of fees) {
      const studentData = await Student.findById(fee.student);
      const classData = await Class.findById(fee.classname);
      feeData.push({
        fee,
        studentData,
        classData
      });
    }

    return NextResponse.json(
      {
        message: "All fees",
        data: feeData,
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
