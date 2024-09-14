import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    console.log("Initializing Socket.io");

    const io = new Server(res.socket.server, {
      path: "http://localhost:3000/chat",
    });

    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("A user connected", socket.id);

      socket.on("message", (msg) => {
        console.log("Received message:", msg);
        io.emit("message", msg);
      });

      socket.on("disconnect", () => {
        console.log("A user disconnected", socket.id);
      });
    });
  } else {
    console.log("Socket.io server is already running");
  }
  res.end();
}
