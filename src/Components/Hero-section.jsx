import React from "react";
import { FaSearch } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import image1 from '../Assets/Hannan.jpg'





export default function HeroSection() {
  return (
    <div className="w-full min-h-screen relative">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className="w-full h-full"
      >
        <SwiperSlide><img src={image1}/>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      <div className="dark:bg-gray-800 absolute top-0 left-0 h-full w-full">
        <div className="dark:bg-black-opacity">
          <div className="mx-auto flex flex-col items-center py-12 sm:py-24">
            <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col mb-5 sm:mb-10">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-center text-gray-800 dark:text-white font-black leading-10">
                Supercharge your career with
                <span className="text-violet-800 dark:text-violet-500">
                  LongTerm Mentorship
                </span>
              </h1>
              <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-600 dark:text-gray-300 font-normal text-center text-xl">
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
      </div>
    </div>
  );
}
