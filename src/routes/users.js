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
  updatePhoto,
  getNotification,
} = require("../controllers/users");
const multer = require("../middlewares/multer");

router
  .get("/detail", userDetail)
  .get("/transactions", getTransactions)
  .get("/transactions/:id", getDetailTransaction)
  .get("/notification", getNotification)
  .post("/transaction", userTransaction, addTransaction)
  .patch("/password", userPassword, editPassword)
  .patch("/phone", userPhone, editPhone)
  .patch("/edit", userEdit, editProfile)
  .patch("/photo", multer, updatePhoto);

module.exports = router;
