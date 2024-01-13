const User = require("../models/User.model");
const asyncHandler = require("../middleware/asyncHandler");
const bcrypt = require("bcrypt");
const setJwtCookie = require("../utils/setJwtCookie");
const clearJwtCookie = require("../utils/clearJwtCookie");
const { sendMsg, sendError } = require("../utils/response");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    sendError(res, 401, "User with that email already exists");
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ name, email, password: hashedPassword });
  const savedUser = await user.save();

  setJwtCookie(res, savedUser._id, "30d");

  res.status(201).json(savedUser);
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    setJwtCookie(res, user._id, "30d");
    res.json(user);
  } else {
    sendError(res, 401, "Invalid email or password");
  }
});

const logoutUser = asyncHandler(async (req, res) => {
  clearJwtCookie(res);
  sendMsg(res, 200, "Logged out succesfully");
});

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
};
