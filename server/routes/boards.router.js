const express = require("express");
const {
  createDefaultBoard,
  getBoardsByID,
} = require("../controllers/boards.controller");

const boardsRouter = express.Router();

boardsRouter.post("/default", createDefaultBoard);
boardsRouter.get("/:userID", getBoardsByID);

module.exports = boardsRouter;
