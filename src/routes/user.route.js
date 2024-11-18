import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllUSers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getAllUSers);
// TODO: get all messages

export default router;
