import React from 'react'
import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className="p-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <CiSearch className="h-5 w-5 text-white/60" />
        </div>
        <input 
          type="search" 
          placeholder="Search conversations..." 
          className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
        />
      </div>
    </div>
  )
}

export default Search
