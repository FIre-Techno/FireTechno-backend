var express = require("express");
const Joi = require("joi");
const { getUser, getUsers } = require("../controllers/example");
const { resCustom, customResponse } = require("../helpers/res");
var router = express.Router();

// bisa di pindahin ke middleware biar rapih
const exampleValidate = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.string().required(),
  });
  const validate = schema.validate(req.body);

  if (validate.error.message) {
    return resCustom(res, customResponse(400, validate.error.message));
  }

  next();
};

/* example */
router
  .get("/", function (req, res, next) {
    res.json({
      message: "Running",
    });
  })
  .get("/example", getUsers)
  .post("/example", exampleValidate, getUser);

module.exports = router;
