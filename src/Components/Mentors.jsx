import React from 'react'
import Image1 from '../Assets/DAngelo.jpg'
import Image2 from '../Assets/Hannan.jpg'
import Image3 from '../Assets/rOFFY 2.jpg'
import { Link } from 'react-router-dom'

export default function Mentors() {
  return (
    <>
    <section class="flex flex-col justify-center max-w-6xl min-h-screen px-4 py-10 mx-auto sm:px-6">
    <div class="flex flex-wrap items-center justify-between mb-8">
        <h2 class="mr-10 text-4xl font-bold leading-none md:text-5xl mb-4">
        Choose your ideal mentor and get started with a brighter future
        </h2>
        <Link to='/MenteeRegisterPage'  class="block pb-4 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600 mr-4">click here to View All Mentors</Link> 
    </div>

    <div class="flex flex-wrap -mx-4">
        <div class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img src={Image1} />
            <div class="flex flex-grow">
                <div class="triangle"></div>
                <div class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400 text">
                    <div>
                        <a href="#"
                            class="inline-block mb-4 text-2xl font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">D'Angelo Kwakye</a>
                        <a href="#"
                            class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">
                            Senior Software Engineer at Google
                        </a>
                        <p class="mb-4">
                           Lorem ipsum dolor sit amet , assumenda laborum officiis quasi aliquam hic doloribus repellat quas repellendus perferendis eaque provident facilis. 
                        </p>
                        <p className='font-bold'> Available: Tuesdays and Thursdays</p>
                    </div>
                    <div>
                        
                        
                    <Link to='/AllMentorsPage' class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                            More</Link>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
            src={Image2}
            alt="Card img"
            class="object-cover object-center w-full h-48"
            style={{height: "380px"}}
          />
            <div class="flex flex-grow">
                <div class="triangle"></div>
                <div class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                    <div>
                        <Link to= 'AllMentorsPage' class="inline-block mb-4 text-2xl font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600" >Hannan Abdul-Aziz</Link>
                        <Link to='/MentorDetailsPage' class="block mb-4 text-2xl font-black leading-tight hover:underline hover:text-blue-600">Fullstacker Developer at META </Link>
                        <p class="mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla delectus.
                        </p>
                        <p className='font-bold'> Available: Tuesdays and Thursdays</p>
                    </div>
                    <div>
                        <a href="#"
                            class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                            More </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full max-w-full mb-8 sm:w-1/2 px-4 lg:w-1/3 flex flex-col">
            <img
            src={Image3}
            alt="Card img"
            class="object-cover object-center w-full h-48"
            style={{height: "380px"}}
          />
            <div class="flex flex-grow">
                <div class="triangle"></div>
                <div class="flex flex-col justify-between px-4 py-6 bg-white border border-gray-400">
                    <div>
                        <a href="#"
                            class="inline-block mb-4 text-2xl font-bold capitalize border-b-2 border-blue-600 hover:text-blue-600">Rofiat Muritala</a>
                        <Link to='/AllMentorsPage' class="block mb-4 text-2xl font-black  leading-tight hover:underline hover:text-blue-600">Developer at Magento</Link>
                        <p class="mb-4">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, neque. Eius, ea possimus.
                        </p>
                        <p className='font-bold'> Available: Mondays and Thursdays</p>
                    </div>
                    <div>
                        <Link to='/AllMentorsPage'  class="inline-block pb-1 mt-2 text-base font-black text-blue-600 uppercase border-b border-transparent hover:border-blue-600">Read
                            More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}



