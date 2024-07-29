const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const asyncHandler = require("./asyncHandler");
const clearJwtCookie = require("../utils/clearJwtCookie");

const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      const user = await User.findById(decoded.userID);
      if (user.verified) {
        req.user = user;
        next();
      } else {
        res.status(401);
        throw new Error("Not authorized: not verified");
      }
    } catch (e) {
      console.log(e);
      clearJwtCookie(res);
      res.status(401);
      throw new Error("Not authorized: token invalid");
    }
  } else {
    res.status(401);
    throw new Error("Not authorized: no token");
  }
});

module.exports = {
  protect,
};
