const express = require("express");
const router = express.Router();

const {
    getLastMessage,
    getIdMessage,
    postMessage,
    patchMessage,
    deleteMessage
} = require("../controllers/chats");

router
    .get("/chat/:id_user", getLastMessage)
    .get("/chat/:id_receiver/:id_sender", getIdMessage)
    .post("/chat/", postMessage)
    .patch("/chat/:id", patchMessage)
    .delete("/chat/:id", deleteMessage)
module.exports = router;