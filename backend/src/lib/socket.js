import { Server } from "socket.io";

const userSocketMap = {}; // { userId: socketId }
let io;

export const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: ["http://localhost:5173"],
      credentials: true,
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);

    const userId = socket.handshake?.query?.userId;

    if (userId) {
      userSocketMap[userId] = socket.id;
      console.log("User logged in:", userId);
    }

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);

      if (userId) {
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
      }
    });
  });
};

// Utility function to get socketId of any connected user
export const getReceiverSocketId = (userId) => {
  return userSocketMap[userId];
};

export { io };
