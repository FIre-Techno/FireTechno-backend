const { resCustom, customResponse } = require("../helpers/res");

exports.statusNotFound = (req, res) => {
  return resCustom(res, customResponse(404, "Not found"));
};
