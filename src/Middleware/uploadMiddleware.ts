// middleware/uploadMiddleware.ts
import multer from "multer";
import path from "path";

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/public/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.memetype === "image/jpeg" ||
    file.mimetype === "images/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/pdf"
  ) {
    cb(null, true);
  } else {
    console.log("Unsupported file format.Upload only Jpeg/jpg");
  }
};

const upload = multer({ storage, limits:{ fieldSize: 1024 * 1024 } });

export default upload
