import React from 'react'

export default function ExpertsCompanies() {
    const Experiencess = () => {
        const techs = [
          {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
          },
          {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
          },
          {
            id: 3,
            src: javascript,
            title: "Javascript",
            style: "shadow-yellow-500",
          },
          {
            id: 4,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
          },
          {
            id: 5,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
          },
          {
            id: 6,
            src: bootstrap,
            title: "Bootstrap",
            style: "shadow-purple-500",
          },
          {
            id: 7,
            src: mui,
            title: "Material UI",
            style: "shadow-blue-500",
          },
          {
            id: 8,
            src: nodejs,
            title: "Node Js",
            style: "shadow-green-500",
          },
          {
            id: 9,
            src: expressjs,
            title: "Express Js",
            style: "shadow-white",
          },
          {
            id: 10,
            src: git,
            title: "Git",
            style: "shadow-orange-500",
          },
        ];}
  return (
    <div
    name="experience"
    className="bg-gradient-to-b from-gray-800 to-black w-full  h-screen"
  >
    <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
      <div>
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
          Skills
        </p>
        <p className="py-6">
          We have 
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
