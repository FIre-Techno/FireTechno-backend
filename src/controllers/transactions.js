const { resCustom, customResponse } = require("../helpers/res");
const {
    getAllTransactions,
    getIdTransactions,
    postTransactions,
    patchTransactions,
    deleteTransactions,
} = require("../models/transactions");

const GetAllTransactions = async (req, res) => {
    try {
        const result = await getAllTransactions();
        const response = customResponse(200, "Success", result);

        resCustom(res, response);
    } catch (error) {
        console.log(error);
        const response = customResponse(500, "Internal Server Error");
        resCustom(res, response);
    }
}

const GetIdTransactions = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await getIdTransactions(id);
        const response = customResponse(200, "Success", result);

        resCustom(res, response);
    } catch (error) {
        console.log(error);
        const response = customResponse(500, "Internal Server Error");
        resCustom(res, response);
    }
}

const PostTransactions = async (req, res) => {
    const setData = req.body;
    try {
        const result = await postTransactions(setData);
        const response = customResponse(200, "Success", {
            id: result.insertId,
        });

        resCustom(res, response);
    } catch (error) {
        console.log(error);
        const response = customResponse(500, "Internal Server Error");
        resCustom(res, response);
    }
}

const PatchTransactions = async (req, res) => {
    const id = req.params.id;
    const setData = req.body;
    try {
        const result = await patchTransactions(setData, id);
        const response = customResponse(200, "Success", {
            id: result.insertId,
        });

        resCustom(res, response);
    } catch (error) {
        console.log(error);
        const response = customResponse(500, "Internal Server Error");
        resCustom(res, response);
    }
}

const DeleteTransactions = async (req, res) => {
    const {id} = req.params;
    try {
        const result = await deleteTransactions(id);
        const response = customResponse(200, "Success", {
            id: result.insertId,
        });

        resCustom(res, response);
    } catch (error) {
        console.log(error);
        const response = customResponse(500, "Internal Server Error");
        resCustom(res, response);
    }
}

module.exports = {
    GetAllTransactions,
    GetIdTransactions,
    PostTransactions,
    PatchTransactions,
    DeleteTransactions
}