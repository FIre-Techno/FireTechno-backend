const { verify } = require("jsonwebtoken");
const { resCustom, customResponse } = require("../helpers/res");

module.exports = (req, res, next) => {
  let bearerToken = req.headers["authorization"];
  if (typeof bearerToken === "undefined")
    return resCustom(res, customResponse(500, "Bad Request"));

  bearerToken = bearerToken.split(" ")[1];

  if (!bearerToken) return resCustom(res, customResponse(400, "Bad Request"));

  return verify(bearerToken, process.env.SECRET, (err, data) => {
    if (err) return resCustom(res, customResponse(400, "Bad Request"));

    return next();
  });
};
