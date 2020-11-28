const Joi = require('joi');
const { resCustom, customResponse } = require('../helpers/res')

const validatePost = (res, req, next) => {
    console.log(req.body)
    const schema = Joi.object({
        message: Joi.string().required(),
        id_sender: Joi.number().required(),
        id_receiver: Joi.number().required(),
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
        message: Joi.string().required(),
        id_sender: Joi.number().required(),
        id_receiver: Joi.number().required(),
    })

    const validate = schema.validate(req.body);
    if (validate.error) {
        return resCustom(res, customResponse(400, validate.error.message));
    }

    next();
}

module.exports = { validatePost, validatePatch }