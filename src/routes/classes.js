var express = require("express");
var router = express.Router();
const {
  idValidate,
  updateValidate,
  insertValidate,
} = require("../middlewares/classes");
const {
  GetClass,
  GetClasses,
  UpdateClass,
  AddClass,
  RemoveClass,
} = require("../controllers/classes");

router
  .get("/class", GetClasses)
  .get("/class/:id", idValidate, GetClass)
  .patch("/class", updateValidate, UpdateClass)
  .post("/class", insertValidate, AddClass)
  .delete("/class/:id", idValidate, RemoveClass);

module.exports = router;
