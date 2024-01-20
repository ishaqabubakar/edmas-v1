import connectDB from "@/config/connection";
import Staff from "../../../../Model/Staff/staff"
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { school, name, dob , phone,  stafftype } = await req.json();

    if (!school || !name || !dob || !stafftype || !stafftype ) {
      return NextResponse.json(
        {
          message: "Please ensure to fill all fieds"
         
        },
        { status: 400 }
      );
    }

    const staff = new Staff({
      
      school,
      name,
      dob,
      stafftype
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
 


