import React from 'react'
import Amazon from '../Assets/Amazon.jpg'
import Google from '../Assets/google.jpg'
import Magento from '../Assets/980_magento_logo.jpg'
import Hubspot from '../Assets/hubspot.png'
import MEST from '../Assets/MEST.jpg'
import META from '../Assets/META.png'
import Microsoft from '../Assets/Microsoft.jpg'
import Drupal from '../Assets/390_drupal.jpg'
import Adobe from '../Assets/Adobe-logo-removebg-preview.png'
import Atlassian from '../Assets/atlassian-blue-logo.png'

export default function ExpertsCompanies() {
        const techs = [
          {
            id: 1,
            src: Amazon,
            title: "Amazon",
            style: "shadow-orange-500",
          },
          {
            id: 2,
            src: Google,
            title: "Google",
            style: "shadow-blue-500",
          },
          {
            id: 3,
            src: Magento,
            title: "Magento",
            style: "shadow-yellow-500",
          },
          {
            id: 4,
            src: Hubspot,
            title: "Hubspot",
            style: "shadow-yellow-50",
          },
          {
            id: 5,
            src: MEST,
            title: "MEST",
            style: "shadow-sky-400",
          },
          {
            id: 6,
            src: META,
            title: "META",
            style: "shadow-purple-500",
          },
          {
            id: 7,
            src: Microsoft,
            title: "Microsoft",
            style: "shadow-blue-500",
          },
          {
            id: 8,
            src: Atlassian,
            title: "Atlassian",
            style: "shadow-green-500",
          },
          {
            id: 9,
            src: Drupal,
            title: "Drupal",
            style: "shadow-white",
          },
          {
            id: 10,
            src: Adobe,
            title: "Adobe",
            style: "shadow-orange-500",
          },
        ]
        
  return (
    <div
    name="experience"
    className="bg-indigo-900 w-full  h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white font-4xl">
      <div>
       
        <p className="py-6, text-white text-4xl font-bold mb-4 ">
          Get to learn and build your career with mentors that have worked with companies like
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-8 text-center py-8 px-12 sm:px-0">
        {techs.map(({ id, src, title, style }) => (
          <div
            key={id}
            className={`shadow-md duration-200 hover:scale-500 py-2 rounded-lg ${style}`}
          >
            <img src={src} alt="" className="w-20 mx-auto"></img>
            <p className="mt-4">{title}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}
