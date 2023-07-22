require("./db/connection");
const express = require("express");
const app = express();
const tasks = require("./routes/task-routes");
const connectDB = require("./db/connection");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

//routes

app.use("/api/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

// app.get("/api/tasks"); get all tasks

// app.post("/api/tasks"); create task

// app.get("/api/tasks/:id"); get single task

// app.patch("api/tasks/:id"); update task

// app.delete("/api/tasks/:id"); delete task

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
