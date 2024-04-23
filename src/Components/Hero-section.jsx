import React from "react";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import image1 from '../Assets/Hannan.jpg'

// import image3 from '../Assets/img.mentors/The Visualization of Forces Through Simulation.jpg'

// import image5 from '../Assets/img.mentors/Mentorship5.jpg'
// import image6 from '../Assets/img.mentors/Mentorship6.jpg'
import image7 from '../Assets/img.mentors/Mentorship7.jpg'
// import image8 from '../Assets/img.mentors/Mentorship8.jpg'
import image9 from '../Assets/img.mentors/Mentorship9.jpg'
// import Navbar from "./Navbar";





export default function HeroSection() {
  return (
    <>
    {/* <Navbar/> */}
    <div className="w-full flex min-h-screen relative">
      <div className=" bg-black/50 flex h-full w-full absolute top-0 left-0 z-40">
     
     <div className="mx-auto w-full flex flex-col items-center py-12 sm:py-24">
       <div className="w-11/12  lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
         <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-5xl text-center text-gray-200 dark:text-white font-black leading-10 pt-10">
           Supercharge your career with
           <br/><span className="text-violet-500 dark:text-violet-500">
             LongTerm Mentorship
           </span>
         </h1>
         <p className="mt-5 sm:mt-10 lg:w-10/12 text-white dark:text-gray-300 font-normal text-center text-2xl">
           Land your dream job, role, and company faster than ever with 1:1
           long term mentorship..
         </p>

         <form action="/search" className="max-w-[480px] w-full px-4 mt-6">
           <div className="relative">
             <input
               type="text"
               name="q"
               className="w-full border h-12 shadow p-4 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
               placeholder="search"
             />
             <button type="submit"></button>
           </div>
         </form>
       </div>
     </div>
   </div>
      <div className="w-full h-full relative">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="relative"
      >
        <SwiperSlide><img src={image1}/></SwiperSlide>
        <SwiperSlide><img src='https://images.unsplash.com/photo-1522881193457-37ae97c905bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></SwiperSlide>
        <SwiperSlide><img src='https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/></SwiperSlide>
        <SwiperSlide><img src='https://images.unsplash.com/photo-1620841713108-18ad2b52d15c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /></SwiperSlide>
        <SwiperSlide><img src='https://img.freepik.com/free-photo/still-life-business-roles-with-various-pawns_23-2149352587.jpg?t=st=1713875418~exp=1713879018~hmac=2f53fc4509fa0a21c158d55cd0ac58bd09f7d3927b5a233976fcca08e48d944a&w=740' /></SwiperSlide>
        <SwiperSlide><img src='https://img.freepik.com/premium-photo/steps-education-leading-success-goal-taking-strategic-steps-towards-graduation-career-path-first-business-graduation-achievement-goals-concept-graduation-cap-wooden-block_1137986-1412.jpg?w=740' /></SwiperSlide>
        <SwiperSlide><img src='https://img.freepik.com/free-photo/close-up-people-studying-language-together_23-2149300725.jpg?t=st=1713875270~exp=1713878870~hmac=27ba4cc631420c125649e4146057c219a7a8e0f61af6d865783b38f0b51aad5b&w=740'/></SwiperSlide>
        <SwiperSlide><img src='https://images.unsplash.com/photo-1561346745-5db62ae43861?q=80&w=1883&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /></SwiperSlide>
        <SwiperSlide><img src={image9} /></SwiperSlide>
      </Swiper>
      </div>
      
 
    </div>
    </>
  );
}
