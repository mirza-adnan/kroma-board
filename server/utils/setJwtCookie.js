const jwt = require("jsonwebtoken");

const setJwtCookie = (res, id, expiry) => {
  const token = jwt.sign({ userID: id }, process.env.ACCESS_SECRET, {
    expiresIn: expiry,
  });

  console.log("set token: ", token);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 24 * 3600 * 1000,
  });
};

module.exports = setJwtCookie;
