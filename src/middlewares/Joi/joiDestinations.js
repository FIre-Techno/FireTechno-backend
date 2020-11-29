const Joi = require("joi");
const { resCustom, customResponse } = require("../../helpers/res");

const validateUser = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(100).required(),
    photo: Joi.string().required(),
    status: Joi.number().required(),
  });
  const validate = schema.validate(req.body);

  if (validate.error.message) {
    return resCustom(res, customResponse(404, validate.error.message));
  }

  next();
};

exports.validate = validateUser;
