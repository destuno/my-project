import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import photot from "../img/Photo3.png";
import Mount from "../img/akina-mountain.png";

const data = {
  Popular: [
    {
      title: "Kina Mountain",
      location: "Cambodia",
      rating: 3.4,
      img: photot,
    },
    {
      title: "Kina Mountain",
      location: "Cambodia",
      rating: 4.5,
      img: photot,
    },
    {
      title: "Kina Mountain",
      location: "Cambodia",
      rating: 4.2,
      img: photot,
    },
    {
      title: "Kina Mountain",
      location: "Cambodia",
      rating: 3.5,
      img: photot,
    },
  ],
  Adventure: [
    {
      title: "Jungle Trek",
      location: "Amazon",
      rating: 4.7,
      img: photot,
    },
    {
      title: "Desert Safari",
      location: "Dubai",
      rating: 4.4,
      img: photot,
    },
  ],
  Beach: [
    {
      title: "Bali Island",
      location: "Indonesia",
      rating: 4.9,
      img: photot,
    },
    {
      title: "Maldives Resort",
      location: "Maldives",
      rating: 4.8,
      img: photot,
    },
  ],
};

const tabs = ["Popular", "Adventure", "Beach"];

const Recomendation = () => {
  const [activeTab, setActiveTab] = useState("Popular");

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 opacity-0 animate-fade-in">
          Recommended Destination
        </h2>

        <div className="flex justify-center gap-4 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`px-4 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? "bg-blue-100 text-blue-600 scale-105"
                  : "text-gray-500 hover:text-blue-500 hover:scale-105"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <Swiper
          slidesPerView={1.2}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
          }}
          navigation
          modules={[Navigation]}
        >
          {data[activeTab].map((dest, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white shadow-md rounded-2xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                <div className="relative">
                  <img
                    src={Mount}
                    alt={dest.title}
                    className="h-48 w-full object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white text-yellow-500 text-sm font-semibold px-2 py-1 rounded-full shadow">
                    ★ {dest.rating}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{dest.title}</h3>
                  <p className="text-sm text-gray-500 flex items-center">
                    📍 {dest.location}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Recomendation;
