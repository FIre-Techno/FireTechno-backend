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

router
    .get("/", GetAllProfiles)
    .get("/:id", GetIdProfiles)
    .post("/", validatePost, PostProfiles)
    .patch("/:id", PatchProfiles)
    .delete("/:id", DeleteProfiles)
module.exports = router;