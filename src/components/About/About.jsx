import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile3.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 font-sans mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Greeting */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Привет, Я
          </h1>
          {/* Name */}
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Владислав Рядинский
          </h2>
          {/* Skills Heading with TypeAnimation (inline) */}
          <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-semibold mb-4 sm:mb-6 leading-tight text-white">
            <span className="text-white">Я&nbsp;</span>
            <TypeAnimation
              sequence={[
                'Junior Frontend Developer', 2000,
                'Web developer', 2000,
                'Coder', 2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              speed={80}
              className="text-[#8245ec] inline"
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-sm xs:text-base sm:text-lg text-gray-400 mb-8 sm:mb-10 mt-4 sm:mt-8 leading-relaxed">
            Junior Frontend-разработчик, увлечён созданием современных и адаптивных веб-интерфейсов. Владею HTML, CSS, JavaScript и React, использую современные инструменты разработки и стремлюсь применять лучшие практики для создания удобных и эффективных решений.
          </p>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1EVG_TdS6uYdT14yA7m00QKdV1jk0FKAs/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full text-sm sm:text-base md:text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Скачать резюме
          </a>

        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Vlad Ryadinsky"
              className="w-full h-full rounded-full object-cover object-[center_5%] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;