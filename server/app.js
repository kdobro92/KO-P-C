const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const http = require("http");
const https = require("https");
const path = require("path");
const db = require("./models");
const HTTP_PORT = process.env.HTTP_PORT || 4000;
const server = http.createServer(app);

// DB Connection

db.sequelize
  .sync()
  .then(() => {
    console.log("Connect DB Completed");
  })
  .catch(console.error);

// app setting
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS", "PUT"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("PROJECT SSRC");
});

// Router Collection

const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const boardsRouter = require("./routes/boards");
const commentsRouter = require("./routes/comments");

// express use Routers

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/boards", boardsRouter);
app.use("/comments", commentsRouter);
app.use("/images", express.static(path.join(__dirname, "images")));

server.listen(HTTP_PORT, () => {
  console.log(`HTTP Server running on port ${HTTP_PORT}`);
});
// Image AWS PORT 별도 설정 필요

module.exports = app;
