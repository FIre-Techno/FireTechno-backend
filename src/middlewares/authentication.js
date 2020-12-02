const Joi = require("joi");
const { resCustom, customResponse } = require("../helpers/res");

const options = {
  errors: {
    wrap: {
      label: "",
    },
  },
};

const loginValidate = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
    device: Joi.string(),
  });
  const validate = schema.validate(req.body, options);

  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const registerValidate = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  });

  const validate = schema.validate(req.body, options);
  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

module.exports = { registerValidate, loginValidate };
