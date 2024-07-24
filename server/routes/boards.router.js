const express = require("express");
const {
  createDefaultBoard,
  getBoardsByID,
  createBoard,
  deleteBoardByID,
  editBoardNameByID,
} = require("../controllers/boards.controller");
const { protect } = require("../middleware/authMiddleware");

const boardsRouter = express.Router();

boardsRouter.post("/default", protect, createDefaultBoard);
boardsRouter.get("/:userID", protect, getBoardsByID);
boardsRouter.post("/create", protect, createBoard);
boardsRouter.delete("/:boardID", protect, deleteBoardByID);
boardsRouter.put("/edit-name", protect, editBoardNameByID);

module.exports = boardsRouter;
