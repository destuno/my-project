import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const testimonials = [
  {
    name: "Youna D",
    title: "Happy Traveler",
    rating: 4.5,
    text: "Our trip to Morocco was truly a once in a lifetime experience and we are so grateful to everyone that made it happen seamlessly. Our travel planner, Jaouad, was incredible.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Wa Ilio",
    title: "Happy Neloo",
    rating: 4.3,
    text: "The whole process was so easy and relaxing. We enjoyed every bit of it and can't wait to book again.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lara N",
    title: "Frequent Adventurer",
    rating: 4.8,
    text: "Truly outstanding service. Every detail was taken care of, and I felt completely safe and supported.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Marco T",
    title: "World Explorer",
    rating: 4.6,
    text: "I’ve traveled a lot, but this team made everything seamless and enjoyable. Highly recommend!",
    img: "https://randomuser.me/api/portraits/men/18.jpg",
  },
];

const Comment = () => {
  return (
    <section id='Comment'  className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-10">
          What Our Clients Say
        </h2>

        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl shadow-lg p-6 relative h-full">
                <div className="absolute top-4 left-4 text-gray-300 text-4xl">“</div>
                <p className="text-gray-900 mt-8 mb-4">{item.text}</p>
                <div className="flex items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="text-gray-900 font-semibold">– {item.name}</p>
                    <p className="text-gray-600">{item.title}</p>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-900 ml-1">{item.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Comment;
