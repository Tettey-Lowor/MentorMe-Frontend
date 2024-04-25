import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'

export default function MenteeRegisterPage() {

    const[firstName, setFirstName] = useState(null);
    const[lastName, setLastName] = useState(null);
    const[email, setEmail]= useState(null)
    const[password, setPassword]= useState(null)
    const[specialization, setSpecialization]= useState(null)

    // const navigate = useNavigate();

    useEffect(() => {}, []);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e);

        const userCredentials = 
        {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            specialization: specialization,

        }
        const response = await fetch(`http://localhost:8000/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userCredentials),
        });

        const data = await response.json();
        console.log(data);

        // navigate("/FirstDashBoard");
        

      };

    
  return (
    <>
    <Navbar/>
    <section class="bg-gray-50 dark:bg-gray-900 mt-6 mb-6 py-6">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 mt-6 mb-6">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          
      <div class="text-2xl mt-6  py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
          MENTORME
        </div>   
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create an account
              </h1>
              <form onSubmit={handleSubmit} class="space-y-4 md:space-y-6" action="#">
              
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">FirstName </label>
                      <input type="FirstName " name="FirstName" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="firstname" required=""
                      onChange={(e) => setFirstName(e.target.value)}/>
                  </div>

                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">LastName </label>
                      <input type="Lastname " name="Lastname" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lastname" required=""
                      onChange={(e) => setLastName(e.target.value)}/>
                  </div>

                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""
                      onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" 
                      onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  
                  <div class="mb-4">
            <label class="block text-gray-700 font-bold mb-2" for="service">
                Specialization
            </label>
            <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="service" name="service">
                <option value="">Select a specialization</option>
                <option value="haircut">Frontend </option>
                <option value="coloring">Backend </option>
                <option value="styling">FullStack</option>
                <option value="facial">General Enquiries</option>
                onChange={(e) => setSpecialization(e.target.value)}

            </select>
        </div>

                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                      
                  </div>
                  <button type="submit" class="w-full text-white bg-gray-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  

                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href="/Login" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</>
  )
}
