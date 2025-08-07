import { createMessage, getConversationById, getMessages } from "@/db/queries";
import { sanitizeModel, sanitizeModelArray } from "@/lib/db-utils";

export async function GET(request, { params }) {
  const { conversationId } = params;
  const conversation = await getConversationById(conversationId);

  if (conversation) {
    return Response.json({ conversation: sanitizeModel(conversation) });
  }

  return Response.json({ message: "Conversation not found!" });
}

export async function POST(request, { params }) {
  const { conversationId } = params;
  const conversation = await getConversationById(conversationId);

  if (conversation) {
    await createMessage({
      conversationId,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      contentType: "text",
      role: "user",
    });

    await createMessage({
      conversationId,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui enim veritatis doloribus voluptatem illo repellat non voluptas nemo, modi aut deleniti itaque, obcaecati quod atque at tenetur veniam alias perspiciatis.",
      contentType: "text",
      role: "model",
    });

    const messages = await getMessages(conversationId);

    return Response.json({
      conversation: sanitizeModel(conversation),
      messages: sanitizeModelArray(messages),
    });
  }

  return Response.json({ message: "Conversation not found!" });
}
