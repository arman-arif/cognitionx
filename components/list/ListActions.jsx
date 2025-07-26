"use client";

import {
  EllipsisVerticalIcon,
  Share2Icon,
  SquarePenIcon,
  Trash2Icon,
} from "lucide-react";

function ActionButton({ children, label, onClick, props }) {
  return (
    <button
      className="hover:bg-gray-600 flex gap-2 items-center text-white py-2 px-3 cursor-pointer w-full"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default function ListActions() {
  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <div className="group/actions relative">
      <button
        className="hover:bg-gray-700 p-1 rounded-md cursor-pointer focus-within:bg-gray-600 group-hover/list-item:visible invisible"
        onClick={handleClick}
      >
        <EllipsisVerticalIcon className="size-4" />
      </button>
      <div className="absolute top-full right-0 hidden group-focus-within/actions:flex flex-col z-10 bg-gray-700 py-1 rounded-md">
        <ActionButton onClick={handleClick}>
          <Share2Icon className="size-4" />
          <span>Share</span>
        </ActionButton>
        <ActionButton onClick={handleClick}>
          <SquarePenIcon className="size-4" />
          <span>Rename</span>
        </ActionButton>
        <ActionButton onClick={handleClick}>
          <Trash2Icon className="size-4" />
          <span>Delete</span>
        </ActionButton>
      </div>
    </div>
  );
}
