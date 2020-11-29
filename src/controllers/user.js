const { resCustom, customResponse } = require("../helpers/res");
const userModel = require("../models/user");
const bcrypt = require("bcryptjs");

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getUsers();
    const response = customResponse(200, "Success", users);

    resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Bad Request");
    resCustom(res, response);
  }
};

/*
    @params: id
*/

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.getUser(id);
    const response = customResponse(200, "Success", user);

    resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Bad Request");
    resCustom(res, response);
  }
};

/*
    @body :
    id, email,currentPassword, password, phone,
    status, gcm_token
*/

const patchUser = async (req, res) => {
  const { id } = req.body;
  const data = req.body;
  try {
    await userModel.patchUser(data, id);
    const response = customResponse(400, "Success Patch data.");
    resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Bad Request");
    resCustom(res, response);
  }
};

/*
    @body :
    email, password, phone,
    status, gcm_token
*/

const postUser = async (req, res) => {
  const { password } = req.body;
  const data = req.body;
  delete data.password;
  try {
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);
    await userModel.postUser({ ...data, password: hashPassword });
    const response = customResponse(400, "Success Post Data.");
    resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Bad Request.");
    resCustom(res, response);
  }
};

/*
    @params: id
*/

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await userModel.deleteUser(id);
    const response = customResponse(400, "Success Delete Data.");
    resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Bad Request.");
    resCustom(res, response);
  }
};

module.exports = { getUsers, getUser, patchUser, postUser, deleteUser };
