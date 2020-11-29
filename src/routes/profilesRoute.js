const express = require("express");
const router = express.Router();
const {
    GetAllProfiles,
    GetIdProfiles,
    PostProfiles,
    PatchProfiles,
    DeleteProfiles,
} = require('../controllers/profiles')

const {
    validatePost,
    validatePatch
} = require('../middlewares/schemaProfiles')

const multer = require('../middlewares/multer')

router
    .get("/", GetAllProfiles)
    .get("/:id", GetIdProfiles)
    .post("/", multer, validatePost, PostProfiles)
    .patch("/:id", multer, PatchProfiles)
    .delete("/:id", DeleteProfiles)
module.exports = router;