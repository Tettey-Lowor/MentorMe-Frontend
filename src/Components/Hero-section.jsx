import React from 'react';
import { FaSearch } from "react-icons/fa";

export default function HeroSection() {
  return (
    <div class="dark:bg-gray-800">
    <div class="dark:bg-transparent">
        <div class="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
                <h1
                    class="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
                    Supercharge your career with
                    <span class="text-violet-800 dark:text-violet-500">LongTerm Mentorship</span>
                    designs.
                </h1>
                <p class="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
                Land your dream job, role, and company faster than ever with 1:1 long term mentorship..
                </p>
                
    <form action="/search" class="max-w-[480px] w-full px-4 mt-6">
        <div class="relative">
            <input type="text" name="q" class="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200" placeholder="search"/>
            <button type="submit">
               
            </button>
        </div>
    </form>

            </div>

            
    </div>
</div>

</div>
  )
}
