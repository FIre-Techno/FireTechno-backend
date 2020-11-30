var express = require("express");
var router = express.Router();
const { userPassword, userPhone, userEdit } = require("../middlewares/users");

const {
  userDetail,
  editPassword,
  editPhone,
  editProfile,
} = require("../controllers/users");

router
  .get("/detail", userDetail)
  .patch("/password", userPassword, editPassword)
  .patch("/phone", userPhone, editPhone)
  .patch("/edit", userEdit, editProfile);

module.exports = router;
