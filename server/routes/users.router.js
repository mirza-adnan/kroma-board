const express = require("express");
const {
  signupUser,
  verifyUser,
  loginUser,
  logoutUser,
} = require("../controllers/users.controller");
const { protect } = require("../middleware/authMiddleware");

const userRouter = express.Router();

userRouter.post("/signup", signupUser);
userRouter.get("/verify/:id", verifyUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", protect, logoutUser);

module.exports = userRouter;
