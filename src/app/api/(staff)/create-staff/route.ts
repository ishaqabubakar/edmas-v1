import connectDB from "@/config/connection";
import Staff from "../../../../../Model/Staff/staff";
import { NextRequest, NextResponse } from "next/server";



export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { data } = await req.json();

    if (!data.schoolId || !data.name || !data.dob || !data.stafftype) {
      return NextResponse.json(
        {
          message: "Please ensure to fill all fieds",
          data: [],
        },
        { status: 400 }
      );
    }

    const staff = new Staff({
      
      school: data.school,
      name: data.name,
      dob: data.dob,
      stafftype: data.stafftype
    });
    const savedStaff = await staff.save();
    console.log(savedStaff);

    if (!savedStaff) {
      // Handle the case where the user is not found
      return NextResponse.json(
        {
          message: "Staff not found after saving.",
          data: [],
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      {
        message: "Staff registered successfully",
        userData: {
          
          staff: savedStaff,
        },
      },
      { status: 201 }
    );
  }catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
 


