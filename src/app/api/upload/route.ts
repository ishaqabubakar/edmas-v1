// pages/api/upload.js
import { upload } from "@/Middleware/uploadMiddleware";
import { NextResponse } from "next/server";
import path from "path";


export  async function POST(req) {
  try {
    // Use the 'upload' middleware to handle file uploads
    upload.single('file')(req, res, async (err) => {
      if (err) {
        console.error('Error uploading file:', err);
        return NextResponse.json(
          {
            message: "Error uploading file.",
            data: [],
          },
          { status: 500 }
        );
      }

      const uploadedFile = req.file;

      if (!uploadedFile) {
        return NextResponse.json(
          {
            message: "File not uploaded",
            data: [],
          },
          { status: 400 }
        );
      }

      // Assuming 'uploads' is a directory in your project
      const uploadPath = path.join(process.cwd(), 'uploads', uploadedFile.filename);

      // You can perform additional processing here if needed
      // For example, save the file information to a database

      return NextResponse.json(
        {
          message: "File uploaded successfully",
          data: {
            filename: uploadedFile.filename,
            path: uploadPath,
          },
        },
        { status: 200 }
      );
    });
  } catch (error) {
    console.error('Internal server error:', error);
    return NextResponse.json(
      {
        message: "Internal server error",
        data: [],
      },
      { status: 500 }
    );
  }
}
