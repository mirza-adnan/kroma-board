const express = require("express");
const {
  getColorsByID,
  getAllColors,
  createColor,
  deleteColorByID,
} = require("../controllers/colors.controller");

const colorsRouter = express.Router();

colorsRouter.get("/:userID", getAllColors);
colorsRouter.get("/:userID/:boardID", getColorsByID);
colorsRouter.post("/", createColor);
colorsRouter.delete("/:colorID", deleteColorByID);

module.exports = colorsRouter;
