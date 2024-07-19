const express = require("express");
const {
  createDefaultBoard,
  getBoardsByID,
  createBoard,
  deleteBoardByID,
  editBoardNameByID,
} = require("../controllers/boards.controller");

const boardsRouter = express.Router();

boardsRouter.post("/default", createDefaultBoard);
boardsRouter.get("/:userID", getBoardsByID);
boardsRouter.post("/create", createBoard);
boardsRouter.delete("/:boardID", deleteBoardByID);
boardsRouter.put("/edit-name", editBoardNameByID);

module.exports = boardsRouter;
