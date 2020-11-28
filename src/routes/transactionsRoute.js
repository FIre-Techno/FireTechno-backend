const express = require("express");
const router = express.Router();
const {
    GetAllTransactions,
    GetIdTransactions,
    PostTransactions,
    PatchTransactions,
    DeleteTransactions,
} = require('../controllers/transactions')
router
    .get("/", GetAllTransactions)
    .get("/:id", GetIdTransactions)
    .post("/", PostTransactions)
    .patch("/:id", PatchTransactions)
    .delete("/:id", DeleteTransactions)
module.exports = router;