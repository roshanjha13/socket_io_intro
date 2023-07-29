const express = require("express");
const socketio = require("socket.io");

require("dotenv").config();

const app = express();
const http = require("http");
const server = http.createServer(app);
const io = socketio(server);

app.use("/", express.static(__dirname + "/public"));

const port = process.env.PORT;

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("from_client", () => {
    console.log("event coming from the client");
  });

  setInterval(() => {
    socket.emit("from_server");
  }, 2000);
});

server.listen(port, () => {
  console.log("server is connected");
});
