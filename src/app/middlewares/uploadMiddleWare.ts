import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import { Request } from 'express';

// Size limits
const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5 MB
const MAX_VIDEO_SIZE = 50 * 1024 * 1024; // 50 MB

// Allowed extensions
const allowedImageExts = ['.jpg', '.jpeg', '.png', '.gif','.jfif','.webp'];
const allowedVideoExts = ['.mp4', '.mov', '.avi', '.webm'];

// Multer storage setup
const storage = multer.diskStorage({
  destination: (req: Request, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, 'uploads/images/');
    } else if (file.mimetype.startsWith('video/')) {
      cb(null, 'uploads/videos/');
    } else {
      cb(new Error('Unsupported file type'), '');
    }
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const ext = path.extname(file.originalname);
    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

// File filter
const fileFilter = (req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
  const ext = path.extname(file.originalname).toLowerCase();
 
  if (allowedImageExts.includes(ext) || allowedVideoExts.includes(ext)) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type. Only images and videos are allowed.'));
  }
};

// Create multer instance
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: MAX_VIDEO_SIZE, // max size for both, additional check in route
  },
});

export default upload;
