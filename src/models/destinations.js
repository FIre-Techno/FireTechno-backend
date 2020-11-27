const db = require('../configs/mysql');

module.exports = {
    getAllData: () => {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM destinations`;
            db.query(sql, (err, result) => {
                if (err){
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        });
    },

    postData: (setData) => {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO destinations SET ?`;
            db.query(sql, setData, (err, result) => {
                if (err){
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        });
    },

    editData: (id, setData) => {
        return new Promise((resolve, reject) => {
            let sql = `UPDATE destinations SET ? WHERE id = ${id}`;
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
            let sql = `DELETE FROM destinations WHERE id = ${id}`;
            db.query(sql, (err, result) => {
                if (err){
                    reject(new Error(err));
                } else {
                    resolve(result);
                }
            });
        });
    },
}