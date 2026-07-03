const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/users");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});


const fileFilter = (req, file, cb) => {
  const allowTypes = /jpeg|jpg|png|webp/;
  const exteme = allowTypes.test(path.extname(file.originalname).toLowerCase());
  const mimtype = allowTypes.test(file.mimetype);

  if (exteme && mimtype) {
    cb(null, true);
  } else {
    cb(new Error("Only allow images"));
  }
};

const uploadImage = multer({ storage, fileFilter });

module.exports = uploadImage;
