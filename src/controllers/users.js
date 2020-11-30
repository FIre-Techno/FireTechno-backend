const { resCustom, customResponse } = require("../helpers/res");
const { getUser, patchUser } = require("../models/user");
const { patchProfiles, getIdProfiles } = require("../models/profiles");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userDetail = async (req, res) => {
  const { id } = req.token;
  try {
    const user = await getUser({ "a.id": id });
    if (!user.length) {
      const response = customResponse(400, "Logout, No user found");
      return resCustom(res, response);
    }

    const response = customResponse(200, "Success", user[0]);
    return resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Internal Server Error");
    return resCustom(res, response);
  }
};

const editPassword = async (req, res) => {
  const { id } = req.token;
  const { last_password, new_password } = req.body;
  try {
    const user = await getUser({ "a.id": id });
    const compare = bcrypt.compareSync(last_password, user[0].password);
    if (!compare) {
      const response = customResponse(400, "Last Password is incorrect");
      return resCustom(res, response);
    }

    const hash = bcrypt.hashSync(new_password, bcrypt.genSaltSync(10));
    await patchUser({ password: hash }, { id });

    const response = customResponse(200, "Password been changed");
    return resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Internal Server Error");
    return resCustom(res, response);
  }
};

const editPhone = async (req, res) => {
  const { id } = req.token;
  const { phone } = req.body;
  try {
    await patchUser({ phone }, { id });

    const response = customResponse(200, "Phone been changed");
    return resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Internal Server Error");
    return resCustom(res, response);
  }
};

const editProfile = async (req, res) => {
  const { id } = req.token;
  const { username } = req.body;
  try {
    const user = await getIdProfiles({ "p.id_user": id });
    await patchProfiles(req.body, user[0].id);

    const response = customResponse(200, "Profile been changed");
    return resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Internal Server Error");
    return resCustom(res, response);
  }
};

module.exports = { userDetail, editPassword, editPhone, editProfile };
