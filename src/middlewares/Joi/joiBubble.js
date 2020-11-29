const Joi = require("joi");
const { resCustom, customResponse } = require("../../helpers/res");

const validateUser = (req, res, next) => {
  const schema = Joi.object({
    total: Joi.number().min(1).required,
  });
  const validate = schema.validate(req.body);

  if (validate.error.message) {
    return resCustom(res, customResponse(404, validate.error.message));
  }

  next();
};

exports.validate = validateUser;
