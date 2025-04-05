import React from 'react'
import Sidebar from './Sidebar';
import Feed from './Feed';
import Suggestion from './Suggestion'
function App() {
  return (
    <div class="flex  col gap-2 h-screen bg-white-500">
      <div class="w-1/4 fixed left-0 top-0 h-screen bg-blue-300 p-4">
        <Sidebar />
      </div>
      <div class="w-1/2 lg:w-1/2 ml-[25%] p-4 overflow-y-auto style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}">
        <Feed />
      </div>
      <div class="w-1/3 p-4 overflow-y-auto style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}">
        <Suggestion />
      </div>
    </div>
  )
}

export default App