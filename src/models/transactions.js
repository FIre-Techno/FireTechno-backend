const query = require("../helpers/query");

// const getAllTransactions = `
// SELECT t.*, p.name, c.name, c.terminal, c.gate
// from transactions as t
// inner join users as u on u.id = t.id_user
// inner join profiles as p on u.id = p.id_user
// inner join classes as c on c.id = t.id_class`;

const getAllTransactions = `
SELECT 
    *, b.username, c.type, c.estimate, 
    c.terminal, c.gate, d.photo AS airport_photo,
    e.name AS destination, e.city AS city
FROM transactions AS a
INNER JOIN profiles AS b
    ON a.id_user = b.id_user
INNER JOIN classes AS c
    ON c.id = a.id_class
INNER JOIN airports AS d
    ON c.id_airport = d.id
INNER JOIN destinations AS e
    ON c.id_destination = e.id`;

const getIdTransactions = `
SELECT 
    a.*, b.username, c.type, c.estimate, 
    c.terminal, c.gate, d.photo AS airport_photo,
    e.name AS destination, e.city AS city
FROM transactions AS a
INNER JOIN profiles AS b
    ON a.id_user = b.id_user
INNER JOIN classes AS c
    ON c.id = a.id_class
INNER JOIN airports AS d
    ON c.id_airport = d.id
INNER JOIN destinations AS e
    ON c.id_destination = e.id
WHERE ?`;

const postTransactions = `insert into transactions set ?`;

const patchTransactions = `Update transactions set ? where id=?`;

const deleteTransactions = `delete from transactions where id=?`;

module.exports = {
  getAllTransactions: () => query(getAllTransactions),
  getIdTransactions: (id) => query(getIdTransactions, id),
  postTransactions: (setData) => query(postTransactions, setData),
  patchTransactions: (setData, id) => query(patchTransactions, [setData, id]),
  deleteTransactions: (id) => query(deleteTransactions, id),
};
