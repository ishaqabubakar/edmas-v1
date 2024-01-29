import Owner from "@/Model/Owner/Owner";
import School from "@/Model/School/school";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { id } = await req.json();

    // Validate schoolId
    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. Provide owner id",
        },
        { status: 400 }
      );
    }

    const owner = (await Owner.findOne({ userId: id })) as any;
    const school = await School.findById(owner?.school)

    if (!owner) {
      return NextResponse.json(
        {
          message: `No student found`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Owners found",
        data:{
          _id: owner?._id,
          userId: owner?.userId,
          name:owner?.name,
          dob: owner?.dob,
          email: owner?.email,
          school:school?.fullname,
          phonenumber:owner?.phonenumber,
          address:owner?.address,
          gender:owner?.gender
        } ,
       
      },
      { status: 200 }
    );
  } catch (error: any) {
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
