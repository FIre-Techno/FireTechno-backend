const router = require("express").Router();
const destinationController = require("../controllers/destinations");
const {
  idValidate,
  patchValidate,
  postValidate,
} = require("../middlewares/destinations");
const multer = require("../middlewares/multer");

router
  .get("/all", destinationController.getAllData)
  .post("/", multer, postValidate, destinationController.postData)
  .patch("/:id", multer, patchValidate, destinationController.editData)
  .delete("/:id", idValidate, destinationController.deleteData);

module.exports = router;
