import AiResponse from "@/components/chat/AiResponse";
import ChatContent from "@/components/chat/ChatContent";
import ChatHeaderDropdown from "@/components/chat/ChatHeaderDropdown";
import HumanMessage from "@/components/chat/HumanMessage";
import ChatInput from "@/components/ChatInput";

function makeTitle(conversationId) {
  const title = conversationId.replaceAll("-", " ");
  return title.charAt(0).toUpperCase() + title.slice(1);
}

export async function generateMetadata({ params }, parent) {
  const parentTitle = (await parent).title;

  return {
    title: makeTitle(params.conversationId) + " - " + parentTitle.absolute,
  };
}

export default function Conversation({ params }) {
  return (
    <>
      {/* Chat Header */}
      <div className="px-8 py-4 border-b border-gray-200 bg-white sticky top-0 z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full" />
            <h1 className="text-lg font-semibold text-gray-800">
              {makeTitle(params.conversationId)}
            </h1>
          </div>
          <ChatHeaderDropdown />
        </div>
      </div>
      <ChatContent>
        <HumanMessage />
        <AiResponse />
        <HumanMessage />
        <AiResponse />
        <HumanMessage />
        <AiResponse />
        <HumanMessage />
        <AiResponse />
      </ChatContent>

      <ChatInput />
    </>
  );
}
