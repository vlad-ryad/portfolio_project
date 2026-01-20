import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
          Образование
        </h2>
        <div className="w-20 sm:w-24 md:w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-3 sm:mb-4 rounded-full"></div>
        <p className="text-gray-300 sm:text-gray-400 text-sm sm:text-base md:text-lg font-medium px-2 sm:px-0">
          Мой образовательный путь — это непрерывное развитие и приобретение новых знаний. Ниже — основные этапы обучения.
        </p>
      </div>

      {/* Education Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical timeline line */}
        <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-0.5 sm:w-1 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500 h-full"></div>

        {/* Mobile vertical line (left aligned) */}
        <div className="sm:hidden absolute left-6 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500 h-full"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-12 sm:mb-16 ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Timeline Circle */}
            <div className="absolute sm:left-1/2 left-6 transform -translate-x-1/2 sm:-translate-x-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gray-800 border-4 border-purple-500/80 shadow-lg shadow-purple-500/30 rounded-full flex justify-center items-center z-10 overflow-hidden">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-full h-full object-cover p-1"
                loading="lazy"
              />
            </div>

            {/* Content Card */}
            <div
              className={`w-full sm:w-[calc(50%-40px)] ml-0 sm:ml-0 ${
                index % 2 === 0
                  ? "sm:mr-auto sm:pr-8 sm:pl-0"
                  : "sm:ml-auto sm:pl-8 sm:pr-0"
              } pl-12 sm:pl-0`}
            >
              <div className="group bg-gray-900/80 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-1">
                {/* Flex container for responsive layout */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                  {/* School Logo/Image */}
                  <div className="w-full sm:w-auto flex justify-center sm:justify-start">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-20 bg-white/5 rounded-lg sm:rounded-xl overflow-hidden border border-white/10 p-1 group-hover:border-purple-500/30 transition-colors duration-300">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Degree, School Name, and Date */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* Degree with gradient text */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-1">
                      {edu.degree}
                    </h3>

                    {/* School name */}
                    <h4 className="text-sm sm:text-base md:text-lg text-gray-200 font-medium mb-2">
                      {edu.school}
                    </h4>

                    {/* Date with icon */}
                    <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{edu.date}</span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-white/10">
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {edu.desc}
                  </p>
                </div>

                {/* Optional additional info */}
                {edu.additionalInfo && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.additionalInfo.map((info, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-purple-500/10 text-purple-300 text-xs font-medium rounded-full px-3 py-1"
                      >
                        {info}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-600/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Education;