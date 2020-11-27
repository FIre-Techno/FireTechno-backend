const destinationsModel = require("../models/destinations");
const { resCustom, customResponse } = require("../helpers/res");

module.exports = {
  getAllData: async (req, res) => {
    try {
      const result = await destinationsModel.getAllData();
      const response = customResponse(200, "Success", result);

      resCustom(res, response);
    } catch (err) {
      console.log(err);
      const response = customResponse(500, {
        message: err.message,
      });

      resCustom(res, response);
    }
  },

  postData: async (req, res) => {
    try {
      const setData = req.body;
      const result = await destinationsModel.postData(setData);
      const response = customResponse(201, "Success", result);

      resCustom(res, response);
    } catch (err) {
      const response = customResponse(500, { message: err.message });
    }
  },

  editData: async (req, res) => {
    try {
      const { id } = req.params;
      const setData = req.body;
      const result = await destinationsModel.editData(id, setData);
      const response = customResponse(201, "Success", result);

      resCustom(res, response);
    } catch (err) {
      const response = customResponse(400, { message: err.message });
      resCustom(res, response);
    }
  },

  deleteData: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await destinationsModel.deleteData(id);
      const response = customResponse(200, "Success", result);

      resCustom(res, response);
    } catch (err) {
      const response = customResponse(500, { message: err.message });
    }
  },
};
