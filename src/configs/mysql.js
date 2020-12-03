const mysql = require("mysql2");

module.exports = mysql.createConnection({
  host: process.env.DB_HOSTNAME || "localhost",
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "asusa442u",
  database: process.env.DB_DATABASE || "ticketing",
});
