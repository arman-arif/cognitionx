"use client";

import { useEffect, useRef } from "react";

export default function ChatContent({ children }) {
  const containerRef = useRef(null);
  const bottomElemRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    //containerRef.current;
    scrollToBottom();
    //bottomElemRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <>
      <div
        className="flex-1 flex flex-col p-8 overflow-y-auto space-y-6"
        ref={containerRef}
      >
        {children}
        <div ref={bottomElemRef} />
      </div>
    </>
  );
}
