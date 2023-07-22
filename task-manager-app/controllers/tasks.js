const Task = require("../models/task-models");

const getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json({ allTasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: `no task with id` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const postTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    task.date = new Date(req.body.date);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const patchTaskById = (req, res) => {
  res.json(req.body);
};

const deleteTaskById = (req, res) => {
  res.send("Delete task by id");
};

module.exports = {
  getAllTasks,
  getTaskById,
  postTask,
  patchTaskById,
  deleteTaskById,
};
