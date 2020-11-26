const query = require("../helpers/query");

module.exports = {
  getUsers: () => query("SELECT * FROM users"),
  getUser: (data) => query("SELECT * FROM users WHERE id=?", data),
};
