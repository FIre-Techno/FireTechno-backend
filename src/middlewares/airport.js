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
    id: Joi.number().required(),
    name: Joi.string(),
    star: Joi.string(),
    review: Joi.string(),
  });
  const validate = schema.validate(req.body);

  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const postValidate = (req, res, next) => {
  console.log(req.file);
  const schema = Joi.object({
    name: Joi.string().required(),
    star: Joi.string(),
    review: Joi.string(),
  });

  const validate = schema.validate(req.body);
  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

module.exports = { idValidate, patchValidate, postValidate };
