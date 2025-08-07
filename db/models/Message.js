import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: [true, "Content is required"],
      trim: true,
    },
    role: {
      type: String,
      enum: ["user", "model"],
      required: [true, "Role is required"],
    },
    contentType: {
      type: String,
      enum: ["text", "image", "file", "code", "markdown"],
      default: "text",
    },
    conversation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: [true, "Conversation reference is required"],
    },
    sequence: {
      type: Number,
      default: 1,
    },
    metadata: {
      type: mongoose.Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

// Create indexes for better query performance
messageSchema.index({ conversation: 1, createdAt: -1 });

messageSchema.pre("save", async function (next) {
  if (this.isNew) {
    const lastMessage = await this.constructor
      .findOne({ conversation: this.conversation })
      .sort({ sequence: -1 });
    this.sequence = (lastMessage?.sequence || 0) + 1;
  }
  next();
});

const Message =
  mongoose.models.Messages || mongoose.model("Messages", messageSchema);

export default Message;
