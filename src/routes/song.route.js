import { Router } from "express";
import User from "../models/user.model.js";

const router = Router();

router.post("/callback", async (req, res) => {
  try {
    const { id, firstName, lastName, imageUrl } = req.body;
    // check if user exists
    const user = await User.findOne({ clerkId: id });
    if (!user) {
      // create user
      const newUser = new User({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageUrl,
      });
      await newUser.save();
    }
    res.status(200).json({ success: true });
  } catch (error) {
    console.log("Error in callback: ", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

export default router;
