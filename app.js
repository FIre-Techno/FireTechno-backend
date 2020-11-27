const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mysql = require("./src/configs/mysql");

mysql.connect((err) => {
  console.log(err ? err : "database working");
});

const indexRouter = require("./src/routes/index");
const chatsRoute = require("./src/routes/chatsRoute");

const app = express();
dotenv.config();
app.use(cors("*"));
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("*", cors("*"));
// app.use("/", indexRouter);
app.use('/', chatsRoute);

// Gunain middleware kek gini buat cek token jwt
// app.use("/", middleware, indexRouter);

module.exports = app;
