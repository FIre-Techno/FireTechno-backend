const query = require('../helpers/query');

module.exports = {
  getAllChats: () => query(`
  SELECT
    a.id, a.total, a.id_sender, a.id_receiver,
    b.email,
    c.username, c.id_user
  FROM bubble_chat AS a
  INNER JOIN users AS b
    ON a.id_sender = b.id
  INNER JOIN profiles AS c
    ON b.id = c.id_user`),
  postMessage: setData => query(`INSERT INTO bubble_chat SET ?`, setData),
  deleteChat: id => query(`DELETE FROM bubble_chat WHERE id = ${id}`),
  editMessage: (id, setData) => query(`UPDATE bubble_chat SET ? bubble`, [setData, id])
};
