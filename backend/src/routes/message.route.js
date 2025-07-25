import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {  getUsersForSidebar,getMessages,sendMessage } from "../controllers/message.controller.js";

const msgRouter = express.Router();

msgRouter.get("/users", protectRoute, getUsersForSidebar);
msgRouter.get("/:id", protectRoute, getMessages);
msgRouter.post("/send/:id", protectRoute, sendMessage);

export default msgRouter;
