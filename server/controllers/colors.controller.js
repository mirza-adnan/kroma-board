const asyncHandler = require("../middleware/asyncHandler");
const Color = require("../models/Color.model");
const User = require("../models/User.model");
const { sendError } = require("../utils/response");

const getColorsByID = asyncHandler(async (req, res) => {
  const { userID, boardID } = req.params;
  const colors = await Color.find({ userID, boardID });
  return res.status(200).json(colors);
});

const getAllColors = asyncHandler(async (req, res) => {
  const { userID } = req.params;
  const colors = await Color.find({ userID });
  return res.status(200).json(colors);
});

const createColor = asyncHandler(async (req, res) => {
  const color = new Color(req.body);
  const savedColor = await color.save();

  res.status(201).json(savedColor);
});

const deleteColorByID = asyncHandler(async (req, res) => {
  const { colorID } = req.params;
  await Color.findByIdAndDelete(colorID);
  res.sendStatus(202);
});

module.exports = {
  getColorsByID,
  getAllColors,
  createColor,
  deleteColorByID,
};
