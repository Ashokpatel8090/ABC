import React, { useState } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const ChatBotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Welcome to MediCAPS — your AI Health Companion! How can I assist you today?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [...prev, { type: "user", text: input }]);
      setInput("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: "Thank you for your message! How can I help you further?" },
        ]);
      }, 1000);
    }
  };

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 font-sans ${
        isOpen ? "w-full max-w-sm md:w-96 h-[calc(100vh-100px)] md:h-[500px]" : "w-16 h-16"
      }`}
    >
      {isOpen ? (
        <div className="bg-white rounded-xl shadow-xl flex flex-col h-full overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-[#19c1aa] text-white p-4 flex justify-between items-center rounded-t-xl">
            <div className="flex items-center space-x-3">
              <div className="bg-white text-[#19c1aa] p-1 rounded-full">
                <SmartToyIcon fontSize="medium" />
              </div>
              <div>
                <p className="font-bold text-lg">MediCAPS Assistant</p>
                <p className="text-sm text-white/90">Your smart AI health guide</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 focus:outline-none"
              aria-label="Close Chatbot"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.type === "user"
                      ? "bg-[#d7f2ef] text-[#00332e]"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 flex items-center bg-white">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#19c1aa]"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="ml-3 bg-[#19c1aa] hover:bg-[#14a393] text-white px-5 py-3 rounded-full font-semibold transition duration-300 shadow-md"
            >
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#19c1aa] hover:bg-[#14a393] text-white rounded-full p-4 shadow-lg transition duration-300 flex items-center justify-center w-16 h-16 cursor-pointer"
          aria-label="Open Chat"
        >
          <SmartToyIcon fontSize="medium" />
        </button>
      )}
    </div>
  );
};

export default ChatBotWidget;
