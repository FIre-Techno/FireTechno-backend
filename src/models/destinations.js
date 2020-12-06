const query = require("../helpers/query");

module.exports = {
  getDestinations: (limit = 5, offset = 1) =>
    query("SELECT * FROM destinations LIMIT ? OFFSET ?", [
      limit,
      (offset - 1) * limit,
    ]),
  searchDestinations: (name, limit = 5, offset = 1) =>
    query(
      "SELECT * FROM destinations WHERE name LIKE ? OR city LIKE ? LIMIT ? OFFSET ?",
      [name + "%", name + "%", limit, (offset - 1) * limit]
    ),
  addDestination: () => query("INSERT INTO destinations SET ?", [data]),
  deleteDestination: () => query("DELETE FROM destinations WHERE id = ?", [id]),
  updateDestination: () =>
    query("UPDATE destinations SET ? WHERE id = ?", [data, id]),
};
