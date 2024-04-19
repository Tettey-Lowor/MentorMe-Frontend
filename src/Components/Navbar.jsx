import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
    <a class="font-bolder text-xl tracking-tight" href="/Homepage">MENTORMATCH</a>
    <div class="flex items-center">
        <Link class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to={"/"}>Home</Link>
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/AllMentorsPage">Find a mentor</a>
        <Link class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to={"/Dashboard"}>Dashboard</Link>

        <div class="relative inline-block text-left">
    <div class="group">
        <button type="button"
            class="inline-flex justify-center items-center w-full px-4 py-2 text-sm font-medium text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
            Sign Up
            {/* <!-- Dropdown arrow --> */}
            <svg class="w-4 h-4 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 12l-5-5h10l-5 5z" />
            </svg>
        </button>
{/* 
        <!-- Dropdown menu --> */}
        <div
            class="absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
            <div class="py-1">
                <a href="MentorRegisterPage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">As a Mentor</a>
                <a href="/MenteeRegisterPage" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">As a Mentee</a>
               
            </div>
        </div>
    </div>
</div>
        
    </div>
</nav>
  )
}


