import Noticeboard from "@/Model/Noticeboard/noticeboard";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
  try {
    const { id } = await req.json()
    const noticeboards = await Noticeboard.findById(id)

    return NextResponse.json(
      {
        message: "All noticeboards",
        data: noticeboards,
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
