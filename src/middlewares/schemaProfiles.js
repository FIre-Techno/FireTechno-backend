const Joi = require('joi');
const { resCustom, customResponse } = require('../helpers/res')

const validatePost = (res, req, next) => {
    const schema = Joi.object({
        username: Joi.string().required(),
        address: Joi.string().required(),
        // created_at: Joi.date().format("DD/MM/YYYY").required(),
        id_city: Joi.number().required(),
        id_user: Joi.number().required(),
        postcode: Joi.number().required(),
    })

    const validate = schema.validate(req.body);
    if (validate.error) {
        return resCustom(res, customResponse(400, validate.error.message));
    }

    next();
}

const validatePatch = (res, req, next) => {
    const schema = Joi.object({
        id: Joi.string().required(),
        username: Joi.string().required(),
        address: Joi.string().required(),
        // created_at: Joi.date().format("DD/MM/YYYY").required(),
        id_city: Joi.number().required(),
        id_user: Joi.number().required(),
        postcode: Joi.number().required(),
    })

    const validate = schema.validate(req.body);
    if (validate.error) {
        return resCustom(res, customResponse(400, validate.error.message));
    }

    next();
}

module.exports = { validatePost, validatePatch }