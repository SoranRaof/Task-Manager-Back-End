const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const getTaskById = (req, res) => {
  res.json({ id: req.params.id });
};

const postTask = (req, res) => {
  res.json(req.body);
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
