
const express = require("express");
const router = express.Router();

const {
    getLastMessage
} = require("../controllers/chats");

router
    .get("/chat/:id_user", getLastMessage);

module.exports = router;