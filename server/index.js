require("dotenv").config();

const express = require("express");
const connectDB = require("./config/connectDB");

// MIDDLEWARE
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// ROUTERS
const userRouter = require("./routes/users.router");
const colorsRouter = require("./routes/colors.router");
const boardsRouter = require("./routes/boards.router");

// CONFIGURATIONS
connectDB();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const whitelist = ["http://localhost:5173" /** other domains if any */];
const corsOptions = {
  credentials: true,
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

// ROUTES
app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use("/api/user", userRouter);
app.use("/api/color", colorsRouter);
app.use("/api/board", boardsRouter);

// ERROR HANDLING
app.use(notFound);
app.use(errorHandler);

// START
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
