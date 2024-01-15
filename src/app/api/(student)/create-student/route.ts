import connectDB from "@/config/connection";
import { User } from "../../../../../Model/user/user";
import Student from "../../../../../Model/Student/student";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";


export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { data } = await req.json();
    const existingUser = await User.findOne({ email: data.email });

    if (existingUser) {
      return NextResponse.json(
        {
          message: "User with this email already exist",
          data: [],
        },
        { status: 400 }
      );
    }

    if (!data.password || !data.email || !data.role) {
      return NextResponse.json(
        {
          message: "Please ensure to fill all fieds",
          data: [],
        },
        { status: 400 }
      );
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    // Create a new user
    const user = new User({
      password: hashedPassword,
      email: data.email,
      name: data.name,
      role: data.role,
    });
    const savedUser = await user.save();
    console.log(savedUser);

    if (!savedUser) {
      // Handle the case where the user is not found
      return NextResponse.json(
        {
          message: "User not found after saving.",
          data: [],
        },
        { status: 400 }
      );
    }

    // Determine the role-specific information
    let roleSpecificData;

    if (data.role === "student") {
      roleSpecificData = {
        userId: savedUser._id,
        name: data.name,
        dob: data.dob,
        email: savedUser.email,
        password:savedUser.password,
        address: data.address,
        phonenumber: data.phonenumber,
        gender: data.gender,
        class: data.class,
        section: data.section,
        admissioncode: data.admissioncode,
        schoolId:data.schoolId,
        parent: {
            fullname:data.parent.fullname,
            phone:data.parent.phone,
            proffession:data.parent.proffession,
            parentemail:data.parent.parente
        },
      
      };
      const savedStudent = await new Student(roleSpecificData).save();
      return NextResponse.json(
        {
          message: "User registered successfully",
          userData: {
            user: savedUser,
            student: savedStudent,
          },
        },
        { status: 201 }
      );
    }
 else {
      return NextResponse.json(
        {
          message: "Invalid role",
          data:[]
        },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
