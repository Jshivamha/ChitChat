import React from 'react'
import ChatUser from './ChatUser'
import Messages from './Messages'
import MessageSendArea from './MessageSendArea'

const Right = () => {
  return (
    <div className="flex-1 bg-black border-l border-white/20 flex flex-col">
      <ChatUser />
      <div className="flex-1 flex flex-col min-h-0">
        <Messages/>
        <MessageSendArea/>
      </div>
    </div>
  )
}

export default Right
