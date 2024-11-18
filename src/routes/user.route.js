import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User Route with get method");
});

export default router;
