require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// CONFIGURATIONS
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// ROUTES
app.get("/ping", (req, res) => {
  res.send("PONG");
});

// START
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Server Online");
});
