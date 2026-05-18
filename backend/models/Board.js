const mongoose = require("mongoose");

const { Schema } = mongoose;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  tasks: [taskSchema],
});

const boardSchema = new Schema(
  {
    categories: [categorySchema],
  },
  { timestamps: true },
);

const Board = mongoose.model("Board", boardSchema);

module.exports = Board;
