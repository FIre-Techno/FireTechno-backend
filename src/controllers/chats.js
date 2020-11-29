const { resCustom, customResponse } = require("../helpers/res");
const chatsModels = require("../models/chats")

const getLastMessage = async (req, res) => {
    req.socket.emit
    const { id_user } = req.params;
    const { search } = req.query || '';

    try {
        const result = await chatsModels.getLastMessage(id_user, search);
        const response = customResponse(200, "Success", result);
        resCustom (res, response);
    }catch(err) {
        console.log(err)
        const response = customResponse(500, "Bad Request");
        resCustom(res, response);
    }
};

const getIdMessage = async (req, res) => {
    req.socket.emit
    const {id_sender, id_receiver} = req.params;

    try {
        const result = await chatsModels.getIdMessage(id_sender, id_receiver);
        const response = customResponse(200, "Success", result);
        resCustom(res, response);
    } catch (err) {
        console.log(err)
        const response = customResponse(500, "Bad Request");
        resCustom(res, response);
    }
};

const postMessage = async (req, res) => {
    const setData = req.body;

    try {
        const result = await chatsModels.postMessage(setData);
        req.socket.emit('message', result);
        const response = customResponse(200, "Success insert chat", {
            id: result.insertId,
        });
        resCustom(res, response);
    } catch (err) {
        console.log(err)
        const response = customResponse(500, "Bad Request");
        resCustom(res, response);
    }
};

const patchMessage = async (req, res) => {
    const setData = req.body;
    const id = req.params.id;
    try {
        const result = await chatsModels.patchMessage(setData, id);
        const response = customResponse(200, "Success patch chat", {
            id: result.insertId,
        });
        resCustom(res, response);
    } catch (err) {
        console.log(err)
        const response = customResponse(500, "Bad Request");
        resCustom(res, response);
    }
};

const deleteMessage = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await chatsModels.deleteMessage(id);
        const response = customResponse(200, "Success delete chat", {
            id: result.insertId,
        });
        resCustom(res, response);
    } catch (err) {
        console.log(err)
        const response = customResponse(500, "Bad Request");
        resCustom(res, response);
    }
};

module.exports = {
    getLastMessage,
    getIdMessage,
    postMessage,
    patchMessage,
    deleteMessage
}