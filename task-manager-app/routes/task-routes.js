const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  getTaskById,
  postTask,
  patchTaskById,
  deleteTaskById,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(postTask);
router
  .route("/:id")
  .get(getTaskById)
  .patch(patchTaskById)
  .delete(deleteTaskById);

module.exports = router;
