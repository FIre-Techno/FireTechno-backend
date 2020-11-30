const { resCustom, customResponse } = require("../helpers/res");
const { getCities } = require("../models/cities");
const {
  getDestinations,
  searchDestinations,
} = require("../models/destinations");

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

const getClasses = async (req, res) => {};
module.exports = { allCities, allDestination, findDestination };
