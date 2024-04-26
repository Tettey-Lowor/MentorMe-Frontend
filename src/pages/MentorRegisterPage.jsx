import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

export default function MentorRegisterPage() {
  return (
    <>
    <Navbar/>
  <div class="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
  <h1 class="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8"> MENTORMATCH</h1>
<h1 class="text-xl font-bold text-center text-gray-700 dark:text-gray-200 mb-8">Sign up and Let's get you Started as a Mentor</h1>

  <form action="#" class="w-full flex flex-col gap-4">
    <div class="flex items-start flex-col justify-start">
      <label for="firstName" class="text-sm text-gray-700 dark:text-gray-200 mr-2">First Name:</label>
      <input type="text" id="firstName" name="firstName" class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
    </div>

    <div class="flex items-start flex-col justify-start">
      <label for="lastName" class="text-sm text-gray-700 dark:text-gray-200 mr-2">Last Name:</label>
      <input type="text" id="lastName" name="lastName" class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
    </div>

    

    <div class="flex items-start flex-col justify-start">
      <label for="email" class="text-sm text-gray-700 dark:text-gray-200 mr-2">Email:</label>
      <input type="email" id="email" name="email" class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
    </div>

    <div class="flex items-start flex-col justify-start">
      <label for="confirmPassword" class="text-sm text-gray-700 dark:text-gray-200 mr-2">Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword" class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
    </div>

    
    

    <div class="flex items-start flex-col justify-start">
      <label for="email" class="text-sm text-gray-700 dark:text-gray-200 mr-2">Please tell your specilization/Expertise. eg. Frontend Development</label>
      <input type="email" id="email" name="email" class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
    </div>

    <div class="flex items-start flex-col justify-start">
      <label for="availability" class="text-sm text-gray-700 dark:text-gray-200 mr-2">Please specify your availability to guide your mentees in booking appointments. </label>
      <input type="email" id="email" name="eg. Tuesdays and Thursdays 8-12pm" placeholder='"eg. Tuesdays and Thursdays 8-12pm"' class="w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
    </div>

    <Link to="/FirstDashBoard"><button type="submit" class="bg-blue-500 w-full hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Register</button></Link>
  </form>

  <div class="mt-4 text-center">
    <span class="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
    <a href="/MentorLogin" class="text-blue-500 hover:text-blue-600">Login</a>
  </div>
  </div>
  </>
  )
}
