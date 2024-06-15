const express = require("express");
const {
  createDefaultBoard,
  getBoardsByID,
  createBoard,
} = require("../controllers/boards.controller");

const boardsRouter = express.Router();

boardsRouter.post("/default", createDefaultBoard);
boardsRouter.get("/:userID", getBoardsByID);
boardsRouter.post("/create", createBoard);

module.exports = boardsRouter;
