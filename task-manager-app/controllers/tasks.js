const Task = require("../models/task-models");
const asyncWrapper = require("../middleware/async");
const { createCustomError } = require("../errors/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const allTasks = await Task.find({});
  res.status(200).json({ allTasks });
});

const getTaskById = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomError(`msg: no task with id ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

const postTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  task.date = new Date(req.body.date);
  res.status(201).json({ task });
});

const patchTaskById = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(createCustomError(`msg: no task with id ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTaskById = asyncWrapper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError(`msg: no task with id ${taskId}`, 404));
  }
  res.status(200).json({ task, status: "Task deleted." });
});

module.exports = {
  getAllTasks,
  getTaskById,
  postTask,
  patchTaskById,
  deleteTaskById,
};
