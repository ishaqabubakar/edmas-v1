// Import other necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Section from "../../../../../Model/Section/section";
import Student from "../../../../../Model/Student/student";
import Payment from "../../../../../Model/Payment/payment";


export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const { classname, student, school, amount, title, description, section, transactiondate, status  } = await req.json();
    
    
    if ( !amount || !status || !school || !transactiondate) {
      return NextResponse.json(
        {
          message: "Please provide the correct details",
        },
        { status: 400 }
      );
    }

    
  
    const studentByOne = await Student.findOne({student})
    const sectionByOne =  await Section.findOne({section})

    if (!studentByOne) {
      return NextResponse.json(
        {
          message: "Student and their respective details cannot be found.",
        },
        { status: 404 }
      );
    }

    const newPayment = new Payment({
      classname,
      school: school,
      student: studentByOne._id,
      section: sectionByOne._id, // Ensure section is an array
      title,
      description,
      transactiondate,
      status,
      amount
    });

    const savedPayment = await newPayment.save();

    return NextResponse.json(
      {
        message: "Payment created",
        data: savedPayment,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);   
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
