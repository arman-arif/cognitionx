import { MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LeftSidebar({ children }) {
  return (
    <div className="w-64 bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-white rounded-full" />
          <div className="w-2 h-2 bg-white rounded-full" />
          <span className="font-semibold text-sm">CognitionX</span>
        </div>
      </div>
      {/* Navigation Menu */}
      <nav className="flex-1 p-4 space-y-2  overflow-y-auto">
        <div className="space-y-1">
          <Link
            href="/"
            className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
          >
            <MessageCircleIcon className="w-4 h-4" />
            <span className="text-sm">Create Chat</span>
          </Link>
        </div>
        {children}
      </nav>
      {/* Footer */}
      <div className="p-4 border-t border-gray-700 mt-auto">
        <div className="text-center space-y-2">
          <span className="text-xs text-gray-400">Powered by</span>
          <div className="flex items-center justify-center space-x-2">
            <Image
              src="/assets/logo.svg"
              alt="Logo"
              className="h-10"
              height={40}
              width={106}
            />
          </div>
          <p className="text-xs text-gray-500">© 2025 All rights reserved</p>
        </div>
      </div>
    </div>
  );
}
