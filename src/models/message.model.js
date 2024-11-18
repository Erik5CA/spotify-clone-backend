import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      // Clerk user ID
      type: String,
      required: true,
    },
    receiverId: {
      // Clerk user ID
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
); // Adds createdAt and updatedAt fields

export const Message = mongoose.model("Message", messageSchema);
