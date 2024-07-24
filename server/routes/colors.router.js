const express = require("express");
const {
  getColorsByID,
  getAllColors,
  createColor,
  deleteColorByID,
} = require("../controllers/colors.controller");
const { protect } = require("../middleware/authMiddleware");

const colorsRouter = express.Router();

colorsRouter.get("/:userID", protect, getAllColors);
colorsRouter.get("/:userID/:boardID", protect, getColorsByID);
colorsRouter.post("/", protect, createColor);
colorsRouter.delete("/:colorID", protect, deleteColorByID);

module.exports = colorsRouter;
