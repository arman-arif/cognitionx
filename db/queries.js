import connectMongoDB from "./connect";
import Conversation from "./models/Conversation";
import Message from "./models/Message";
import User from "./models/User";

await connectMongoDB();

export async function getConversations(userId) {
  const conversations = await Conversation.find({ user: userId }).sort({
    updatedAt: -1,
  });

  return conversations;
}

export async function getConversationById(conversationId) {
  const conversation = await Conversation.findById(conversationId);

  return conversation;
}

export async function createConversation({ userId, name, model }) {
  const data = { name, user: userId, model };
  const conversation = await new Conversation(data).save();

  return conversation;
}

export async function updateConversation(conversationId, data) {
  const conversation = await getConversationById(conversationId);

  if (!conversation) {
    throw new Error("Conversation not found");
  }

  conversation.updateOne(data);

  return conversation;
}

export async function getMessages(conversationId) {
  const messages = await Message.find({ conversation: conversationId }).sort({
    sequence: -1,
  });

  return messages;
}

export async function createMessage({
  conversationId,
  content,
  role,
  contentType,
  metadata,
}) {
  const data = {
    conversation: conversationId,
    content,
    role,
    contentType,
    metadata,
  };
  const message = new Message(data).save();

  return message;
}

export async function getUserByEmail(email) {
  const user = await User.findOne({ email });

  return user;
}

export async function createUser({ name, email, password }) {
  const data = { name, email, password };
  const user = await new User(data).save();

  return user;
}
