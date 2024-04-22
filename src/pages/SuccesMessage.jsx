import React from 'react'

import image1 from '../Assets/img.mentors/christina-wocintechchat-com-eF7HN40WbAQ-unsplash.jpg'
import { FooterLink } from 'flowbite-react';
import { Link } from 'react-router-dom';
import image2 from '../Assets/CV.jpg'




export default function SuccesMessage() {
  return (
    <>
    <div className='mt-4'>
    <div class="  bg-green-200 border-green-600 text-green-600 border-l-4 p-4" role="alert">
    <p class="font-bold">
        Signed up Successfully
    </p>
    <p>
        Congratulations, you can proceed to find your Mentor.
    </p>
</div>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"/>

<section class="flex flex-col flex-wrap pt-12">
  <div class="flex flex-row flex-wrap justify-center">
    <div class="flex justify-center text-center m-2 h-24 w-64">
      <div class="flex-shrink-0 rounded-full bg-gray-100 w-24 h-24 border border-blue-500 z-10">
        {/* <i class="fas fa-pump-soap fa-4x p-2 w-24 h-24 text-blue-500"></i> */}
       <img className='flex-shrink-0 rounded-full w-24 h-24' src={image1}/>
       
        {/* <p className='font-bolder text-wrap'>MENTORMATCH</p> */}
      </div>
     <Link to="/AllMentorsPage"> <button className='hover:bg-gray-700'>
     <div class="className='hover:bg-gray-700 flex flex-col text-left bg-indigo-900 text-white text-xs self-center pl-16 pr-4 py-2 -ml-12 rounded-r-full">
    
    <h3 class="text-lg font-bold">All Mentors</h3>
    <p class="font-bold w-64 h-12 text-xs overflow-y-hidden overflow-x-auto">Proceed to find a Mentor. Click here </p>
  </div></button></Link>
    </div>
  </div>
</section>
<section class="flex flex-col flex-wrap pt-12">
  <div class="flex flex-row flex-wrap justify-center">
    <div class="flex justify-center text-center m-2 h-24 w-64">
      <div class="flex-shrink-0 rounded-full bg-gray-100 w-24 h-24 border border-red-700 z-10">
        {/* <i class="fas fa-quote-left fa-4x p-2 w-24 h-24 text-red-700"></i> */}
        <img className='flex-shrink-0 rounded-full w-24 h-24' src={image2}/>
      </div>
    <Link to="/CVSample">  <div class="flex flex-col text-left bg-gray-900 text-white text-xs self-center pl-16 pr-4 py-2 -ml-12">
        <h3 class="font-bold text-lg">CV Template </h3>
        <p class="w-64 text-xs overflow-y-hidden overflow-x-auto">To help your professional journey we offer you a template to help you build your CV. This can be a good start!!!. Click here</p>
      </div></Link>
    </div>
  </div>
</section>

<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/js/all.min.js"></script>
</div>
</>
  )
}
