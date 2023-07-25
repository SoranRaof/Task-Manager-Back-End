const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a task name."],
    trim: true,
    maxlength: [20, "Name cannot be more than 20 characters."],
  },
  comments: {
    type: String,
    required: false,
    trim: true,
    maxlength: [200],
  },
  completed: {
    type: Boolean,
    default: false,
  },
  createdAt: Date,
});

module.exports = mongoose.model("Task", TaskSchema);
