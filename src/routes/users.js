var express = require("express");
var router = express.Router();
const {
  userPassword,
  userPhone,
  userEdit,
  userTransaction,
} = require("../middlewares/users");

const {
  userDetail,
  editPassword,
  editPhone,
  editProfile,
  getTransactions,
  addTransaction,
  getDetailTransaction,
} = require("../controllers/users");

router
  .get("/detail", userDetail)
  .get("/transactions", getTransactions)
  .get("/transactions/:id", getDetailTransaction)
  .post("/transaction", userTransaction, addTransaction)
  .patch("/password", userPassword, editPassword)
  .patch("/phone", userPhone, editPhone)
  .patch("/edit", userEdit, editProfile);

module.exports = router;
