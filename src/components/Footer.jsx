import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-6">
      <div className="text-lg font-semibold mb-2">TravelCo</div>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} TravelCo. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
