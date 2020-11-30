var express = require("express");
var router = express.Router();
const {
  idValidate,
  patchValidate,
  postValidate,
} = require("../middlewares/user");

const {
  getUser,
  getUsers,
  patchUser,
  postUser,
  deleteUser,
} = require("../controllers/user");

router
  .get("/user", getUsers)
  .get("/user/:id", idValidate, getUser)
  .patch("/user", patchValidate, patchUser)
  .post("/user", postValidate, postUser)
  .delete("/user/:id", idValidate, deleteUser);

module.exports = router;
