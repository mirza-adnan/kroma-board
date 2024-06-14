const express = require("express");
const { getColors, createColor } = require("../controllers/colors.controller");

const colorsRouter = express.Router();

colorsRouter.get("/", getColors);
colorsRouter.post("/", createColor);

module.exports = colorsRouter;
