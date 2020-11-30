const Joi = require("joi");
const { resCustom, customResponse } = require("../helpers/res");

const options = {
  errors: {
    wrap: {
      label: "",
    },
  },
};

const userPassword = (req, res, next) => {
  const schema = Joi.object({
    last_password: Joi.string().required().min(8),
    new_password: Joi.string().required().min(8),
  });
  const validate = schema.validate(req.body, options);

  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const userPhone = (req, res, next) => {
  const schema = Joi.object({
    phone: Joi.number().required().min(10),
  });
  const validate = schema.validate(req.body, options);

  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const userEdit = (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    id_city: Joi.number(),
    address: Joi.string(),
    postcode: Joi.number(),
  });
  const validate = schema.validate(req.body, options);

  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

const userTransaction = (res, req, next) => {
  const schema = Joi.object({
    type: Joi.number().required(),
    from: Joi.string().required(),
    child: Joi.number().required(),
    adult: Joi.number().required(),
    departure_at: Joi.date().required(),
    id_class: Joi.number().required(),
  });

  const validate = schema.validate(req.body);
  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

module.exports = { userPassword, userPhone, userEdit, userTransaction };
