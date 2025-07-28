import React from 'react'
import Left from '../left/Left'
import Right from '../right/Right'

const ChatArea = () => {
  return (
    <div>
      <div className="flex h-screen bg-black">
        <Left/>
        <Right/>
    </div>
    </div>
  )
}

export default ChatArea
