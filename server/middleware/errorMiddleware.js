const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;

  if (err.name === "CastError" && err.kind === "ObjectId") {
    message = "Malformatted Id";
    statusCode = 400;
  }

  res.status(statusCode).json({
    error: message,
    stack: process.env.NODE_ENV === "production" ? "Pancake" : err.stack,
  });
};

module.exports = {
  notFound,
  errorHandler,
};
