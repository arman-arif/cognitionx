import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      minlength: [2, "Name must be at least 2 characters"],
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    model: {
      type: String,
      required: [true, "Model is required"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "User reference is required"],
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Conversation =
  mongoose.models.Conversations ||
  mongoose.model("Conversations", conversationSchema);

export default Conversation;
