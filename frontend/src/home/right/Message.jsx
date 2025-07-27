import React from "react";
import { messages } from "./Messages";

const Message = () => {
  return (
    <div className="space-y-4">
      {messages.map((msg, index) => (
        <div key={index} className={`flex animate-fade-in`} style={{ animationDelay: `${index * 0.1}s` }}>
          <div className={`flex items-end gap-2 max-w-[70%] ${msg.sender === 'me' ? 'flex-row-reverse' : 'flex-row'}`}>
            {/* Avatar for other messages */}
            {msg.sender === 'other' && (
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-white/30">
                <img 
                  src={msg.avatar} 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            {/* Message bubble */}
            <div className={`relative px-4 py-3 rounded-2xl message-bubble hover-lift ${
              msg.sender === 'me' 
                ? 'bg-white text-black shadow-lg' 
                : 'bg-white/10 border border-white/20 text-white shadow-lg'
            }`}>
              <p className="text-sm leading-relaxed">{msg.text}</p>
              
              {/* Time stamp */}
              <div className={`text-xs mt-1 ${
                msg.sender === 'me' ? 'text-black/60' : 'text-white/50'
              }`}>
                {msg.time}
              </div>
              
              {/* Message tail */}
              <div className={`absolute top-3 w-3 h-3 ${
                msg.sender === 'me' 
                  ? 'right-[-6px] bg-white rotate-45' 
                  : 'left-[-6px] bg-white/10 border-l border-b border-white/20 rotate-45'
              }`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Message;
