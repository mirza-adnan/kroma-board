const clearJwtCookie = (res) => {
  res.clearCookie("jwt");
};

module.exports = clearJwtCookie;
