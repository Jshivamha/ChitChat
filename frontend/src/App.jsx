import React from 'react'
import Left from './home/left/Left'
import Right from './home/right/Right'

const App = () => {
  return (
    <div className='flex h-screen bg-black'>
      <Left/>
      <Right/>
    </div>
  )
}

export default App
