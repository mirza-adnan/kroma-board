const clearJwtCookie = (res) => {
  console.log("cleared token");
  res.clearCookie("jwt");
};

module.exports = clearJwtCookie;
