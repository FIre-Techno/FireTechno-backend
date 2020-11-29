const Joi = require("joi");
const { customResponse, resCustom } = require("../helpers/res");

const idValidate = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  });
  const validate = schema.validate(req.body);

  if (validate.error.message) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const patchValidate = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    name: Joi.string(),
    status: Joi.string(),
  });
  const validate = schema.validate(req.body);

  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const postValidate = (req, res, next) => {
  // console.log(req);
  const schema = Joi.object({
    name: Joi.string().required(),
    status: Joi.number().max(1).required(),
  });
  const validate = schema.validate(req.body);

  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

module.exports = { idValidate, patchValidate, postValidate };
