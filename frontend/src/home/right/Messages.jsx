import React from "react";
import Message from "./Message";

// Static messages array with more realistic data
export const messages = [
  { 
    text: "Hey! How's it going? I was thinking about our project...", 
    sender: "other",
    time: "10:30 AM",
    avatar: "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
  },
  { 
    text: "It's going grea Lorem ius doloribus itaque modi nemo  numquam eius accusantium corrupti vitae tempore ratione fugiat neque, mollitia aperiam nostrum. Debitis perferendis aperiam nihil  temporibus similique voluptate molestiae dolor tenetur eum saepe. Amet, sit consequatur tempora voluptate qui neque perferendis discussed.", 
    sender: "me",
    time: "10:32 AM"
  },
  { 
    text: "That's awesome! Can you show me what you've built so far?", 
    sender: "other",
    time: "10:33 AM",
    avatar: "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
  },
  { 
    text: "Sure! I'll send you a demo link in a few minutes.", 
    sender: "me",
    time: "10:35 AM"
  },
  { 
    text: "Perfect! Looking forward to seeing it. 🚀", 
    sender: "other",
    time: "10:36 AM",
    avatar: "https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
  }
];

const Messages = () => {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
