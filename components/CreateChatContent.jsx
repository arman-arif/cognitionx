import { ZapIcon } from "lucide-react";

export default function CreateChatContent() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-8">
      {/* Avatar */}
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 mb-8 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 opacity-80"></div>
      </div>
      {/* Greeting */}
      <h1 className="text-4xl font-instrument font-semibold text-gray-800 mb-2">
        Hi there
      </h1>
      <h2 className="text-3xl font-instrument font-semibold text-gray-800 mb-6">
        How can I help you today?
      </h2>
      {/* Description */}
      <p className="text-gray-600 text-center max-w-md mb-8 leading-relaxed">
        I&apos;m a professional looking for an AI assistant that helps with
        their workflows, automates routine tasks, and gives valuable insights
        based on real-time data.
      </p>
      {/* Prompt Suggestions */}
      <div className="space-y-3 w-full max-w-2xl">
        <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left">
          <ZapIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          <span className="text-gray-700">
            It looks like you&apos;re writing an email, would you like help
            drafting it?
          </span>
        </button>
        <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left">
          <ZapIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          <span className="text-gray-700">
            Generate a report on customer feedback for the last 3 months.
          </span>
        </button>
        <button className="w-full flex items-center space-x-3 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer text-left">
          <ZapIcon className="w-5 h-5 text-yellow-500 flex-shrink-0" />
          <span className="text-gray-700">
            Analyze this month&apos;s sales performance
          </span>
        </button>
      </div>
    </div>
  );
}
