const express = require("express");

const router = express.Router();

const {
  createBoard,
  getBoard,
  createCategory,
  createTask,
} = require("../controllers/BoardController");

router.post("/boards", (req, res) => createBoard(req, res));

router.get("/boards/:boardId", (req, res) => getBoard(req, res));

router.patch("/boards/:boardId", (req, res) => createCategory(req, res));

router.patch("/boards/:boardId/categories/:categoryId", (req, res) =>
  createTask(req, res),
);

module.exports = router;
