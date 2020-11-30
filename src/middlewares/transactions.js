const Joi = require("joi");
const { resCustom, customResponse } = require("../helpers/res");

const validateInsert = (res, req, next) => {
  const schema = Joi.object({
    departure_at: Joi.date().required(),
    type: Joi.number.required(),
    from: Joi.string().required(),
    child: Joi.number().required(),
    adult: Joi.number().required(),
    id_class: Joi.number().required(),
  });

  const validate = schema.validate(req.body);
  if (validate.error) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

module.exports = { validateInsert };
