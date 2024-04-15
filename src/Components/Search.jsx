import React from 'react'

export default function Search() {
  return (
    <div class="bg-gray-400 dark:bg-gray-800 h-screen w-screen flex justify-center items-center">
    <form action="/search" class="max-w-[480px] w-full px-4">
        <div class="relative">
            <input type="text" name="q" class="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200" placeholder="search"/>
            <button type="submit">
               
            </button>
        </div>
    </form>
</div>
  )
}
