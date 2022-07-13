const TaskModel = require("../models/taskmodel");

const sendHi = (req, res) => {
  res.send("hy");
};
const name = (req, res) => {
  res.send("sruthi");
};

const createTask = async (req, res) => {
  //  create a task in the db using the data from req.body
  await TaskModel.create(req.body);
  res.json({
    success: true,
    message: "successfully created",
  });
};

const getTask = async (req, res) => {
  let tasks = await TaskModel.find({});
  res.json({
    tasks,
    success: true,
    message: "successfully collected all task",
  });
};

const deleteTask = async (req, res) => {
  await TaskModel.findOneAndDelete({ _id: req.params.id });
  res.json({
    success: true,
    message: "successfully deleted task",
  });
};

const editTask = async (req, res) => {
  await TaskModel.findOneAndUpdate({ _id: req.params.id }, req.body);
  res.json({
    success: true,
    message: "successfully updated",
  });
};

const singleTask = async (req, res) => {
  console.log(req.params.id);
  let singletask = await TaskModel.findOne({ _id: req.params.id });
  res.json({
    success: true,
    message: "successfully collected task",
    singletask,
  });
};

const completeTask = async (req, res) => {
  await TaskModel.findOneAndUpdate(
    { _id: req.params.id },
    { status: "completed" }
  );
  res.json({
    success: true,
    message: "successfully completed",
  });
};

module.exports = {
  sendHi,
  name,
  createTask,
  getTask,
  deleteTask,
  editTask,
  singleTask,
  completeTask,
};
