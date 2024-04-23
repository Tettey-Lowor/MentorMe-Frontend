import React from 'react'
import { IoSettings } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";
import { AiFillSchedule } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import image1 from '../Assets/DAngelo.jpg'


export default function FirstDashBoard() {
  return (
    <>

 
    <div class="flex h-screen bg-gray-100">
   
    <div class="hidden md:flex flex-col w-64 bg-gray-800">
       {/* <div class="flex items-center justify-center h-16 bg-gray-900">
           <span class="text-white font-bold uppercase">Sidebar</span>
       </div> */}
        <div class="flex flex-wrap items-center justify-center gap-2 mt-10 mb-6">
       <div class="h-10 w-10">
           <img class="h-full w-full rounded-full object-cover object-center ring ring-white" src={image1} alt="" />
       </div>
       
       <div>
           <div class="text-sm font-medium text-white">Steven Jobs</div>
           <div class="text-xs text-white">Joined in April 2007</div>
       </div>
   </div>
   
       <div class="flex flex-col flex-1 overflow-y-auto">
           <nav class="flex-1 px-2 py-4 bg-gray-800">
   
           <a href="/" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
               <IoHome className='mr-2'  />
                   Home
               </a>
               <a href="#" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M4 6h16M4 12h16M4 18h16" />
                   </svg>
                   Dashboard
               </a>
               <a href="/MentorProfileDasBoard" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
               <CgProfile className='mr-2' />
                   Profile
               </a>
   
               <a href="/Messages" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                   
                   <SiGooglemessages className='mr-2' />
                   Messages
               </a>
               
               <a href="/MenteesDetails" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                   <TbListDetails className='mr-2' />
                   Mentee Details
               </a>
               <a href="/Calender" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
               <AiFillSchedule className='mr-2' />
                   Schedule
               </a>
               <a href="SettingsPage" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
               <IoSettings className='mr-2' />
                   Settings
               </a>
              
           </nav>
       </div>
   </div>
   
   
   <div class="flex flex-col flex-1 overflow-y-auto">
       <div class="flex items-center justify-between h-16 bg-white border-b border-gray-200">
           <div class="flex items-center px-4">
               <button class="text-gray-500 focus:outline-none focus:text-gray-700">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M4 6h16M4 12h16M4 18h16" />
                   </svg>
               </button>
               <input class="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search"/>
           </div>
           <div class="flex items-center pr-4">
   
               <button
                   class="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                           d="M12 19l-7-7 7-7m5 14l7-7-7-7" />
                   </svg>
               </button>
           </div>
       </div>
       <div class="p-4">
           <h1 class="text-2xl font-bold">Welcome to your dashboard!</h1>
           <h1 class="text-2xl font-bold">Let's get you Started as a Mentor. Please provide your details</h1>


           
       </div>
   </div>
   
   </div>
       </>
  )
}
