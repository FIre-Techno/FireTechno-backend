const query = require('../helpers/query');

module.exports = {
  getAllNotif: () => query(`
  SELECT
    a.id, a.is_open, a.title, a.description, a.id_user,
    b.id, b.email, b.phone
  FROM notifications AS a
  INNER JOIN users AS b
  ON a.id_user = b.id`),
  postData: setData => query(`INSERT INTO notifications SET ?`, setData),
  editData: (id, setData) => query(`UPDATE notifications SET ? WHERE id = ${id}`, [setData, id]),
  deleteData: id => query(`DELETE FROM notifications WHERE id = ${id}`)
};
