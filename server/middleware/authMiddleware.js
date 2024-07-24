const jwt = require("jsonwebtoken");
const User = require("../models/User.model");
const asyncHandler = require("./asyncHandler");

const protect = asyncHandler(async (req, res, next) => {
  let token = req.cookies.jwt;
  console.log(req.cookies);

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.ACCESS_SECRET);
      const user = await User.findById(decoded.userID);
      if (user.verified) {
        console.log("Token verified");
        req.user = user;
        next();
      } else {
        res.status(401);
        throw new Error("Not authorized: not verified");
      }
    } catch (e) {
      console.log(e);
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
