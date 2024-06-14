const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
  value: {
    type: String,
    required: true,
  },
  hex: {
    type: String,
    default: "",
  },
  boardID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Color = mongoose.model("Color", colorSchema);

module.exports = Color;
