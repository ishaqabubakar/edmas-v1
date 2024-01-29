import Owner from "@/Model/Owner/Owner";
import School from "@/Model/School/school";
import User from "@/Model/user/user";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();
    const schoolByOne = await School.findOne({ fullname: data?.school });

    if (!id) {
      return NextResponse.json(
        {
          messasge: "Could not update user",
        },
        { status: 400 }
      );
    }
    const updatedUser = await User.findByIdAndUpdate(id, data, { new: true });
    const updatedOwner = await Owner.findOneAndUpdate(
      { userId: updatedUser?._id },
      {
        name: data?.name,
        dob: data?.dob,
        gender: data?.gender,
        school: schoolByOne?._id,
        role: data?.role,
        phonenumber: data?.phonenumber,
        email: data?.email,
        address:data?.address
      },
      { new: true }
    );

    return NextResponse.json(
      {
        message: "User Updated",
        data: updatedOwner,
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
