import React from "react";
import Navbar from "../Components/Navbar";

export default function BookAppointmentPage() {
  return (
    <>
      <Navbar />
      <div class="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden px-4">
        <div class="text-2xl py-4 px-6 bg-indigo-900 text-white text-center font-bold uppercase">
          Book an Appointment with a Mentor
        </div>
        <form class="py-4 px-6" action="" method="POST"/>
          <div class="mb-4">
            <label class="block text-gray-700 py-4 px-4 font-bold mb-2" for="name">
              Name
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="email">
              Email
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="phone">
              Phone Number
            </label>
          </div>

          <button
            type="button"
            data-modal-target="timepicker-modal"
            data-modal-toggle="timepicker-modal"
            class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700"
          >
            <svg
              class="w4 h-4 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                clip-rule="evenodd"
              />
            </svg>
            Schedule appointment
          </button>

          <div
            id="timepicker-modal"
            tabindex="-1"
            aria-hidden="true"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div class="relative p-4 w-full max-w-[23rem] max-h-full">
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
                <div class="flex items-center justify-between p-4 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Schedule an appointment
                  </h3>

                  <div id="tooltip-timezone" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 max-w-sm text-xs font-normal text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
               Select a timezone that fits your location to accurately display time-related information.
               <div class="tooltip-arrow" data-popper-arrow></div>
            
         </div>
         
         <select id="timezones" name="timezone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option selected value>Choose a timezone</option>
            <option value="America/New_York">EST (Eastern Standard Time) - GMT-5 (New York)</option>
            <option value="America/Los_Angeles">PST (Pacific Standard Time) - GMT-8 (Los Angeles)</option>
            <option value="Europe/London">GMT (Greenwich Mean Time) - GMT+0 (London)</option>
            <option value="Europe/Paris">CET (Central European Time) - GMT+1 (Paris)</option>
            <option value="Asia/Tokyo">JST (Japan Standard Time) - GMT+9 (Tokyo)</option>
            <option value="Australia/Sydney">AEDT (Australian Eastern Daylight Time) - GMT+11 (Sydney)</option>
            <option value="Canada/Mountain">MST (Mountain Standard Time) - GMT-7 (Canada)</option>
            <option value="Canada/Central">CST (Central Standard Time) - GMT-6 (Canada)</option>
            <option value="Canada/Eastern">EST (Eastern Standard Time) - GMT-5 (Canada)</option>
            <option value="Europe/Berlin">CET (Central European Time) - GMT+1 (Berlin)</option>
            <option value="Asia/Dubai">GST (Gulf Standard Time) - GMT+4 (Dubai)</option>
            <option value="Asia/Singapore">SGT (Singapore Standard Time) - GMT+8 (Singapore)</option>
         </select>
      </div>

                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    data-modal-toggle="timepicker-modal"
                  >
                    <svg
                      class="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span class="sr-only">Close modal</span>
                  </button>
                </div>

                <div class="p-4 pt-0">
                  <div
                    inline-datepicker
                    datepicker-autoselect-today
                    class="mx-auto sm:mx-0 flex justify-center my-5 [&>div>div]:shadow-none [&>div>div]:bg-gray-50 [&_div>button]:bg-gray-50"
                  ></div>
                  <label class="text-sm font-medium text-gray-900 dark:text-white mb-2 block">
                    Pick your time
                  </label>
                  <ul id="timetable" class="grid w-full grid-cols-3 gap-2 mb-5">
                    <li>
                      <input
                        type="radio"
                        id="10-am"
                        value=""
                        class="hidden peer"
                        name="timetable"
                      />
                      <label
                        for="10-am"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        10:00 AM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="10-30-am"
                        value=""
                        class="hidden peer"
                        name="timetable"
                      />
                      <label
                        for="10-30-am"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        10:30 AM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="11-am"
                        value=""
                        class="hidden peer"
                        name="timetable"
                      />
                      <label
                        for="11-am"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        11:00 AM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="11-30-am"
                        value=""
                        class="hidden peer"
                        name="timetable"
                      />
                      <label
                        for="11-30-am"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        11:30 AM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="12-am"
                        value=""
                        class="hidden peer"
                        name="timetable"
                        checked
                      />
                      <label
                        for="12-am"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        12:00 AM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="12-30-pm"
                        value=""
                        class="hidden peer"
                        name="timetable"
                      />
                      <label
                        for="12-30-pm"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        12:30 PM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="1-pm"
                        value=""
                        class="hidden peer"
                        name="timetable"
                      />
                      <label
                        for="1-pm"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        01:00 PM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="1-30-pm"
                        value=""
                        class="hidden peer"
                        name="timetable"
                      />
                      <label
                        for="1-30-pm"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        01:30 PM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="2-pm"
                        value=""
                        class="hidden peer"
                        name="timetable"
                      />
                      <label
                        for="2-pm"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        02:00 PM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="2-30-pm"
                        value=""
                        class="hidden peer"
                        name="timetable"
                      />
                      <label
                        for="2-30-pm"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        02:30 PM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="3-pm"
                        value=""
                        class="hidden peer"
                        name="timetable"
                      />
                      <label
                        for="3-pm"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        03:00 PM
                      </label>
                    </li>
                    <li>
                      <input
                        type="radio"
                        id="3-30-pm"
                        value=""
                        class="hidden peer"
                        name="timetable"
                      />
                      <label
                        for="3-30-pm"
                        class="inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-gray-500 border-gray-200 dark:border-gray-700 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-gray-600 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-600 dark:peer-checked:bg-blue-900"
                      >
                        03:30 PM
                      </label>
                    </li>
                  </ul>
                  <div class="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Save
                    </button>
                    <button
                      type="button"
                      data-modal-hide="timepicker-modal"
                      class="py-2.5 px-5 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Discard
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center mb-4">
            <button
              class="bg-gray-900 mt-6 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Book Appointment
            </button>
          </div>
    </>
  );
}