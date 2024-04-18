import React from 'react'

export default function Steps() {
  return (
    <div class="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between">

    <div class="text-center">
        <p class="mt-6 mb-6GF text-4xl sm:text-5xl leading-normal font-extrabold leading-7 text-black-500 font-regular">
            STEPS
        </p>
        <h3 class="text-2xl sm:text-3xl  tracking-tight text-gray-900">
        Follow these three simple steps <span class="text-indigo-600"> to get started with Long Term Mentorship</span>
        </h3>

    </div>

    <div class="mt-20">
        <ul class="md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10">

            <li class=" bg-gray-100 p-5 pb-10 text-center">
                <div class="flex flex-col items-center">
                    <div class="flex-shrink-0 relative top-0 -mt-16">
                        <div
                            class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-900 text-white border-4 border-white text-xl font-semibold">
                            1
                        </div>
                    </div>
                    <div class="mt-4">
                        <h4 class="text-lg leading-6 font-semibold text-gray-900">Find your ideal Mentor</h4>
                        <p class="mt-2 text-base leading-6 text-gray-500 mb-4">
                            Browse through a list of mentors.
                        </p>
                        <a href=""
    class="mb-4 animate-bounce focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
    <span class="ml-2 ">Find a mentor</span>
</a>
                    </div>
                </div>
            </li>
            <li class=" bg-gray-100 p-5 pb-10 text-center">
                <div class="flex flex-col items-center">
                    <div class="flex-shrink-0 relative top-0 -mt-16">
                        <div
                            class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-900 text-white border-4 border-white text-xl font-semibold">
                            2
                        </div>
                    </div>
                    <div class="mt-4">
                        <h4 class="text-lg leading-6 font-semibold text-gray-900">Book an Appointment </h4>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                            Go through your mentor's Schedule and book your first meeting.
                        </p>
                        <a href=""
    class="mb-4  focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
    <span class="ml-2 ">Book a session </span>
</a>
                    </div>
                </div>
            </li>
            <li class=" bg-gray-100 p-5 pb-10 text-center">
                <div class="flex flex-col items-center">
                    <div class="flex-shrink-0 relative top-0 -mt-16">
                        <div
                            class="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-900 text-white border-4 border-white text-xl font-semibold">
                            3
                        </div>
                    </div>
                    <div class="mt-4">
                        <h4 class="text-lg leading-6 font-semibold text-gray-900">Start your long-term relationship</h4>
                        <p class="mt-2 text-base leading-6 text-gray-500">
                            Well done!!! Get started with your mentorship in the right direction 
                            <a href="/MenteeRegisterPage"
    class="mb-4 focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
    <span class="ml-2 ">Start Now</span>
</a>
                        </p>
                    </div>
                </div>
            </li>

        </ul>
    </div>

</div>
  )
}
