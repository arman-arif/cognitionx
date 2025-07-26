"use client";

import { EditIcon, MoreHorizontalIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";

export default function ChatHeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
        onClick={toggleDropdown}
      >
        <MoreHorizontalIcon className="w-5 h-5 text-gray-500 group-hover:text-gray-700" />
      </button>
      <div
        className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 ${
          !isOpen ? "hidden" : ""
        } z-20`}
      >
        <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
          <EditIcon className="w-4 h-4" />
          <span>Rename conversation</span>
        </button>
        <hr className="my-1 opacity-10" />
        <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2">
          <Trash2Icon className="w-4 h-4" />
          <span>Delete conversation</span>
        </button>
      </div>
    </div>
  );
}
