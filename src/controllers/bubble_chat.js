const chatModel = require("../models/bubble_chat");
const { resCustom, customResponse } = require("../helpers/res");

module.exports = {
  getAllChats: async (req, res) => {
    try {
      const result = await chatModel.getAllChats();
      const response = customResponse(200, "Success", result);

      resCustom(res, response);
    } catch (err) {
      console.log(err);
      const response = customResponse(500, "Bad Request", {
        message: err.message,
      });

      resCustom(res, response);
    }
  },

  deleteChat: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await chatModel.deleteChat(id);
      const response = customResponse(200, "Chat Deleted", result);

      resCustom(res, response);
    } catch (err) {
      console.log(err);
      const response = customResponse(500, "Failed Delete Chat", {
        message: err.message,
      });

      resCustom(res, response);
    }
  },

  postMessage: async (req, res) => {
    try {
      const setData = req.body;
      const result = await chatModel.postMessage(setData);
      const response = customResponse(201, "Success", result);
      resCustom(res, response);
    } catch (err) {
      const response = customResponse(400, "Failed", { message: err.message });
      resCustom(res, response);
    }
  },

  editMessage: async (req, res) => {
    try {
      const { id } = req.params;
      const setData = req.body;
      const result = await chatModel.editMessage(id, setData);
      const response = customResponse(201, "Success", {
        data: result.affectedRows,
      });
      resCustom(res, response);
    } catch (err) {
      const response = customResponse(400, "Failed", { message: err.message });
      resCustom(res, response);
    }
  },
};
