const express = require("express");

const router = express.Router();

const workspacesRouter = require("./workspaces");

router.use("/", workspacesRouter);

const boardsRouter = require("./boards");

router.use("/", boardsRouter);

module.exports = router;
