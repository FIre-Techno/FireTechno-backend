const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const mysql = require("./src/configs/mysql");

const verify = require("./src/middlewares/auth");

const indexRouter = require("./src/routes/index");
const chatsRoute = require("./src/routes/chatsRoute");
const profilesRoute = require("./src/routes/profilesRoute");
const transactionsRoute = require("./src/routes/transactionsRoute");
const bubbleChatRouter = require("./src/routes/bubble_chat");
const destinationsRouter = require("./src/routes/destinations");
const userRouter = require("./src/routes/user");
const classesRouter = require("./src/routes/classes");
const airportRouter = require("./src/routes/airport");

const authRouter = require("./src/routes/authentication");
const usersRouter = require("./src/routes/users");
const publicRouter = require("./src/routes/public");

const app = express();

const prefix = process.env.PREFIX_URL;

mysql.connect((err) => {
  console.log(err ? err : "database working");
});

app.use(cors("*"));
app.use(logger("dev"));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("*", cors("*"));

// CRUD
app.use("/", indexRouter);
app.use("/", chatsRoute);
app.use("/profiles", profilesRoute);
app.use("/transactions", transactionsRoute);
app.use("/chat", bubbleChatRouter);
app.use("/destination", destinationsRouter);
app.use("/", userRouter);
app.use("/", classesRouter);
app.use("/", airportRouter);

// API
app.use(`${prefix}/auth`, authRouter);
app.use(`${prefix}/users`, verify, usersRouter);
app.use(`${prefix}/public`, publicRouter);
// Gunain middleware kek gini buat cek token jwt
// app.use("/", middleware, indexRouter);

module.exports = app;
