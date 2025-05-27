



import React from 'react'

const About = () => {
  return (
    <div  className="mt-40 max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80"
          alt="Traveler"
          className="rounded-3xl w-full h-auto object-cover"
        />

       
        <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-xl shadow-md text-center">
          <p className="text-blue-500 font-bold text-sm">300+</p>
          <p className="text-xs text-gray-500 font-semibold">DESTINATIONS</p>
        </div>

        <div className="absolute bottom-10 right-4 bg-white px-4 py-2 rounded-xl shadow-md text-center">
          <p className="text-blue-500 font-bold text-sm">150+</p>
          <p className="text-xs text-gray-500 font-semibold">HOTELS</p>
        </div>

        <div className="absolute bottom-10 left-4 bg-white px-4 py-2 rounded-xl shadow-md text-center">
          <p className="text-blue-500 font-bold text-sm">5000+</p>
          <p className="text-xs text-gray-500 font-semibold">TOURISTS</p>
        </div>
      </div>

     
      <div>
        <h2 className="text-3xl text-white font-bold mb-4">
          Travel Any Corner <br /> Of The World With Us
        </h2>
        <p className="text-white mb-4">
          Would you explore nature paradise in the world, let’s find the best
          destination in world with us. Would you explore nature paradise in the
          world, let’s find the best destination in world with us. Would you
          explore nature paradise in the world, let’s find the best destination
          in world with us.
        </p>
        <p className="text-white mb-6">
          Would you explore nature paradise in the world, let’s find the best
          destination in world with us.
        </p>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
          Contact Us
        </button>
      </div>
    </div>
  )
}

export default About
