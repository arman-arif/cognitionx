import { createConversation, getConversations } from "@/db/queries";

export async function GET(request, { params }) {
  try {
    const conversations = await getConversations("68864a9d8cf331e68686b2e0");

    return Response.json({
      conversations,
    });
  } catch (e) {
    return Response.json({
      message: e.message,
    });
  }
}

export async function POST() {
  try {
    const record = await createConversation({
      name: "New Conversation",
      userId: "68864a9d8cf331e68686b2e0",
      model: "gemini-2.5-flash",
    });

    console.log(record.id);

    return Response.json({
      conversation: record,
    });
  } catch (e) {
    return Response.json({
      message: e.message,
    });
  }
}
