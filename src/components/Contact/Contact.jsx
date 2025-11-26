import React from "react";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  const telegramUsername = "vlad_ryad"; // Замените на ваш username Telegram

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Заголовок секции */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Связаться со мной</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-purple-700 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Готов ответить на ваши вопросы. Напишите мне в Telegram, и я свяжусь с вами в ближайшее время.
        </p>
      </div>

      {/* Блок связи через Telegram */}
      <div className="mt-6 w-full max-w-md bg-[#0d081f] p-5 rounded-lg shadow-lg border border-gray-700">

        <div className="mt-6 flex flex-col items-center space-y-6">
          {/* Иконка Telegram */}
          <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full flex items-center justify-center">
            <FaTelegram className="w-10 h-10 text-white" />
          </div>

          {/* Кнопка перехода в Telegram */}
          <a
            href={`https://t.me/${telegramUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-purple-500 to-purple-700 py-3 text-white font-semibold rounded-md hover:opacity-90 transition flex items-center justify-center space-x-2 hover:from-purple-600 hover:to-purple-800"
          >
            <FaTelegram className="w-5 h-5 text-white" />
            <span>Написать в Telegram</span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;