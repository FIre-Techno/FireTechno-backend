const notifModel = require("../models/notification");
const { resCustom, customResponse } = require("../helpers/res");

module.exports = {
  getAllNotif: async (req, res) => {
    try {
      const result = await notifModel.getAllNotif();
      const response = customResponse(200, "Success", result);

      resCustom(res, response);
    } catch (err) {
      console.log(err);
      const response = customResponse(500, { message: err.message });

      resCustom(res, response);
    }
  },

  postData: async (req, res) => {
    try {
      const setData = req.body;
      const result = await notifModel.postData(setData);
      const response = customResponse(201, "Success", result);

      resCustom(res, response);
    } catch (err) {
      console.log(err);
      const response = customResponse(400, err.message);

      resCustom(res, response);
    }
  },

  editData: async (req, res) => {
    try {
      const { id } = req.params;
      const setData = req.body;
      const result = await notifModel.editData(id, setData);
      const response = customResponse(201, "Success", result);

      resCustom(res, response);
    } catch (err) {
      console.log(err);
      const response = customResponse(400, err.message);

      resCustom(res, response);
    }
  },

  deleteData: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await notifModel.deleteData(id);
      const response = customResponse(200, "Success", result);

      resCustom(res, response);
    } catch (err) {
      console.log(err);
      const response = customResponse(500, err.message);

      resCustom(res, response);
    }
  },
};
