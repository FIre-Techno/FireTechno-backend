const mysql = require("mysql2");

const connection = mysql.createPool({
  host: process.env.DB_HOSTNAME || "localhost",
  user: process.env.DB_USERNAME || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_DATABASE || "ticketing",
});

exports.connection = connection;

// const connect = () => {
//   connection.connect((err) => {
//     if (err) {
//       console.log(err);
//       setTimeout(connect, 2000);
//     }

//     console.log("connected");
//   });

//   connection.on("error", (err) => {
//     console.log(err);
//     if (err) {
//       connect();
//     }
//   });
// };

// exports.dbConnect = connect;
