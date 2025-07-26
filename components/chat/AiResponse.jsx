export default function AiResponse() {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
        AI
      </div>
      <div className="flex-1">
        <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 max-w-3xl">
          <p className="text-gray-800 mb-3">
            Great question! Here&apos;s the key difference:
          </p>
          <p className="text-gray-800 mb-3">
            <strong>Artificial Intelligence (AI)</strong> is the broader concept
            of creating machines that can perform tasks that typically require
            human intelligence. It&apos;s like the umbrella term.
          </p>
          <p className="text-gray-800">
            <strong>Machine Learning (ML)</strong> is a subset of AI that
            focuses on algorithms that can learn and improve from data without
            being explicitly programmed for every scenario.
          </p>
        </div>
        <span className="text-xs text-gray-500 mt-1 block">2:35 PM</span>
      </div>
    </div>
  );
}
