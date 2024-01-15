import connectDB from "@/config/connection";
import { User } from "../../../../../Model/User/user";
import Admin from "../../../../../Model/Admin/admin";
import Teacher from "../../../../../Model/Teacher/teacher";
import Student from "../../../../../Model/Student/student";
import { NextRequest, NextResponse } from "next/server";
import { hashPassword } from "@/helpers/bycrpt";
import School from "../../../../../Model/School/school";
import Owner from "../../../../../Model/Admin/Owner/Owner";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { data } = await req.json();
    const existingUser = await User.findOne({ email: data.email });
    const singleSchool = await School.findOne({ fullname: data.school })

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

    
    const hashedPassword =await hashPassword(data.password)
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
    if (data.role === "admin") {
      roleSpecificData = {
        userId: savedUser._id,
        name: data.name,
        dob: data.dob,
        email: savedUser.email,
        password: savedUser.password,
        address: data.address,
        phonenumber: data.phonenumber,
        gender: data.gender,
      };
      const savedAdmin = await new Admin(roleSpecificData).save();
      return NextResponse.json(
        {
          message: "User registered successfully",
          userData: {
            user: savedUser,
            teacher: savedAdmin,
          },
        },
        { status: 201 }
      );
    }

    if (data.role === "owner") {
      roleSpecificData = {
        userId: savedUser._id,
        name: data.name,
        dob: data.dob,
        email: savedUser.email,
        password: savedUser.password,
        address: data.address,
        phonenumber: data.phonenumber,
        gender: data.gender,
        school:singleSchool._id
      };
      const savedOwner = await new Owner(roleSpecificData).save();
      return NextResponse.json(
        {
          message: "User registered successfully",
          userData: {
            user: savedUser,
            Owner: savedOwner,
          },
        },
        { status: 201 }
      );
    }
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
        }
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
  if(data.role==='teacher'){
    roleSpecificData = {
      userId: savedUser._id,
      name: data.name,
      dob: data.dob,
      email: savedUser.email,
      password: savedUser.password,
      address: data.address,
      phonenumber: data.phonenumber,
      gender: data.gender,
      class:data.class
    };
    const savedTeacher = await new Teacher(roleSpecificData).save();
    return NextResponse.json(
      {
        message: "User registered successfully",
        userData: {
          user: savedUser,
          admin: savedTeacher,
        },
      },
      { status: 201 }
    );
  } else {
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
