const asyncHandler = require("../middleware/asyncHandler");
const Board = require("../models/Board.model");
const Color = require("../models/Color.model");
const { sendMsg, sendError } = require("../utils/response");

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

const createBoard = asyncHandler(async (req, res) => {
  if (!req.body.name) {
    return sendError(res, 400, "Board name cannot be empty");
  }
  const board = new Board(req.body);
  const savedBoard = await board.save();

  res.status(201).json(savedBoard);
});

const deleteBoardByID = asyncHandler(async (req, res) => {
  const { boardID } = req.params;
  await Board.findByIdAndDelete(boardID);
  await Color.deleteMany({ boardID });
  res.sendStatus(202);
});

const editBoardNameByID = asyncHandler(async (req, res) => {
  const { boardID, name } = req.body;
  let board = await Board.findById(boardID);
  board.name = name;
  board = await board.save();
  res.status(200).json(board);
});

module.exports = {
  createDefaultBoard,
  getBoardsByID,
  createBoard,
  deleteBoardByID,
  editBoardNameByID,
};
