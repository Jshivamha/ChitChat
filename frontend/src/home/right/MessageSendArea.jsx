import React from "react";
import { IoSend } from "react-icons/io5";

const MessageSendArea = () => {
  return (
    <div className="p-6 border-t border-white/20 bg-white/5">
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <input 
            type="text" 
            placeholder="Type a message..." 
            className="w-full pl-4 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200">
            <IoSend className="w-5 h-5 text-white/60" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MessageSendArea;
