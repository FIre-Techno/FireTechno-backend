const router = require("express").Router();
const destinationController = require("../controllers/destinations");

router
  .get("/all", destinationController.getAllData)
  .post("/", destinationController.postData)
  .patch("/:id", destinationController.editData)
  .delete("/:id", destinationController.deleteData);

  module.exports = router;