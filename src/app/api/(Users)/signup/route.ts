import { NextResponse } from "next/server";
import { User } from "../../../../../Model/user/user";
import connectDB from "@/config/connection";
import bcrypt from 'bcrypt'
export  async function POST(req: NextResponse) {
  const { email, password, role } = await req.json();
    connectDB()
  try {
    if (!password || !email || !role) {
      return NextResponse.json(
        {
          message: "All fieds must be filled",
        },
        { status: 400 }
      );
    }

    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password as string, salt);
    const newPassword = hashedPassword;
  
    const newUser = new User({
      email,
      password:newPassword,
      role,
    });

    const savedUser = newUser.save();
    return NextResponse.json(
      {
        message: "Account created successfully",
        data: savedUser,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        messaage: "Internal server error",
      },
      { status: 500 }
    );
  }
}
