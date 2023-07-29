//socket connection

var socket = io();

//event from client
let btn = document.getElementById("btn");
btn.onclick = function exec() {
  socket.emit("from_client");
};

socket.on("from_server", () => {
  console.log("collected a new event from the server");
  const div = document.createElement("div");
  div.innerText = "New event from server";

  document.body.appendChild(div);
});
