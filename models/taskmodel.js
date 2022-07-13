const mongoose = require("mongoose");
let TaskSchema = mongoose.Schema({
  taskDescription: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    default: "pending",
  },
});
const TaskModel = mongoose.model("task", TaskSchema);
module.exports = TaskModel;
