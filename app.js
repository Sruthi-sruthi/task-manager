const cors = require("cors");
const express = require("express");
const app = express();
const connectDB = require("./config/config");

app.use(cors());
// work:req.body
app.use(express.urlencoded({ extended: false }));
// working json data
app.use(express.json());
// public folder =>root(.index.html)
app.use(express.static("./public"));
// export router from task.js
const taskRouter = require("./routes/task");
app.use("/api/v1", taskRouter);

const port = 3000;
app.listen(port, (error) => {
  if (error) {
    console.log(error);
  } else {
    connectDB();
    console.log("server listening to port", port);
  }
});
