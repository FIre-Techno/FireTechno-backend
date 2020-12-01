const query = require("../helpers/query");

module.exports = {
  getNotifs: () => query("SELECT * FROM notifications"),
  getNotif: (id) => query("SELECT * FROM notifications WHERE ?", id),
  patchNotif: (data, id) =>
    query("UPDATE notifications SET ? WHERE ?", [data, id]),
  postNotif: (data) => query("INSERT INTO notifications SET ?", data),
  deleteNotif: (id) => query("DELETE from notifications WHERE id=?", id),
};
