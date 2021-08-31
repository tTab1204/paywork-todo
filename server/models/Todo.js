const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
  {
    content: {
      type: String,
      trim: true,
      required: true,
    },
    isCheck: {
      type: Boolean,
    },
  },
  { timestamps: true },
);

const Todo = mongoose.model('Todo', todoSchema);

module.exports = { Todo };
