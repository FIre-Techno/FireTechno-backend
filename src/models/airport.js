const query = require("../helpers/query");

module.exports = {
  getAirports: () => query("SELECT * FROM airports"),
  getAirport: (id) => query("SELECT * FROM airports WHERE id=?", id),
  patchAirport: (data, id) =>
    query("UPDATE airports SET ? WHERE ?", [data, id]),
  postAirport: (data) => query("INSERT INTO airports SET ?", data),
  deleteAirport: (id) => query("DELETE from airports WHERE id=?", id),
};
