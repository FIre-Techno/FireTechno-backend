const query = require("../helpers/query");

const getClasses = `
SELECT 
  a.id, a.name, a.type, a.price, a.estimate,
  a.terminal, a.gate, b.name AS destination, b.city,
  b.photo AS dest_photo, b.status AS dest_status,
  c.name AS air_name, c.photo AS air_photo, 
  c.star AS air_star, c.review AS air_review 
FROM classes AS a
INNER JOIN destinations AS b
  ON a.id_destination = b.id
INNER JOIN airports AS c
  ON a.id_airport = c.id
`;

const getClass = `
SELECT 
  a.id, a.name, a.type, a.price, a.estimate,
  a.terminal, a.gate, b.name AS destination, b.city,
  b.photo AS dest_photo, b.status AS dest_status,
  c.name AS air_name, c.photo AS air_photo, 
  c.star AS air_star, c.review AS air_review 
FROM classes AS a
INNER JOIN destinations AS b
  ON a.id_destination = b.id
INNER JOIN airports AS c
  ON a.id_airport = c.id
WHERE ?
`;

const getClassType = `
SELECT 
  a.id, a.name, a.type, a.price, a.estimate,
  a.terminal, a.gate, b.name AS destination, b.city,
  b.photo AS dest_photo, b.status AS dest_status,
  c.name AS air_name, c.photo AS air_photo, 
  c.star AS air_star, c.review AS air_review 
FROM classes AS a
INNER JOIN destinations AS b
  ON a.id_destination = b.id
INNER JOIN airports AS c
  ON a.id_airport = c.id
WHERE a.type = ? AND a.id_destination = ?
`;

const updateClass = `
UPDATE classes SET ? 
WHERE id=?
`;

const insertClass = `
INSERT INTO classes SET ?
`;

const deleteClass = `
DELETE FROM classes WHERE id = ?
`;

module.exports = {
  getClasses: () => query(getClasses),
  getClass: (data) => query(getClass, data),
  getClassType: (type, id) => query(getClassType, [type, id]),
  updateClass: (data, id) => query(updateClass, [data, id]),
  insertClass: (data) => query(insertClass, data),
  deleteClass: (id) => query(deleteClass, id),
};
