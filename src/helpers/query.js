const db = require("../configs/mysql");

module.exports = (query, payload = null) => {
  return new Promise((resolve, reject) => {
    db.query(query, payload, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
