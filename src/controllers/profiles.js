const { resCustom, customResponse } = require("../helpers/res");
const {
    getAllProfiles,
    getIdProfiles,
    postProfiles,
    patchProfiles,
    deleteProfiles,
} = require("../models/profiles");

const GetAllProfiles = async (req, res) => {
    try {
        const result = await getAllProfiles();
        const response = customResponse(200, "Success", result);

        resCustom(res, response);
    } catch (error) {
        console.log(error);
        const response = customResponse(500, "Internal Server Error");
        resCustom(res, response);
    }
}

const GetIdProfiles = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await getIdProfiles(id);
        const response = customResponse(200, "Success", result);

        resCustom(res, response);
    } catch (error) {
        console.log(error);
        const response = customResponse(500, "Internal Server Error");
        resCustom(res, response);
    }
}

const PostProfiles = async (req, res) => {
    const setData = {...req.body};
    console.log(req.file, 'ini')
    // if (req.file) {
    //     photo = req.file.filename
    // }
    try {
        const result = await postProfiles(setData);
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

const PatchProfiles = async (req, res) => {
    const id = req.params.id;
    const setData = req.body;
    try {
        const result = await patchProfiles(setData, id);
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

const DeleteProfiles = async (req, res) => {
    const id = req.params;
    try {
        const result = await deleteProfiles(id);
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
    GetAllProfiles,
    GetIdProfiles,
    PostProfiles,
    PatchProfiles,
    DeleteProfiles
}