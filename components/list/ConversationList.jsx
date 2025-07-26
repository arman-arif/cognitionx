import ConversationListItem from "./ConversationListItem";

export default function ConversationList() {
  const list = [
    "Learning NLP vs LLM",
    "Microservice Data Orchestration",
    "Deep Cloning Alternatives",
    "AI Database Diagram Generation",
  ];

  return (
    <div className="pt-4 ">
      <span className="text-gray-500 text-xs uppercase font-semibold">
        Conversations
      </span>
      <div className="space-y-1  mt-3">
        {list.map((item) => (
          <ConversationListItem key={item} title={item} />
        ))}
      </div>
    </div>
  );
}
