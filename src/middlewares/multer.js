const upload = require("../helpers/multer");
const { resCustom } = require("../helpers/res");

const multerHandling = (req, res, next) => {
  const uploadImage = upload(4).single("photo");
  uploadImage(req, res, (err) => {
    if (err) {
      console.log(err);
      return resCustom(res, { status: 500, msg: "internal server error" });
    }
    next();
  });
};

module.exports = multerHandling;
