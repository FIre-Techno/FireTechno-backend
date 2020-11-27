const { resCustom, customResponse } = require("../helpers/res");
const chatsModels = require("../models/chats")

const getLastMessage = async (req, res) => {
    const { id_user } = req.params;
    const { search } = req.query || '';

    try {
        const result = await chatsModels.getLastMessage(id_user, search);
        const response = customResponse(200, "Success", result);
        console.log(result)
        resCustom (res, response);
    }catch(err) {
        const response = customResponse(500, "Bad Request");
        resCustom(res, response);
        console.log(err, 'ko')
    }
};

module.exports = { getLastMessage }