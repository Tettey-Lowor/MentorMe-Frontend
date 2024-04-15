import React from 'react'

export default function Navbar() {
  return (
    <nav class="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
    <a class="font-bolder text-xl tracking-tight" href="#">MENTORME</a>
    <div class="flex items-center">
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Find a mentor</a>
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Dashboard</a>
        <a class="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" href="#">Create Account/Sign In</a>
    </div>
</nav>
  )
}


