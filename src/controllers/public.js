const { resCustom, customResponse } = require("../helpers/res");
const { getCities } = require("../models/cities");
const {
  getDestinations,
  searchDestinations,
} = require("../models/destinations");

const { getClass, getClassType } = require("../models/classes");

const allCities = async (req, res) => {
  try {
    const cities = await getCities();
    const response = customResponse(200, "Success", cities);
    return resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Internal Server Error");
    return resCustom(res, response);
  }
};

const allDestination = async (req, res) => {
  let { limit, offset } = req.query;
  try {
    limit = limit ? parseInt(limit) : 5;
    offset = offset ? parseInt(offset) : 1;
    const destinations = await getDestinations(limit, offset);

    const response = customResponse(200, "Success", destinations);
    return resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Internal Server Error");
    return resCustom(res, response);
  }
};

const findDestination = async (req, res) => {
  let { q, limit, offset } = req.query;
  try {
    q = q ? q : "";
    limit = limit ? parseInt(limit) : 5;
    offset = offset ? parseInt(offset) : 1;
    const destinations = await searchDestinations(q, limit, offset);

    const response = customResponse(200, "Success", destinations);
    return resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Internal Server Error");
    return resCustom(res, response);
  }
};

const getClasses = async (req, res) => {
  const { type, id_destination } = req.query;
  try {
    const classes = await getClassType(type, id_destination);
    const response = customResponse(200, "Success", classes);
    return resCustom(res, response);
  } catch (error) {
    console.log(error);
  }
};

const oneClass = async (req, res) => {
  const { id } = req.params;
  try {
    const classes = await getClass({ "a.id": id });
    const response = customResponse(
      200,
      "Success",
      classes[0] ? classes[0] : {}
    );
    return resCustom(res, response);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  allCities,
  allDestination,
  findDestination,
  getClasses,
  oneClass,
};
