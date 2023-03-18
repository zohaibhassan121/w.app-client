import React from 'react'
import bgimg from '../assert/images/logo.jpg'
import { Link} from 'react-router-dom'
const Home = () => {
  return (
    <>
      <section class="text-gray-600 body-font font">
        <div class="container mx-auto flex px-5 pt-5 md:flex-row flex-col items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Weather Information Service

            </h1>
            <p class="mb-8 leading-relaxed">The "MyWorldWeather" is the mobile application of the "World Weather Information Service". Equipped with location-based technology, the application display the latest official weather forecasts of city nearby.</p>
            <button class="p-2 px-3 bg-slate-800 rounded-lg "><Link class="text-white underline-none hover:text-fuchsia-600 border-b border-blue " to="../login/">
              weather info
            </Link>.</button>
          </div>
          <div class="w-80">
            <img class="object-cover object-center rounded " alt="hero" src={bgimg} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
