const { resCustom, customResponse } = require("../helpers/res");
const {
  getClass,
  getClasses,
  updateClass,
  deleteClass,
  insertClass,
} = require("../models/classes");

/*
  No Any Request
*/
const GetClasses = async (req, res) => {
  try {
    const classes = await getClasses();
    const response = customResponse(200, "Success", classes);

    resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Internal Server Error");
    resCustom(res, response);
  }
};

/*
  @params: id
*/
const GetClass = async (req, res) => {
  const { id } = req.params;

  try {
    const classOne = await getClass({ "a.id": id });
    if (!classOne.length) {
      const response = customResponse(400, "No one class found");
      return resCustom(res, response);
    }

    const response = customResponse(200, "Success", classOne[0]);
    return resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Internal Server Error");
    resCustom(res, response);
  }
};

/*
  @body:
  id, name, price, estimate, terminal, 
  gate, id_destination, id_airport
*/
const UpdateClass = async (req, res) => {
  const { id } = req.body;

  try {
    const classOne = await getClass({ "a.id": id });
    if (!classOne.length) {
      const response = customResponse(400, "No one class found");
      return resCustom(res, response);
    }

    await updateClass(req.body, id);
    const response = customResponse(201, "Success update data class");

    resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Internal Server Error");
    resCustom(res, response);
  }
};

/*
  @body:
  name, price, estimate, terminal, 
  gate, id_destination, id_airport
*/
const AddClass = async (req, res) => {
  try {
    const insert = await insertClass(req.body);
    const response = customResponse(201, "Success insert data class", {
      id: insert.insertId, // return -> id insert
    });

    resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Internal Server Error");
    resCustom(res, response);
  }
};

/*
  @params: id
*/
const RemoveClass = async (req, res) => {
  const { id } = req.params;

  try {
    const classOne = await getClass({ "a.id": id });
    if (!classOne.length) {
      const response = customResponse(400, "No one class found");
      return resCustom(res, response);
    }

    await deleteClass(id);
    const response = customResponse(201, "Success delete data class");

    resCustom(res, response);
  } catch (error) {
    console.log(error);
    const response = customResponse(500, "Internal Server Error");
    resCustom(res, response);
  }
};

module.exports = { GetClasses, GetClass, UpdateClass, AddClass, RemoveClass };
