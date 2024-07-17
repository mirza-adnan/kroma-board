const express = require("express");
const {
  createDefaultBoard,
  getBoardsByID,
  createBoard,
  deleteBoardByID,
} = require("../controllers/boards.controller");

const boardsRouter = express.Router();

boardsRouter.post("/default", createDefaultBoard);
boardsRouter.get("/:userID", getBoardsByID);
boardsRouter.post("/create", createBoard);
boardsRouter.delete("/:boardID", deleteBoardByID);

module.exports = boardsRouter;
