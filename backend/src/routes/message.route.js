import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {  getUsersForSidebar,getMessages,sendMessage } from "../controllers/message.controller.js";

const msgRouter = express.Router();

msgRouter.get("/users", protectRoute, getUsersForSidebar);
msgRouter.get("/:id", protectRoute, getMessages);
msgRouter.post("/send/:id", protectRoute, sendMessage);

// msgRouter.get("/users", protectRoute, getUsersForSidebar);
// msgRouter.get("/messages/:userId", protectRoute, getMessages);  // Changed from :id to :userId
// msgRouter.post("/send/:receiverId", protectRoute, sendMessage); // Changed from :id to :receiverId

export default msgRouter;
