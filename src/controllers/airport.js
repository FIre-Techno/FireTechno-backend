const { resCustom, customResponse } = require("../helpers/res");
const airportModel = require("../models/airport");
const bcrypt = require("bcryptjs");

const getAirports = async (req, res) => {
  try {
    const airports = await airportModel.getAirports();
    const response = customResponse(200, "Success", airports);

    resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Bad Request");
    resCustom(res, response);
  }
};

/*
    @params: id
*/

const getAirport = async (req, res) => {
  const { id } = req.params;
  try {
    const airport = await airportModel.getAirport(id);
    const response = customResponse(200, "Success", airport);

    resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Bad Request");
    resCustom(res, response);
  }
};

/*
    @body :
    id, name, start, review
    @file :
    photo
*/

const patchAirport = async (req, res) => {
  const { id } = req.body;
  const data = req.body;
  delete data.id;
  try {
    if (!req.file) {
      await airportModel.patchAirport(data, id);
      const response = customResponse(400, "Success Patch data.");
      resCustom(res, response);
    } else {
      await airportModel.patchAirport(
        { ...data, photo: req.file.filename },
        id
      );
      const response = customResponse(400, "Success Patch data.");
      resCustom(res, response);
    }
  } catch (error) {
    const response = customResponse(500, "Bad Request");
    resCustom(res, response);
  }
};

/*
    @body :
    name, start, review
    @file :
    photo
*/

const postAirport = async (req, res) => {
  try {
    await airportModel.postAirport({ ...req.body, photo: req.file.filename });
    const response = customResponse(400, "Success Post data.");
    resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Bad Request");
    resCustom(res, response);
  }
};

/*
    @params: id
*/

const deleteAirport = async (req, res) => {
  const { id } = req.params;
  try {
    await airportModel.deleteAirport(id);
    const response = customResponse(400, "Success Delete Data.");
    resCustom(res, response);
  } catch (error) {
    const response = customResponse(500, "Bad Request.");
    resCustom(res, response);
  }
};

module.exports = {
  getAirports,
  getAirport,
  patchAirport,
  postAirport,
  deleteAirport,
};
