const notifController = require("../controllers/notification");
const router = require("express").Router();

router
  .get("/all", notifController.getAllNotif)
  .post("/", notifController.postData)
  .patch("/:id", notifController.editData)
  .delete("/:id", notifController.deleteData);

module.exports = router;