import LeftSidebar from "@/components/LeftSidebar";
import ConversationList from "@/components/list/ConversationList";

export default function ChatLayout({ children }) {
  return (
    <>
      <LeftSidebar>
        <ConversationList />
      </LeftSidebar>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">{children}</div>
    </>
  );
}
