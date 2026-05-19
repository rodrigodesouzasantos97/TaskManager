const Workspace = require("../models/Workspace");

const createWorkspace = async (req, res) => {
  try {
    const workspace = {
      title: req.body.title,
      image: req.body.image,
      board: req.body.board,
    };

    const response = await Workspace.create(workspace);

    res
      .status(201)
      .json({ msg: "Espaço de trabalho criado com sucesso!", response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ocorreu um erro!" });
  }
};

const getWorkspaces = async (req, res) => {
  try {
    const workspaces = await Workspace.find();

    res.status(200).json(workspaces);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ocorreu um erro!" });
  }
};

const getWorkspace = async (req, res) => {
  try {
    const workspaceId = req.params.workspaceId;

    const workspace = await Workspace.findById(workspaceId);

    if (!workspace) {
      res.status(404).json({ msg: "Espaço de trabalho não encontrado!" });
      return;
    }

    res.status(200).json(workspace);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Ocorreu um erro!" });
  }
};

module.exports = {
  createWorkspace,
  getWorkspaces,
  getWorkspace,
};
