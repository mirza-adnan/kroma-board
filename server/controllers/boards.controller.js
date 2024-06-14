const asyncHandler = require("../middleware/asyncHandler");
const Board = require("../models/Board.model");
const { sendMsg } = require("../utils/response");

const createDefaultBoard = asyncHandler(async (req, res) => {
  const { userID } = req.body;
  const defaultBoard = {
    name: "THE Board",
    default: true,
    userID: userID,
    length: 0,
  };
  const newBoard = new Board(defaultBoard);
  await newBoard.save();

  const boards = await Board.find({ userID });
  res.status(201).json(boards);
});

const getBoardsByID = asyncHandler(async (req, res) => {
  const { userID } = req.params;
  const boards = await Board.find({ userID });
  res.status(200).json(boards);
});

module.exports = {
  createDefaultBoard,
  getBoardsByID,
};
