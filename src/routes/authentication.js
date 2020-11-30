var express = require("express");
var router = express.Router();
const {
  loginValidate,
  registerValidate,
} = require("../middlewares/authentication");

const { AuthLogin, AuthRegister } = require("../controllers/authentication");

router
  .post("/login", loginValidate, AuthLogin)
  .post("/register", registerValidate, AuthRegister);

module.exports = router;
