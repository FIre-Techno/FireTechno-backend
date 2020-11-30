var express = require("express");
var router = express.Router();
// const { all } = require("../middlewares/p");

const {
  allCities,
  allDestination,
  findDestination,
} = require("../controllers/public");

router.get("/city", allCities);
router.get("/destination", allDestination);
router.get("/destination/find", findDestination);

module.exports = router;
