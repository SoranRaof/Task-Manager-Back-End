const express = require("express");
const app = express();
const tasks = require("./routes/tasks");

//middleware
app.use(express.json());

//routes
app.get("/home", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/tasks", tasks);

app.get("/api/tasks"); //get all tasks

app.post("/api/tasks"); //create task

app.get("/api/tasks/:id"); //get single task

app.patch("api/tasks/:id"); //update task

app.delete("/api/tasks/:id"); //delete task

const port = 3000;

app.listen(port, console.log(`server is listening on port ${port}...`));
