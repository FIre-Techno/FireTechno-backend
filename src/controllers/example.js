const { resCustom, customResponse } = require("../helpers/res");
const examples = require("../models/examples");

const getUsers = async (req, res) => {
  try {
    const users = await examples.getUsers();
    const response = customResponse(200, "Success", users);

    resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Bad Request");
    resCustom(res, response);
  }
};

const getUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await examples.getUser(id);
    const response = customResponse(200, "Success", user);

    resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Bad Request");
    resCustom(res, response);
  }
};

module.exports = { getUsers, getUser };
