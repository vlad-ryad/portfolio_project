import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Блокировка прокрутки при открытой модалке
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className="py-12 md:py-14 lg:py-16 pb-20 md:pb-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
          Проекты
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-3 sm:mt-4"></div>
        <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-medium md:font-semibold max-w-3xl mx-auto px-2">
          Презентация проектов, над которыми я работал, чтобы показать свои навыки в разных технологиях
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white/20 bg-gray-900/80 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden cursor-pointer hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 ease-out group"
          >
            <div className="p-3 sm:p-4">
              <div className="relative overflow-hidden rounded-lg sm:rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg sm:rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 line-clamp-1">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 text-xs sm:text-sm md:text-base line-clamp-2 sm:line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                {project.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-[10px] xs:text-xs font-medium text-purple-400 rounded-full px-2 py-1 sm:px-3 sm:py-1"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="inline-block bg-[#251f38]/50 text-[10px] xs:text-xs font-medium text-gray-400 rounded-full px-2 py-1 sm:px-3 sm:py-1">
                    +{project.tags.length - 3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 transition-all duration-300 ${
          selectedProject
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={handleCloseModal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Backdrop с градиентом */}
        <div className={`absolute inset-0 bg-black transition-opacity duration-300 ${
          selectedProject ? 'opacity-90' : 'opacity-0'
        }`}></div>

        {/* Модальное окно */}
        <div
          className={`relative bg-gray-900 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl w-full max-w-[95%] sm:max-w-[90%] md:max-w-3xl mx-auto overflow-hidden max-h-[90vh] sm:max-h-[85vh] flex flex-col transition-all duration-300 transform ${
            selectedProject
              ? 'scale-100 opacity-100 translate-y-0'
              : 'scale-95 opacity-0 translate-y-4'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header модалки с кнопкой закрытия */}
          <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm flex justify-between items-center p-3 sm:p-4 border-b border-white/10 z-10">
            <h3
              id="modal-title"
              className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate pr-2"
            >
              {selectedProject?.title}
            </h3>
            <button
              onClick={handleCloseModal}
              className="text-gray-400 hover:text-white text-2xl sm:text-3xl font-bold hover:scale-110 transition-all duration-200 flex-shrink-0 w-8 h-8 flex items-center justify-center"
              aria-label="Закрыть модальное окно"
            >
              &times;
            </button>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto flex-1">
            {/* Изображение проекта */}
            <div className="w-full flex justify-center bg-gray-800/50 p-3 sm:p-4">
              <div className="relative w-full max-w-2xl">
                <img
                  src={selectedProject?.image}
                  alt={selectedProject?.title}
                  className="w-full h-auto max-h-[40vh] sm:max-h-[50vh] object-contain rounded-lg sm:rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Контент модалки */}
            <div className="p-4 sm:p-6 md:p-8">
              {/* Описание */}
              <div className="mb-6">
                <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                  {selectedProject?.description}
                </p>
              </div>

              {/* Теги */}
              <div className="mb-6 sm:mb-8">
                <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">
                  Используемые технологии:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] hover:bg-[#2d2546] text-purple-300 hover:text-purple-200 text-xs sm:text-sm font-medium rounded-full px-3 py-1.5 sm:px-4 sm:py-2 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Кнопки */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href={selectedProject?.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white px-4 py-3 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  Посмотреть код
                </a>
                <a
                  href={selectedProject?.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-4 py-3 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold text-center transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg hover:shadow-purple-500/30"
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  Демонстрация проекта
                </a>
              </div>
            </div>
          </div>

          {/* Footer модалки */}
          <div className="border-t border-white/10 p-3 sm:p-4 bg-gray-900/80 backdrop-blur-sm">
            <p className="text-gray-500 text-xs sm:text-sm text-center">
              Нажмите за пределами окна или на крестик, чтобы закрыть
            </p>
          </div>
        </div>

        {/* Клавиша Escape для закрытия */}
        {selectedProject && (
          <div className="sr-only" aria-live="polite">
            Модальное окно открыто. Нажмите Escape или кликните вне окна для закрытия.
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;