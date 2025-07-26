import ChatInput from "@/components/ChatInput";
import CreateChatContent from "@/components/CreateChatContent";

export default function Home() {
  return (
    <>
      {/* Chat Content */}
      <CreateChatContent />

      {/* Input Area */}
      <ChatInput />
    </>
  );
}
