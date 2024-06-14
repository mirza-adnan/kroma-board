const asyncHandler = require("../middleware/asyncHandler");
const Color = require("../models/Color.model");
const User = require("../models/User.model");
const { sendError } = require("../utils/response");

const getColors = asyncHandler(async (req, res) => {
  const { userID } = req.body;

  const colors = await Color.find({ user });
  return res.status(200).json(colors);
});

const createColor = asyncHandler(async (req, res) => {
  const { value, hex, user } = req.body;
  const color = new Color({
    value,
    hex,
    user,
  });
  const savedColor = await color.save();

  res.status(201).json(savedColor);
});

module.exports = {
  getColors,
  createColor,
};
