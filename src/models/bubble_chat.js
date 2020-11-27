const db = require("../configs/mysql");

module.exports = {
  getAllChats: () => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM bubble_chat`;
      db.query(sql, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },

  deleteChat: (id) => {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM bubble_chat WHERE id=${id}`;
      db.query(sql, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },

  postMessage: (body) => {
    return new Promise((resolve, reject) => {
      let sql = `INSERT INTO bubble_chat SET ?`;
      db.query(sql, body, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },

  editMessage: (id, setData) => {
    return new Promise((resolve, reject) => {
      let sql = `UPDATE bubble_chat SET ? WHERE id = ${id}`;
      db.query(sql, [setData, id], (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },
};
