const express = require("express");
const cors = require("cors");
require('./config/db')
const userRouter = require("./routes/users.route");
const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route Not Found || Bad url Request",
  });
});

//server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message || "Internal error",
  });
});
module.exports = app;
