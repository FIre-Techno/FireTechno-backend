const express = require("express");
const router = express.Router();
const {
    GetAllTransactions,
    GetIdTransactions,
    PostTransactions,
    PatchTransactions,
    DeleteTransactions,
} = require('../controllers/transactions')

const {
    validatePost,
    validatePatch
} = require('../middlewares/schemaTransactions')

router
    .get("/", GetAllTransactions)
    .get("/:id", GetIdTransactions)
    .post("/", validatePost, PostTransactions)
    .patch("/:id", PatchTransactions)
    .delete("/:id", DeleteTransactions)
module.exports = router;