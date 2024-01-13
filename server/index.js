require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/connectDB");
const userRouter = require("./routes/user.router");

// CONFIGURATIONS
connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// ROUTES
app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use("/api/user", userRouter);

// ERROR HANDLING
app.use(notFound);
app.use(errorHandler);

// START
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
