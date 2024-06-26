import React from 'react'
import SideBar from './SideBar'

export default function Messages() {
  return (

  <div className='flex '>
    <SideBar/>
      <div class="w-full max-h-full pb-60 py-10 flex flex-col gap-4 items-center justify-center bg-gray-900 dark:bg-white">

<div
    class="md:text-4xl sm:text-3xl xs:text-2xl text-center font-serif font-extrabold border-b-2 dark:border-blue-500 rounded-b-md mb-6 border-yellow-500 text-white dark:text-black">
    Message Notifications</div>

{/* <!-- 1 --> */}
<div
    class="sm:w-[70%] xs:w-[94%] mx-auto dark:bg-gray-300 bg-gray-700 p-4 rounded-md flex sm:gap-4 xs:gap-2 items-center justify-center">
    <img src="https://lh3.googleusercontent.com/a/ACg8ocIexhmmTS8LcwWo1fPGY5Fl3KXpd-JuBE_Gj56P3rUR2g=s96-c" alt="profile" class="w-[5rem] object-cover h-[5rem] outline outline-2 outline-blue-400 dark:outline-teal-400/20 rounded-full" />
    <div class="w-[80%] flex flex-col gap-1">
        <div class="text-lg font-semibold font-serif text-white dark:text-black">Samuel Abera</div>
        <p class="text-sm dark:text-gray-600 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore reiciendis earum quasi</p>
        <p class="text-[12px] text-semibold dark:text-gray-700 text-gray-400 text-right">a few moments ago</p>
    </div>
</div>

{/* <!-- 2 --> */}
<div
    class="sm:w-[70%] xs:w-[94%] mx-auto dark:bg-gray-300 bg-gray-700 p-4 rounded-md flex sm:gap-4 xs:gap-2 items-center justify-center">
    <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8cGVvcGxlfGVufDB8MHx8fDE3MTExMTEzODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="profile" class="w-[5rem] object-cover h-[5rem] outline outline-2 outline-blue-400 dark:outline-sky-700/40 rounded-full" />
    <div class="w-[80%] flex flex-col gap-1">
        <div class="text-lg font-semibold font-serif text-white dark:text-black">Sammy Tg</div>
        <p class="text-sm dark:text-gray-600 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore reiciendis earum quasi</p>
        <p class="text-[12px] text-semibold dark:text-gray-700 text-gray-400 text-right">7 minuts ago</p>
    </div>
</div>

{/* <!-- 3 --> */}
<div
    class="sm:w-[70%] xs:w-[94%] mx-auto dark:bg-gray-300 bg-gray-700 p-4 rounded-md flex sm:gap-4 xs:gap-2 items-center justify-center">
    <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw3fHxwZW9wbGV8ZW58MHwwfHx8MTcxMTExMTM4N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="profile" class="w-[5rem] object-cover h-[5rem] outline outline-2 outline-blue-400 dark:outline-purple-700/30 rounded-full" />
    <div class="w-[80%] flex flex-col gap-1">
        <div class="text-lg font-semibold font-serif text-white dark:text-black">Sammy Ab</div>
        <p class="text-sm dark:text-gray-600 text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore reiciendis earum quasi</p>
        <p class="text-[12px] text-semibold dark:text-gray-700 text-gray-400 text-right">2 days ago</p>
    </div>
</div>
</div>
  </div>
  )
}
