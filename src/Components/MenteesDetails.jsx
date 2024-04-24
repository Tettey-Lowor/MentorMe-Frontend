import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'
import image1 from '../Assets/Mentees/5 Super Easy Linkedin Profile Picture Tips.jpg'
import image2 from '../Assets/Mentees/Executive portraits - business headshot - Linkedin profil picture - NYC portrait photographer.jpg'
import image3 from  '../Assets/Mentees/Linkedin Profile Tips and Tricks.jpg'
import image4 from '../Assets/Mentees/Loop Lighting_ What Every Photographer Should Know.jpg'



export default function MenteesDetails() {
  return (
    <>  
    <Navbar/>
   
    <div className="flex md:w-32">
    <SideBar/>
    
    <table class="min-w-full divide-y divide-gray-200 overflow-x-auto">
    <thead class="bg-gray-50">
        <tr>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Specialization
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Appointment days
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
            </th>
            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                To-Dos
            </th>
            
            
            
        </tr>
    </thead>
    <tbody class="bg-white divide-y divide-gray-200">
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src={image1} alt=""/>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            Jane Cooper
                        </div>
                        <div class="text-sm text-gray-500">
                            jane.cooper@example.com
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">FullStack</div>
                <div class="text-sm text-gray-500">Optimization</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Practice
            </td>
        </tr>



        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src={image2} alt=""/>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            Rita Danny
                        </div>
                        <div class="text-sm text-gray-500">
                            DannyR@email.com
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Backend</div>
                <div class="text-sm text-gray-500">Optimization</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Tuesdays
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Meet
            </td>
        </tr>



        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src={image3} alt=""/>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            Brandy Ander
                        </div>
                        <div class="text-sm text-gray-500">
                            Anderb@email.com
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Frontend</div>
                <div class="text-sm text-gray-500">Optimization</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Fridays
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                brand@email.com
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Interview
            </td>
        </tr>



        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src={image4} alt=""/>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            Ezra Larry
                        </div>
                        <div class="text-sm text-gray-500">
                            latrr@email.com
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                <div class="text-sm text-gray-500">Optimization</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Wednesdays
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Meet
            </td>
            
        </tr>
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt=""/>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            Jane Cooper
                        </div>
                        <div class="text-sm text-gray-500">
                            jane.cooper@example.com
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                <div class="text-sm text-gray-500">Optimization</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Mondays
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Review 
            </td>
        </tr>
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt=""/>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            Jane Cooper
                        </div>
                        <div class="text-sm text-gray-500">
                            jane.cooper@example.com
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                <div class="text-sm text-gray-500">Optimization</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Mondays
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Presentation 
            </td>
        </tr>
        <tr>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full" src="https://i.pravatar.cc/150?img=1" alt=""/>
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                            Jane Cooper
                        </div>
                        <div class="text-sm text-gray-500">
                            jane.cooper@example.com
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                <div class="text-sm text-gray-500">Optimization</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Active
                </span>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Tuesdays
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                jane.cooper@example.com
            </td>
            <td class="px-6 py-4 whitespace-nowrap  text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
                <a href="#" class="ml-2 text-red-600 hover:text-red-900">Delete</a>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Start Project
            </td>
        </tr>


    </tbody>
</table>
</div>
</>
  )
}
