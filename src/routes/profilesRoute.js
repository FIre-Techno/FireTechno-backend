const express = require("express");
const router = express.Router();
const {
    GetAllProfiles,
    GetIdProfiles,
    PostProfiles,
    PatchProfiles,
    DeleteProfiles,
} = require('../controllers/profiles')
router
    .get("/", GetAllProfiles)
    .get("/:id", GetIdProfiles)
    .post("/", PostProfiles)
    .patch("/:id", PatchProfiles)
    .delete("/:id", DeleteProfiles)
module.exports = router;