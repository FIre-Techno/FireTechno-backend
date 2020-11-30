const query = require("../helpers/query");

const getAllProfiles = `
SELECT p.*, u.email, c.name as city 
from profiles as p
inner join users as u on u.id = p.id_user
left join cities as c on c.id = p.id_city`;

const getIdProfiles = `SELECT p.*, u.email, c.name as city from profiles as p
inner join users as u on u.id = p.id_user
left join cities as c on c.id = p.id_city where ?`;

const postProfiles = `insert into profiles set ?`;

const patchProfiles = `Update profiles set ? where id=?`;

const deleteProfiles = `delete from profiles where id=?`;

module.exports = {
  getAllProfiles: () => query(getAllProfiles),
  getIdProfiles: (id) => query(getIdProfiles, id),
  postProfiles: (setData) => query(postProfiles, setData),
  patchProfiles: (setData, id) => query(patchProfiles, [setData, id]),
  deleteProfiles: (id) => query(deleteProfiles, id),
};
