import React, { useState } from 'react';

const offers = [
  {
    title: "Loga Sea",
    price: 700,
    tag: "Relax",
    duration: "3 Days, 2 Nights",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Ansgar Scheffold",
    price: 400,
    tag: "Adventure",
    duration: "2 Days, 3 Nights",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Lona X",
    price: 340,
    tag: "Relax",
    duration: "2 Days, 4 Nights",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
];

const tabs = ["Team", "Couple", "Family"];

const Services = () => {
  const [tab, setTab] = useState('flight');
  const [from, setFrom] = useState('Dubai');
  const [to, setTo] = useState('New York');
  const [leaveDate, setLeaveDate] = useState('23 Jan, Sat');
  const [returnDate, setReturnDate] = useState('14 Jan, Thu');
  const [activeTab, setActiveTab] = useState("Team");

  return (
    <div className="min-h-screen p-8  animate-fade-in">
      <div className="rounded-xl shadow-lg p-4 max-w-4xl bg-white mx-auto mb-10 transition-all duration-500 ease-in-out animate-fade-in">
        <div className="flex space-x-4 mb-4">
          <button
            onClick={() => setTab('flight')}
            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${tab === 'flight' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400`}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v2H3V3zm0 4h18v2H3V7zm0 4h18v2H3v-2zm0 4h18v2H3v-2z" />
            </svg>
            Flight
          </button>
          <button
            onClick={() => setTab('hotel')}
            className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${tab === 'hotel' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} hover:bg-blue-400`}
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            Hotel
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4 items-center">
          {[{ label: "Leaving From", value: from, setter: setFrom },
            { label: "Going To", value: to, setter: setTo },
            { label: "Leave", value: leaveDate, setter: setLeaveDate },
            { label: "Return", value: returnDate, setter: setReturnDate }
          ].map(({ label, value, setter }, idx) => (
            <div className="relative" key={idx}>
              <input
                type="text"
                value={value}
                onChange={(e) => setter(e.target.value)}
                placeholder={label}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">✈️</span>
            </div>
          ))}
        </div>

        <button className="mt-4 w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-transform transform hover:scale-110">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </div>

      <h2 className="text-3xl font-bold text-center mb-6 text-black transition-opacity duration-500 animate-fade-in">
        Special Upcoming Offers
      </h2>

      <div className="flex justify-center gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full border font-medium transition-all duration-300 ease-in-out transform hover:scale-105 ${activeTab === tab ? "bg-blue-600 text-white" : "bg-white text-gray-700"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl p-4 shadow-md relative transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl animate-fade-in"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="w-full h-48 object-cover rounded-2xl mb-4 transition-opacity duration-500"
            />
            <div className="absolute top-4 right-4 text-xs text-gray-500 rotate-90">
              {offer.date}
            </div>
            <span className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full mb-2 inline-block">
              {offer.tag}
            </span>
            <h3 className="text-lg font-semibold mb-1">{offer.title}</h3>
            <p className="text-sm text-gray-500 mb-2">{offer.duration}</p>
            <p className="text-xl font-bold mb-2">{offer.price}$ <span className="text-sm font-normal">/Person</span></p>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-200 transition-all duration-300">
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
