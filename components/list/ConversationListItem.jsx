"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import ListActions from "./ListActions";

export default function ConversationListItem({ title }) {
  const { conversationId } = useParams();

  const slug = title.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      href={`/conversation/${slug}`}
      className={`flex items-center justify-between space-x-3 px-2 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer group/list-item ${
        slug == conversationId ? "bg-gray-700" : ""
      }`}
    >
      <span className="text-sm text-zinc-300 truncate">{title}</span>
      <ListActions />
    </Link>
  );
}
