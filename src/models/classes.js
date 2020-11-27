const query = require("../helpers/query");

const getClasses = `
SELECT * FROM classes AS a
JOIN destinations AS b
  ON a.id_destination = b.id
JOIN airports AS c
  ON a.id_airport = c.id
`;

const getClass = `
SELECT * FROM classes AS a
JOIN destinations AS b
  ON a.id_destination = b.id
JOIN airports AS c
  ON a.id_airport = c.id
WHERE ?
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
  updateClass: (data, id) => query(updateClass, [data, id]),
  insertClass: (data) => query(insertClass, data),
  deleteClass: (id) => query(deleteClass, id),
};
