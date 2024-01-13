const sendMsg = (res, code, msg) => {
  res.status(code).json({ message: msg });
};

const sendError = (res, code, msg) => {
  res.status(code);
  throw new Error(msg);
};

module.exports = { sendMsg, sendError };
