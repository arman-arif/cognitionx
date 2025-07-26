export default function HumanMessage() {
  return (
    <div className="flex flex-row-reverse justify-end items-start gap-3">
      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
        H
      </div>
      <div className="flex-1 flex flex-col items-end">
        <div className="bg-gray-100 rounded-2xl px-4 py-3 max-w-3xl">
          <p className="text-gray-800">
            What&apos;s the difference between machine learning and artificial
            intelligence?
          </p>
        </div>
        <span className="text-xs text-gray-500 mt-1 block">2:34 PM</span>
      </div>
    </div>
  );
}
