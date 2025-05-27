import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import logo from '../img/web-side-logo.png';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('i18nextLng', lng);
  };

  return (
    <>
      <div
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300 animate-fadeIn
          ${isScrolled ? 'bg-transparent backdrop-blur-md shadow-md' : 'bg-gray-900 shadow-md'}
        `}
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 hover:scale-110 transition-transform duration-200"
          />
          <nav className="flex items-center gap-6">
            {[
              { label: t('home'), id: 'Navbar' },
              { label: t('Comments'), id: 'Comment' },
              { label: t('News'), id: 'News' },
              { label: t('Contact'), id: 'Contact' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`
                  relative text-sm font-medium transition-all duration-200
                  ${isScrolled ? 'text-white hover:text-gray-200' : 'text-gray-300 hover:text-white'}
                  after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[2px]
                  after:bg-current after:w-0 after:transition-all after:duration-300
                  hover:after:w-full hover:scale-105
                `}
              >
                {item.label}
              </a>
            ))}
            <div className="ml-6">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                defaultValue={i18n.language}
                className={`
                  text-sm font-medium rounded-md p-1 focus:outline-none transition-all duration-200
                  ${isScrolled ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
                  hover:scale-105
                `}
              >
                <option value="en">🇬🇧 EN</option>
                <option value="ru">🇷🇺 RU</option>
                <option value="zh">🇨🇳 ZH</option>
                <option value="uz">🇺🇿 UZ</option>
              </select>
            </div>
          </nav>
        </div>
      </div>
      <div className="h-[50px]"></div>
    </>
  );
};

export default Navbar;