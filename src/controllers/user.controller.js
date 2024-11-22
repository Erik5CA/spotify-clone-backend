import { Message } from "../models/message.model.js";
import { User } from "../models/user.model.js";

export const getAllUSers = async (req, res, next) => {
  try {
    const currentUserId = req.auth.userId;
    const users = await User.find({ clerkId: { $ne: currentUserId } });
    res.status(200).json(users);
  } catch (error) {
    console.log("Error in getAllUser: ", error);
    next(error);
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const myId = req.auth.userId;
    const { userId } = req.params;
    const messages = await Message.find({
      $or: [
        { senderId: userId, receivedId: myId },
        { senderId: myId, receivedId: userId },
      ],
    }).sort({ createdAt: 1 });
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in getMessage: " + error);
    next(error);
  }
};
