const express = require("express");
const router = express.Router();

const taskController = require("../controllers/task-controller");

router.get("/", taskController.sendHi);
router.get("/sruthi", taskController.name);
router.post("/add-task", taskController.createTask);
router.get("/get-all-tasks", taskController.getTask);
router.delete("/delete-task/:id", taskController.deleteTask);
router.patch("/edit-task/:id", taskController.editTask);
router.get("/single-task/:id", taskController.singleTask);
router.patch("/complete-task/:id", taskController.completeTask);
// router.post("/today-task", taskController.todayTask);

module.exports = router;
