import React, { createContext, useState } from 'react'
import Left from '../left/Left'
import Right from '../right/Right'

export const UserContext = createContext();

const ChatArea = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <UserContext.Provider value={{ selectedUser, setSelectedUser }}>
        <div className="flex h-screen bg-black">
          <Left/>
          <Right/>
        </div>
      </UserContext.Provider>
    </div>
  )
}

export default ChatArea
