const express = require("express");
const { registerUser, logoutUser } = require("../controllers/users.controller");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.get("/logout", logoutUser);

module.exports = userRouter;
