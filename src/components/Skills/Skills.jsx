// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8 md:mb-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        Навыки
      </h2>
      <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-[#8245ec] mx-auto mt-2 sm:mt-3 md:mt-4"></div>
      <p className="text-gray-300 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium md:font-semibold px-2 sm:px-4 md:px-0">
        Мой стек технологий: инструменты, которые я применяю на практике.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-8 py-6 sm:py-8 md:py-12">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900/80 backdrop-blur-md px-4 sm:px-6 md:px-8 py-6 sm:py-8 rounded-xl sm:rounded-2xl border border-white/20
            shadow-[0_0_15px_1px_rgba(130,69,236,0.2)] hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.3)]
            transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(50%-16px)]"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-300 mb-4 sm:mb-6 text-center">
            {category.title}
          </h3>

          {/* Skill Items */}
          <Tilt
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={800}
            scale={1.03}
            transitionSpeed={800}
            gyroscope={true}
            className="w-full"
          >
            <div className="grid grid-cols-2 xs:grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2
                    bg-gray-800/50 hover:bg-gray-800/80 border border-gray-700/50 hover:border-purple-500/30
                    rounded-xl sm:rounded-2xl p-2 sm:p-3 text-center transition-all duration-200
                    min-h-[70px] sm:min-h-[80px]"
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
                    />
                  </div>
                  <span className="text-xs sm:text-sm md:text-base text-gray-300 font-medium mt-1 sm:mt-0">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;