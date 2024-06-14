const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: [1, "Board name cannot be empty"],
    max: [15, "Board name cannot exceed 15 characters"],
  },
  length: {
    type: Number,
  },
  default: {
    type: Boolean,
    default: false,
    required: true,
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
