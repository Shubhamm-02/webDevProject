const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",  
    methods: ["GET", "POST"]
  },
  pingTimeout: 60000,
  pingInterval: 25000
});


app.use(express.static("public"));


io.on("connection", (socket) => {
  const clientId = socket.id;
  console.log(`A user connected with ID: ${clientId}`);

  socket.on("draw", (data) => {
    console.log(`Draw data received from ${clientId}:`, data);
    
    io.emit("draw", data);
    console.log(`Data broadcasted to all clients`);
  });

  
  socket.on("disconnect", () => {
    console.log(`User disconnected: ${clientId}`);
  });

  
  socket.on("clear", () => {
    console.log(`Clear command received from ${socket.id}`);
    io.emit("clear");
    console.log("Clear command broadcasted to all clients");
  });
});

const PORT = process.env.PORT || 3000;


server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
