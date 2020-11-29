const router = require("express").Router();
const destinationController = require("../controllers/destinations");
const joiValidation = require('../middlewares/Joi/joiDestinations');

router
  .get("/all", destinationController.getAllData)
  .post("/", joiValidation, destinationController.postData)
  .patch("/:id", destinationController.editData)
  .delete("/:id", destinationController.deleteData);

  module.exports = router;