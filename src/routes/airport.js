var express = require("express");
var router = express.Router();
const {
  idValidate,
  patchValidate,
  postValidate,
} = require("../middlewares/airport");

const multer = require("../middlewares/multer");

const {
  getAirports,
  getAirport,
  patchAirport,
  postAirport,
  deleteAirport,
} = require("../controllers/airport");

router
  .get("/airport", getAirports)
  .get("/airport/:id", idValidate, getAirport)
  .patch("/airport", multer, patchValidate, patchAirport)
  .post("/airport", multer, postValidate, postAirport)
  .delete("/airport/:id", idValidate, deleteAirport);

module.exports = router;
