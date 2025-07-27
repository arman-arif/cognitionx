import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      min: 2,
      max: 100,
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
