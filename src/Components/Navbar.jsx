import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav class="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
    <a class="font-bolder text-xl tracking-tight" href="/Homepage">MENTORME</a>
    <div class="flex items-center">
        <Link class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to={"/"}>Home</Link>
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/AllMentorsPage">Find a mentor</a>
        <Link class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to={"/DashBoard"}>Dashboard</Link>
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="/MenteeRegisterPage">Sign up</a>
    </div>
</nav>
  )
}


