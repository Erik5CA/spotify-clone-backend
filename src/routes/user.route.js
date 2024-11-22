import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getAllUSers, getMessages } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", protectRoute, getAllUSers);
router.get("/messages/:userId", protectRoute, getMessages);

export default router;
