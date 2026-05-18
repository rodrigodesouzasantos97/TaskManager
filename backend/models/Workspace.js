const mongoose = require("mongoose");

const { Schema } = mongoose;

const workspaceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    board: {
      type: Schema.Types.ObjectId,
      ref: "Board",
    },
  },
  { timestamps: true },
);

const Workspace = mongoose.model("Workspace", workspaceSchema);

module.exports = Workspace;
