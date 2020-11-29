const Joi = require("joi");
const { resCustom, customResponse } = require("../../helpers/res");

const validateUser = (req, res, next) => {
  const schema = Joi.object({
    is_open: Joi.number().required(),
    title: Joi.string().min(2).max(255).required(),
    description: Joi.string().min(5).required(),
  });
  const validate = schema.validate(req.body);

  if (validate.error.message) {
    return resCustom(res, customResponse(404, validate.error.message));
  }

  next();
};

exports.validate = validateUser;
