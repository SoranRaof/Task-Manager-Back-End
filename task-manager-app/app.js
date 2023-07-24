const express = require("express");
const cors = require("cors");
const tasks = require("./routes/task-routes");
const connectDB = require("./db/connection");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// Set up task-related routes
app.use("/api/tasks", tasks);

app.use(notFound);
app.use(errorHandlerMiddleware);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
