var express = require("express");
var router = express.Router();
// const { all } = require("../middlewares/p");

const {
  allCities,
  allDestination,
  findDestination,
  getClasses,
  oneClass,
} = require("../controllers/public");

router
  .get("/city", allCities)
  .get("/destination", allDestination)
  .get("/destination/find", findDestination)
  .get("/classes", getClasses)
  .get("/classes/:id", oneClass);

module.exports = router;
