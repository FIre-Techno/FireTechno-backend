const { resCustom, customResponse } = require("../helpers/res");
const { getUser, postUser, patchUser } = require("../models/user");
const { postProfiles } = require("../models/profiles");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AuthLogin = async (req, res) => {
  const { email, password, device } = req.body;

  try {
    const checkUser = await getUser({ "a.email": email });
    if (!checkUser.length) {
      const response = customResponse(400, "email & password incorrect");
      return resCustom(res, response);
    }

    const compare = bcrypt.compareSync(password, checkUser[0].password);
    if (!compare) {
      const response = customResponse(400, "email & password incorrect");
      return resCustom(res, response);
    }

    const id = checkUser[0].id;
    await patchUser({ gcm_token: device }, { id });
    const token = jwt.sign({ id }, process.env.SECRET);

    const response = customResponse(200, "Success", { token });
    resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Internal Server Error");
    resCustom(res, response);
  }
};

const AuthRegister = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const checkUser = await getUser({ "a.email": email });
    if (checkUser.length) {
      const response = customResponse(400, "email has been taken");
      return resCustom(res, response);
    }

    const hash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const user = await postUser({ email, password: hash });
    postProfiles({ username, id_user: user.insertId });

    const response = customResponse(200, "Success Register");
    return resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Internal Server Error");
    resCustom(res, response);
  }
};

module.exports = {
  AuthLogin,
  AuthRegister,
};
