const Joi = require("joi");
const { resCustom, customResponse } = require("../helpers/res");

const idValidate = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  });

  const validate = schema.validate(req.params);
  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const patchValidate = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number(),
    email: Joi.string().email({ minDomainSegments: 2 }),
    phone: Joi.string(),
    gcm_token: Joi.string(),
    created_at: Joi.string(),
  });
  const validate = schema.validate(req.body);

  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const postValidate = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(8).required(),
    phone: Joi.string().required(),
    gcm_token: Joi.string().required(),
  });

  const validate = schema.validate(req.body);
  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

module.exports = { idValidate, patchValidate, postValidate };
