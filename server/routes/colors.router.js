const express = require("express");
const {
  getColorsByID,
  getAllColors,
  createColor,
} = require("../controllers/colors.controller");

const colorsRouter = express.Router();

colorsRouter.get("/:userID", getAllColors);
colorsRouter.get("/:userID/:boardID", getColorsByID);
colorsRouter.post("/", createColor);

module.exports = colorsRouter;
