import React from "react";
import {
  FaTelegram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <footer className="text-white py-5 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        {/* Name / Logo */}
        <h2 className="text-xl font-semibold text-purple-500">Владислав Рядинский</h2>

        {/* Navigation Links - Responsive */}
        <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
          {[
            {name: "Обо мне", id: "about"},
            {name: "Навыки", id: "skills"},
            // { name: "Опыт", id: "experience" },
            {name: "Проекты", id: "work"},
            {name: "Образование", id: "education"},
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-purple-500 text-sm sm:text-base my-1"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Media Icons - Responsive */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            {
              icon: <FaTelegram />,
              link: "https://t.me/vlad_ryad"
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/vlad-ryad"
            },
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/vladislav-ryadinsky/"
            },



          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-purple-500 transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 Владислав Рядинский. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;