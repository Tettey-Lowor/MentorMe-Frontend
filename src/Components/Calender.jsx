import React from 'react'
import SideBar from './SideBar'

export default function Calender() {
  return (
    <>
    
    {/* // <!-- component --> */}
   
    <div className='flex gap-5'>
    <SideBar/>
    {/* <!-- component --> */}
{/* <style>
.date:after {
  content: "";
  position: absolute;
  border-top: 1px solid #e2e8f0;
  top: 12px;
  width: 150px;
}

.date:after {
  margin-left: 15px;
}
</style> */}
{/* <div class="flex w-full justify-center p-24 bg-gray-100"> */}
  <div class="bg-white rounded-lg w-2/3 lg:w-1/2 xl:w-1/3 p-4 shadow">
  <div>
      <span class="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">Mondays</span>
      <div class="flex mb-2">
     
        <div class="w-2/12">
          
          <span class="text-sm text-gray-600 block">8:00am</span>
          <span class="text-sm text-gray-600 block">8:15am</span>
        </div>
        <div class="w-1/12">
          <span class="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div class="w-9/12">
          <span class="text-sm font-semibold block">Mock Interview with Abdul-Aziz</span>
          <span class="text-sm font-semibold block">Email</span>
          <span class="text-sm">Zoom ID: 1134 11 1134</span>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-2/12">
          <span class="text-sm text-gray-600 block">10:am</span>
          <span class="text-sm text-gray-600 block">2:00pm</span>
        </div>
        <div class="w-1/12">
          <span class="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div class="w-9/12">
          <span class="text-sm font-semibold block">Core Development</span>
          <span class="text-sm">Joey, Matt, CJ and Vlad</span>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-2/12">
          <span class="text-sm text-gray-600 block">3:00pm</span>
          <span class="text-sm text-gray-600 block">3:30pm</span>
        </div>
        <div class="w-1/12">
          <span class="bg-indigo-600 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div class="w-9/12">
          <span class="text-sm font-semibold block">Teams with Ed Harris</span>
        </div>
      </div>
    </div>

  <div>
      <span class="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">Tuesdays</span>
      <div class="flex mb-2">
        <div class="w-2/12">
          <span class="text-sm text-gray-600 block">8:00am</span>
          <span class="text-sm text-gray-600 block">8:15am</span>
        </div>
        <div class="w-1/12">
          <span class="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div class="w-9/12">
          <span class="text-sm font-semibold block">Frontend Code Review </span>
          <span class="text-sm">Zoom ID: 1134 11 1134</span>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-2/12">
          <span class="text-sm text-gray-600 block">10:00am</span>
          <span class="text-sm text-gray-600 block">2:00pm</span>
        </div>
        <div class="w-1/12">
          <span class="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div class="w-9/12">
          <span class="text-sm font-semibold block">Frontend Development</span>
          <span class="text-sm">Joey, Matt, CJ and Vlad</span>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-2/12">
          <span class="text-sm text-gray-600 block">5:00pm</span>
          <span class="text-sm text-gray-600 block">5:30pm</span>
        </div>
        <div class="w-1/12">
          <span class="bg-indigo-600 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div class="w-9/12">
          <span class="text-sm font-semibold block">Zoom meeting with Sean</span>
        </div>
      </div>
    </div>

    <div>
      <span class="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">Wednesdays </span>
      <div class="flex mb-2">
        <div class="w-2/12">
          <span class="text-sm text-gray-600 block">8:00am</span>
          <span class="text-sm text-gray-600 block">8:15am</span>
        </div>
        <div class="w-1/12">
          <span class="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div class="w-9/12">
          <span class="text-sm font-semibold block">React JS Fundamentals</span>
          <span class="text-sm">Zoom ID: 1134 11 1134</span>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-2/12">
          <span class="text-sm text-gray-600 block">10:00am</span>
          <span class="text-sm text-gray-600 block">2:00pm</span>
        </div>
        <div class="w-1/12">
          <span class="bg-red-400 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div class="w-9/12">
          <span class="text-sm font-semibold block">Node js explanation</span>
          <span class="text-sm">Sarah, Jones, Paul and Larry</span>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-2/12">
          <span class="text-sm text-gray-600 block">3:00pm</span>
          <span class="text-sm text-gray-600 block">3:30pm</span>
        </div>
        <div class="w-1/12">
          <span class="bg-indigo-600 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div class="w-9/12">
          <span class="text-sm font-semibold block">Interview Mackfelin</span>
        </div>
      </div>
    </div>
    <div>
      <span class="text-gray-900 relative inline-block date uppercase font-medium tracking-widest">Thursdays</span>
      <div class="flex mb-2">
        <div class="w-2/12">
          <span class="text-sm text-gray-600 block">2:00pm</span>
          <span class="text-sm text-gray-600 block">4:15pm</span>
        </div>
        <div class="w-1/12">
          <span class="bg-blue-400 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div class="w-9/12">
          <span class="text-sm font-semibold block">Scram Meeting</span>
          <span class="text-sm">Zoom ID: 1134 11 1134</span>
        </div>
      </div>
      <div class="flex mb-4">
        <div class="w-2/12">
          <span class="text-sm text-gray-600 block">6:00pm</span>
          <span class="text-sm text-gray-600 block">7:30pm</span>
        </div>
        <div class="w-1/12">
          <span class="bg-yellow-400 h-2 w-2 rounded-full block mt-2"></span>
        </div>
        <div class="w-9/12">
          <span class="text-sm font-semibold block">Dinner with Mom</span>
        </div>
      </div>
    </div>
    
  </div>
</div>
    {/* </div> */}
    </>
  )
}
