const query = require("../helpers/query")

const getAllTransactions = `
SELECT t.*, u.email, c.name, c.terminal, c.gate
from transactions as t
inner join users as u on u.id = t.id_user
inner join classes as c on c.id = t.id_class`

const getIdTransactions = `
SELECT t.*, u.email, c.name, c.terminal, c.gate
from transactions as t
inner join users as u on u.id = t.id_user
inner join classes as c on c.id = t.id_class where t.id = ?`

const postTransactions = `insert into transactions set ?`

const patchTransactions = `Update transactions set ? where id=?`

const deleteTransactions = `delete from transactions where id=?`

module.exports = {
    getAllTransactions: () => query(getAllTransactions),
    getIdTransactions: (id) => query(getIdTransactions, id),
    postTransactions: (setData) => query(postTransactions, setData),
    patchTransactions: (setData, id) => query(patchTransactions, [setData, id]),
    deleteTransactions: (id) => query(deleteTransactions, id)
}