const query = require("../helpers/query");

const getUsers = `
SELECT 
  a.*, b.username, b.address, 
  b.postcode, c.name AS city
FROM users AS a 
INNER JOIN profiles AS b 
  ON a.id = b.id_user 
LEFT JOIN cities AS c
  ON c.id = b.id_city
`;

const getUser = `
SELECT 
  a.*, b.username, b.address, 
  b.postcode, c.name AS city
FROM users AS a 
INNER JOIN profiles AS b 
  ON a.id = b.id_user 
LEFT JOIN cities AS c
  ON c.id = b.id_city
WHERE ?
`;

module.exports = {
  getUsers: () => query(getUsers),
  getUser: (id) => query(getUser, id),
  patchUser: (data, id) => query("UPDATE users SET ? WHERE ?", [data, id]),
  postUser: (data) => query("INSERT INTO users SET ?", data),
  deleteUser: (id) => query("DELETE from users WHERE id=?", id),
};
