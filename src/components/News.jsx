import React from 'react'
import newBG from "../img/bgNew.png"



const News = () => {
  return (
    <div  id='News' className="mt-40 py-8">
      {/* Discount Banner */}
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-blue-900 text-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <img
            src ={newBG}
            alt="Earth from space"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Don’t Miss The 50% Discount if You register Today
            </h2>
            <button className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-colors">
              Register Today
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News
