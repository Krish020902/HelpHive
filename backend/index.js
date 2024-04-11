const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("message", (message) => {
    console.log("Message received:", message);
    io.emit("message", message); // Broadcast the message to all connected clients
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

const PORT = 3000; // Or any other port you prefer
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
