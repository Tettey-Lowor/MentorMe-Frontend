import React from 'react'
import image1 from '../Assets/DAngelo.jpg'

import { IoSettings } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";
import { TbListDetails } from "react-icons/tb";
import { AiFillSchedule } from "react-icons/ai";
import { IoHome } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoLogOut } from "react-icons/io5";
import { Link } from 'react-router-dom';

export default function SideBar() {
  return (
    <div class="hidden md:flex flex-col w-64 bg-gray-800 pb-32">
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

       <Link to='/' class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">  <IoHome className='mr-2'  />
                Home</Link> 
                
            <a href="/DashBoard" class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Dashboard
            </a>
            
            <Link to='/MentorProfileDasBoard' class="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700" ><CgProfile className='mr-2' />
                Profile</Link>
        
            
            

            <Link to='/Messages' className='flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700'> <SiGooglemessages className='mr-2' />
                Messages</Link>
            
            {/* <a href="/MentorProfileDasboard" class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M6 18L18 6M6 6l12 12" />
                </svg>
                Profile
            </a> */}
            <Link to='/MenteesDetails' class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700'><TbListDetails className='mr-2" >
            <TbListDetails className= 'mr-2'/>  Mentee Details </Link> 

            < Link to='/Calender' class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"> <AiFillSchedule className='mr-2' />
                Schedule
            </Link>

           <Link to='/LogoutPage' class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"><IoLogOut className='mr-2' /> 
                Logout</Link>

                <Link to='/SettingsPage' class="flex items-center px-4 py-2 mt-2 text-gray-100 hover:bg-gray-700"> <IoSettings className='mr-2' />
                Settings</Link> 
            
           
        </nav>
    </div>
</div>
  )
}
