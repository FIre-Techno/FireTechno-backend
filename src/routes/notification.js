const notifController = require("../controllers/notification");
const router = require("express").Router();
const joiValidation = require('../middlewares/Joi/joiNotification');

router
  .get("/all", notifController.getAllNotif)
  .post("/", joiValidation, notifController.postData)
  .patch("/:id", notifController.editData)
  .delete("/:id", notifController.deleteData);

module.exports = router;