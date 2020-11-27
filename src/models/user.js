const query = require("../helpers/query");

module.exports = {
  getUsers: () => query("SELECT * FROM users"),
  getUser: (id) => query("SELECT * FROM users WHERE id=?", id),
  getPassword: (id) => query("SELECT password FROM users WHERE id=?", id),
  patchUser: (data, id) => query("UPDATE users SET ? WHERE ?", [data, id]),
  postUser: (data) => query("INSERT INTO users SET ?", data),
  deleteUser: (id) => query("DELETE from users WHERE id=?", id),
};
