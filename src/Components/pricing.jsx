import React from 'react'
import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <div class="bg-indigo-900 px-4 py-16 min-h-screen">
    <div aria-hidden="true" class="absolute inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20">
      <div class="blur-[106px] h-56 bg-gradient-to-br to-purple-400 from-blue-700"></div>
      <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-indigo-600"></div>
    </div>
    <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <div class="mb-10 space-y-4 px-6 md:px-0">
        <h2 class="text-center text-2xl font-bold text-white sm:text-3xl md:text-4xl">Pricing</h2>
      </div>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <div
          class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
          <h2 class="text-lg sm:text-xl font-medium text-white mb-2">Starter</h2>
          <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
            <span class="text-3xl sm:text-4xl font-bold text-white">$19</span> / Month
          </p>
          <ul class="list-none list-inside mb-6 text-center text-gray-300">
            <li class="font-bold text-orange-600">1-on-1</li>
            <li>Custom Domain</li>
            <li>Beginners</li>
            <li>Limited Support</li>
          </ul>
          <Link to='/MenteeRegisterPage'  class="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            href="/MenteeRegisterPage"> <span class="relative text-sm font-semibold text-black">Get Started</span></Link>
        </div>
        <div
          class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
          <h2 class="text-lg sm:text-xl font-medium text-white mb-2">Pro</h2>
          <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
            <span class="text-3xl sm:text-4xl font-bold text-white">$49</span> / Month
          </p>
          <ul class="list-none list-inside mb-6 text-center text-gray-300">
            <li class="font-bold text-orange-600">Group Mentorship</li>
            <li>Custom Domain &amp; Subdomain</li>
            <li>Advanced</li>
            <li>24/7 Support</li>
          </ul>
          <Link to='/MenteeRegisterPage'  class="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            href="/MenteeRegisterPage"> <span class="relative text-sm font-semibold text-black">Get Started</span></Link>
        </div>
        <div
          class="flex flex-col items-center aspect-auto p-4 sm:p-8 border rounded-3xl bg-gray-800 border-gray-700 shadow-gray-600/10 shadow-none m-2 flex-1 max-w-md">
          <h2 class="text-lg sm:text-xl font-medium text-white mb-2">Professional</h2>
          <p class="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-400">
            <span class="text-3xl sm:text-4xl font-bold text-white">$99</span> / Month
          </p>
          <ul class="list-none list-inside mb-6 text-center text-gray-300">
            <li class="font-bold text-orange-600">Meet with Snr Devs</li>
            <li>Custom Domain &amp; Subdomain</li>
            <li>FullStack Developers</li>
            <li>Premium Support</li>
          </ul>
          <Link to='/MenteeRegisterPage'  class="lemonsqueezy-button relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
            href="/MenteeRegisterPage"> <span class="relative text-sm font-semibold text-black">Get Started</span></Link>
        </div>
      </div>
    </div>
  </div>
  )
}
