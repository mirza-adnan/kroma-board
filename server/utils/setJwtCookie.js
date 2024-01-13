const jwt = require("jsonwebtoken");

const setJwtCookie = (res, id, expiry) => {
  const token = jwt.sign({ userId: id }, process.env.ACCESS_SECRET, {
    expiresIn: expiry,
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 30 * 24 * 3600 * 1000,
  });
};

module.exports = setJwtCookie;
