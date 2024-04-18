
import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/Hero-section';
import Mentors from '../Components/Mentors';
import ExpertsCompanies from '../Components/ExpertsCompanies';
import Steps from '../Components/Steps';
import Footer from '../Components/Footer';
import Testimonial from '../Components/Testimonial';




export default function Homepage() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <Mentors/>
    <ExpertsCompanies/>
    <Testimonial/>
    <Steps/>
    <Footer/>
    </>
  )
}
