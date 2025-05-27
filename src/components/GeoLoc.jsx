import React from 'react';

const GeoLoc = () => {
  return (
    <div className="flex justify-center mt-10 px-4">
      <a
        href="https://www.google.com/maps/place/дубай/data=!4m2!3m1!1s0x3e5f43496ad9c645:0xbde66e5084295162?sa=X&ved=1t:155783&ictx=111"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-3xl border-2 border-gray-300 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.01]"
      >
        <div className="bg-gray-100 p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">🌍 Местоположение: Дубай</h3>
          <p className="text-sm text-gray-600">
            Нажмите на карту, чтобы открыть её в Google Maps
          </p>
        </div>
        <div className="w-full h-[500px]">
          <iframe
            title="Карта Дубая"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115896.36040872053!2d55.15411707575582!3d25.075656051623343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2z0L3QsNGF0LDRgNC60LjQuSDQoNC-0YHRgdC40Y8!5e0!3m2!1sru!2s!4v1716645273589!5m2!1sru!2s"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </a>
    </div>
  );
};

export default GeoLoc;
