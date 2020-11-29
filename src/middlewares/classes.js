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

const updateValidate = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().required(),
    name: Joi.string().required(),
    price: Joi.number().required(),
    estimate: Joi.number().required(),
    terminal: Joi.string().required(),
    gate: Joi.string().required(),
    id_destination: Joi.number().required(),
    id_airport: Joi.number().required(),
  });
  const validate = schema.validate(req.body);

  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const insertValidate = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    estimate: Joi.number().required(),
    terminal: Joi.string().required(),
    gate: Joi.string().required(),
    id_destination: Joi.number().required(),
    id_airport: Joi.number().required(),
  });

  const validate = schema.validate(req.body);
  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

module.exports = { idValidate, updateValidate, insertValidate };
