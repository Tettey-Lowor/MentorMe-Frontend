import React from 'react'
import image1 from '../Assets/img.mentors/albert-dera-ILip77SbmOE-unsplash.jpg'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'

export default function MentorsResume() {
  return (
    <>
    <Navbar/>
    {/* // <!-- original author: https://github.com/AleksandrHovhannisyan --> */}
<div class="min-h-screen mt-10 dark:bg-neutral-900">
    <Link to='/MentorProfileDetails' className='font-bold text-l hover:bg-black-700'>Go back</Link>
  <header class="fixed inset-x-0 bottom-0 bg-neutral-800 sm:relative">
    <div class="mx-auto justify-between p-3 sm:flex sm:max-w-4xl sm:p-4">
      {/* <!-- title --> */}

      <a href="#" class="hidden items-center gap-1 sm:flex">
        <img class="inline-block w-8 object-cover" src={image1} />
        <span class="font-fira text-lg font-bold text-white">Aleksandr Hovhannisyan</span>
      </a>

      {/* <!-- navigation right --> */}
      <div class="flex sm:gap-2">
        <a href="#"
          class="block flex-1 py-2 text-center text-lg text-white hover:bg-neutral-700 sm:hidden sm:px-3">Home</a>
        <a href="#" class="block flex-1 bg-neutral-700 py-2 text-center text-lg text-white sm:px-3">About</a>
        <a href="#" class="block flex-1 py-2 text-center text-lg text-white hover:bg-neutral-700 sm:px-3">Art</a>
        <a href="#" class="block flex-1 py-2 text-center text-lg text-white hover:bg-neutral-700 sm:px-3">Blog</a>
      </div>
    </div>
  </header>

  <article class="font-fira mx-auto max-w-3xl p-4 selection:bg-black selection:text-white">
    <h1 class="font-fira mb-8 text-4xl font-bold dark:text-white sm:mt-16">About Me</h1>

    <img class="float-right w-44 rounded-full" src={image1} />

    <p class="text-lg dark:text-neutral-200">Thanks for dropping by! My name’s Aleksandr—and yes, that’s spelled without
      an <kbd class="rounded bg-neutral-200/50 p-1">e</kbd> between the
      <kbd class="rounded bg-neutral-200/50 p-1">d</kbd> and the <kbd class="rounded bg-neutral-200/50 p-1">r</kbd>,
      pronounced just like Alexander. Don’t worry about my last name, though; it’s quite long, and most people butcher
      it anyway.</p>

    <p class="mt-10 text-lg dark:text-neutral-200">Speaking of last names, if mine hasn’t already betrayed me, I was
      originally born in Armenia, a beautiful country nestled between Europe, Asia, and a bunch of biblically old
      mountains. You can almost spot it on a world map if you squint hard enough.</p>

    <p class="mt-10 text-lg dark:text-neutral-200">Long story short, I moved to the U.S. when I was little and have
      lived in the states for most of my life. I currently reside in Florida, home to plenty of friendly gators,
      lovebugs whose carcasses will eat away at your car’s paint, and the infamous Florida Man.</p>

    {/* <!-- Work Experience --> */}
    <section class="mt-12">
      <h2 class="text-3xl font-bold dark:text-white">Work Experience</h2>
      <p class="mt-6 text-lg dark:text-neutral-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        aspernatur numquam suscipit. Quae, itaque veritatis. Mollitia sunt consequatur a. Id, quia fuga laudantium enim
        illo deserunt minima pariatur soluta veniam!</p>
    </section>

    {/* <!-- Software Projects --> */}
    <section class="mt-12">
      <h2 class="text-3xl font-bold dark:text-white">Software Projects</h2>
      <p class="mt-6 text-lg dark:text-neutral-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
        aspernatur numquam suscipit. Quae, itaque veritatis. Mollitia sunt consequatur a. Id, quia fuga laudantium enim
        illo deserunt minima pariatur soluta veniam!</p>

      {/* <!-- Projects gallery --> */}
      <div class="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <section
          class="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
          <header class="flex items-center justify-between dark:text-gray-50">
            <h3 class="text-lg font-bold">Fluid-type-scale.com</h3>
            <span>123</span>
          </header>
          <div class="mt-2 dark:text-gray-300">Generate font size variables for a fluid type scale with CSS clamp.</div>

          <footer class="my-4 flex gap-1">
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">nextjs</span>
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">typescript</span>
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">sass</span>
          </footer>
        </section>

        <section
          class="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
          <header class="flex items-center justify-between dark:text-gray-50">
            <h3 class="text-lg font-bold">This Website!</h3>
            <span>67</span>
          </header>
          <div class="mt-2 dark:text-gray-300">My online resume and blog, created with 11ty, Sass, and JavaScript.</div>

          <footer class="my-4 flex gap-1">
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">11ty</span>
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">sass</span>
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">javascript</span>
          </footer>
        </section>

        <section
          class="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
          <header class="flex items-center justify-between dark:text-gray-50">
            <h3 class="text-lg font-bold">Scribe</h3>
            <span>20</span>
          </header>
          <div class="mt-2 dark:text-gray-300">Text editor developed with the Qt framework. Features standard fie
            operations, syntax highlighting, brace autocomplete, and auto-indentation.</div>

          <footer class="my-4 flex gap-1">
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">c++</span>
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">qt5</span>
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">qtcreator</span>
          </footer>
        </section>

        <section
          class="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
          <header class="flex items-center justify-between dark:text-gray-50">
            <h3 class="text-lg font-bold">U.S. Gun Crimes</h3>
            <span>6</span>
          </header>
          <div class="mt-2 dark:text-gray-300">A database-driven web app that allows you to visualize U.S. gun crime
            statistics and trends for the period of 2013-2018.</div>

          <footer class="my-4 flex gap-1">
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">react</span>
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">typescript</span>
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">express</span>
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">sql</span>
          </footer>
        </section>

        <section
          class="card cursor-pointer rounded p-5 shadow-sm shadow-black/60 transition hover:-translate-y-2 hover:shadow-md hover:shadow-black/50 dark:bg-neutral-800">
          <header class="flex items-center justify-between dark:text-gray-50">
            <h3 class="text-lg font-bold">Embody</h3>
            <span>3</span>
          </header>
          <div class="mt-2 dark:text-gray-300">Embody is a dungeon crawler inspired by the Binding of Isaac that lets
            you possess dead enemies.</div>

          <footer class="my-4 flex gap-1">
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">C#</span>
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">unity</span>
            <span class="bg-neutral-100 px-4 py-1 text-sm dark:bg-neutral-600 dark:text-gray-50">game-ai</span>
          </footer>
        </section>

        <section class="flex flex-col items-center justify-center">
          <header>
            <h3 class="text-xl font-bold dark:text-white">Want to see more of my work</h3>
            <h4 class="text-center text-lg dark:text-neutral-200">Check out my other repos:</h4>
          </header>
          <div class="mt-4">
            <a href="#">
              <svg class="h-12 text-black dark:text-white" role="img" className="" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <title>GitHub</title>
                <path fill="currentColor"
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12">
                </path>
              </svg>
            </a>
          </div>
        </section>
      </div>
    </section>

    {/* <!-- Hobbies and interests --> */}
    <section class="mt-12">
      <h2 class="text-3xl font-bold dark:text-white">Hobbies and Interests</h2>
      <p class="mt-6 text-lg dark:text-neutral-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga
        omnis porro molestias placeat animi officiis commodi soluta? Autem praesentium quaerat quasi, aut nostrum
        maiores voluptatibus omnis ratione voluptatem ad odio possimus rerum ullam, excepturi eos perferendis. Dolor
        sapiente dicta consequatur corporis, expedita doloribus magnam asperiores nemo illo at repellat quis quos
        consequuntur eum laborum voluptates ea. Nisi quia corrupti dolore eaque, cum sint animi suscipit iste voluptate,
        veritatis ratione quo laudantium, adipisci dolores hic perspiciatis doloribus accusantium quibusdam voluptatum?
      </p>
      <p class="mt-6 text-lg dark:text-neutral-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit fuga
        omnis porro molestias placeat animi officiis commodi soluta? Autem praesentium quaerat quasi, aut nostrum
        maiores voluptatibus omnis ratione voluptatem ad odio possimus rerum ullam, excepturi eos perferendis. Dolor
        sapiente dicta consequatur corporis, expedita doloribus magnam asperiores nemo illo at repellat quis quos
        consequuntur eum laborum voluptates ea. Nisi quia corrupti dolore eaque, cum sint animi suscipit iste voluptate,
        veritatis ratione quo laudantium, adipisci dolores hic perspiciatis doloribus accusantium quibusdam voluptatum?
      </p>
    </section>

   
    <section class="mt-12">
      <h2 class="text-3xl font-bold dark:text-white">So, Yeah... That's Me!</h2>
      <p class="mt-6 text-lg dark:text-neutral-200">Anyway, this is probably a good place to stop. There’s more to my
        life than what I feel comfortable sharing here, but that’s about the gist of my background and interests. If you
        made it this far, cool! You’re still awake! Maybe we can chat sometime and get to know each other.</p>
      <p class="mt-6 text-lg dark:text-neutral-200">At the end of the day, I’m just a Real Human Bean who enjoys doing
        real human things. If that sounds like your cup of tea, get in touch—I’d love to hear from you!</p>
    </section>
  </article>

  
  
</div>
</>
  )
}
