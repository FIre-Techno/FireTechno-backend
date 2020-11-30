const query = require("../helpers/query");

module.exports = {
  getCities: () => query("SELECT * FROM cities"),
  getCity: (id) => query("SELECT * FROM cities WHERE id=?", id),
  patchCity: (data, id) => query("UPDATE cities SET ? WHERE ?", [data, id]),
  postCity: (data) => query("INSERT INTO cities SET ?", data),
  deleteCity: (id) => query("DELETE from cities WHERE id=?", id),
};
