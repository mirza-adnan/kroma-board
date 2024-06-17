const express = require("express");
const {
  getColorsByID,
  createColor,
} = require("../controllers/colors.controller");

const colorsRouter = express.Router();

colorsRouter.get("/:userID/:boardID", getColorsByID);
colorsRouter.post("/", createColor);

module.exports = colorsRouter;
