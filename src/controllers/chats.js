const { resCustom, customResponse } = require("../helpers/res");
const chatsModels = require("../models/chats")

const getLastMessage = async (req, res) => {
    req.socket.emit
    console.log(req.socket.emit)
    const { id_user } = req.params;
    const { search } = req.query || '';

    try {
        const result = await chatsModels.getLastMessage(id_user, search);
        const response = customResponse(200, "Success", result);
        // console.log(result)
        resCustom (res, response);
    }catch(err) {
        const response = customResponse(500, "Bad Request");
        resCustom(res, response);
        // console.log(err, 'ko')
    }
};

const getIdMessage = async (req, res) => {
    // req.io.emit
    // console.log(req.io, 'koko')
    // const id_sender = req.params.id_sender;
    const {id_sender, id_receiver} = req.params;
    // const id_receiver = req.params.id_receiver;

    try {
        const result = await chatsModels.getIdMessage(id_sender, id_receiver);
        const response = customResponse(200, "Success", result);
        // console.log(req.io, 'io')
        // console.log(id_sender, id_receiver);
        resCustom(res, response);
    } catch (err) {
        const response = customResponse(500, "Bad Request");
        resCustom(res, response);
        // console.log(err, 'ko')
    }
};

const postMessage = async (req, res) => {
    const setData = req.body;
    // console.log(req)
    try {
        const result = await chatsModels.postMessage(setData);
        const response = customResponse(200, "Success insert chat", {
            id: result.insertId,
        });
        // console.log(result)
        resCustom(res, response);
    } catch (err) {
        const response = customResponse(500, "Bad Request");
        resCustom(res, response);
        // console.log(err, 'ko')
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
        // console.log(result)
        resCustom(res, response);
    } catch (err) {
        const response = customResponse(500, "Bad Request");
        resCustom(res, response);
        // console.log(err, 'ko')
    }
};

const deleteMessage = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await chatsModels.deleteMessage(id);
        const response = customResponse(200, "Success delete chat", {
            id: result.insertId,
        });
        // console.log(result)
        resCustom(res, response);
    } catch (err) {
        const response = customResponse(500, "Bad Request");
        resCustom(res, response);
        // console.log(err, 'ko')
    }
};

module.exports = {
    getLastMessage,
    getIdMessage,
    postMessage,
    patchMessage,
    deleteMessage
}