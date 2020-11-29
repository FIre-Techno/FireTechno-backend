const router = require("express").Router();
const chatController = require("../controllers/bubble_chat");
const joiValidation = require('../middlewares/Joi/joiBubble');

router
  .get("/all", chatController.getAllChats)
  .get("/:id", chatController.getChat)
  .delete("/:id", chatController.deleteChat)
  .post("/", joiValidation, chatController.postMessage)
  .patch("/:id", chatController.editMessage);

module.exports = router;
