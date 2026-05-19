const express = require("express");

const router = express.Router();

const {
  createWorkspace,
  getWorkspaces,
  getWorkspace,
} = require("../controllers/WorkspaceController");

router.post("/workspaces", (req, res) => createWorkspace(req, res));

router.get("/workspaces", (req, res) => getWorkspaces(req, res));

router.get("/workspaces/:workspaceId", (req, res) => getWorkspace(req, res));

module.exports = router;
