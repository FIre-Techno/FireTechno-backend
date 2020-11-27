const db = require("../configs/mysql");

module.exports = {
  getAllNotif: () => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT * FROM notifications`;
      db.query(sql, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },

  postData: (setData) => {
    return new Promise((resolve, reject) => {
      let sql = `SELECT id AS id_user FROM users`;
      db.query(sql, (err, result) => {
        if (!err) {
          console.log(setData);
          const newData = { ...setData, ...result[0] };
          console.log(newData);
          let sql = `INSERT INTO notifications SET ?`;
          db.query(sql, newData, (err, result) => {
            if (err) {
              reject(new Error(err));
            } else {
              resolve(result);
            }
          });
        }
      });
    });
  },

  editData: (id, setData) => {
    return new Promise((resolve, reject) => {
      let sql = `UPDATE notifications SET ? WHERE id = ${id}`;
      db.query(sql, [setData, id], (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },

  deleteData: (id) => {
    return new Promise((resolve, reject) => {
      let sql = `DELETE FROM notifications WHERE id = ${id}`;
      db.query(sql, (err, result) => {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(result);
        }
      });
    });
  },
};
