import { NextRequest, NextResponse } from "next/server";
import Noticeboard from "../../../../Model/Noticeboard/noticeboard";

export async function GET() {
  try {
    const noticeboards = await Noticeboard.find()

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
