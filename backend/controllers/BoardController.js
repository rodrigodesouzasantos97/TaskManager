const Board = require("../models/Board");

const createBoard = async (req, res) => {
  try {
    const board = {
      categories: req.body.categories,
    };

    const response = await Board.create(board);

    res.status(201).json({ msg: "Quadro criado com sucesso!", response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ocorreu um erro!" });
  }
};

const getBoard = async (req, res) => {
  try {
    const boardId = req.params.boardId;

    const board = await Board.findById(boardId);

    if (!board) {
      res.status(404).json({ msg: "Quadro não encontrado!" });
      return;
    }

    res.status(200).json(board);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ocorreu um erro!" });
  }
};

const createCategory = async (req, res) => {
  try {
    const boardId = req.params.id;

    const board = await Board.findById(boardId);

    if (!board) {
      res.status(404).json({ msg: "Quadro não encontrado!" });
      return;
    }

    const category = {
      title: req.body.title,
      tasks: req.body.tasks,
    };

    board.categories.push(category);

    await board.save();

    res.status(200).json({ msg: "Categoria criada com sucesso!", board });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ocorreu um erro!" });
  }
};

const createTask = async (req, res) => {
  try {
    const { boardId, categoryId } = req.params;

    const board = await Board.findById(boardId);

    if (!board) {
      res.status(404).json({ msg: "Quadro não encontrado!" });
      return;
    }

    const category = board.categories.id(categoryId);

    if (!category) {
      res.status(404).json({ msg: "Categoria não encontrada!" });
      return;
    }

    const task = {
      title: req.body.title,
      description: req.body.description,
    };

    category.tasks.push(task);

    await board.save();

    res.status(200).json({ msg: "Tarefa criada com sucesso!", category });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ocorreu um erro!" });
  }
};

module.exports = {
  createBoard,
  getBoard,
  createCategory,
  createTask,
};
