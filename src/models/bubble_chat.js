const query = require("../helpers/query");

module.exports = {
  getAllChats: () => query(`
  SELECT
    a.id, a.total, a.id_sender, a.id_receiver,
    b.id, b.email,
    c.id, c.username, c.id_user
  FROM bubble_chat AS a
  INNER JOIN users AS b
    ON a.id_sender = b.id
  INNER JOIN profiles AS c
    ON b.id = c.id_user`),
  getChat: (id) => query(`SELECT * FROM bubble_chat WHERE id = ${id}`),
  deleteChat: (id) => query(`DELETE FROM bubble_chat WHERE id = ${id}`),
  postMessage: (body) => query(`INSERT INTO bubble_chat SET ?`, body),
  editMessage: (id, setData) =>
    query(`UPDATE bubble_chat SET ? WHERE id = ${id}`, [setData, id]),
};
