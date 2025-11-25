import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_7d77rx4",  //  EmailJS Service ID
        "template_25dxhsa",  //  EmailJS Template ID
        form.current, "bGqgZGx8StvObPdgC"  //  EmailJS Public Key
      )
      .then(() => {
        setIsSent(true);
        form.current.reset(); // Очистка полей формы после отправки
        toast.success("Сообщение успешно отправлено! ✅", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      }, (error) => {
        console.error("Ошибка при отправке сообщения:", error);
        toast.error("Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      });
  };

  return (<section
    id="contact"
    className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
  >
    {/* Контейнер уведомлений */}
    <ToastContainer />

    {/* Заголовок секции */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-white">Связаться со мной</h2>
      <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        Готов ответить на ваши вопросы. Заполните форму обратной связи, и я свяжусь с вами в ближайшее время.
      </p>
    </div>

    {/* Форма обратной связи */}
    <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
      <h3 className="text-xl font-semibold text-white text-center">
        Напишите мне <span className="ml-1">🚀</span>
      </h3>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-4 flex flex-col space-y-4"
      >
        <input
          type="email"
          name="user_email"
          placeholder="Ваш Email"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        <input
          type="text"
          name="user_name"
          placeholder="Ваше Имя"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        <input
          type="text"
          name="subject"
          placeholder="Тема сообщения"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />
        <textarea
          name="message"
          placeholder="Ваше сообщение"
          rows="4"
          required
          className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
        />

        {/* Кнопка отправки */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition"
        >
          Отправить сообщение
        </button>
      </form>
    </div>
  </section>);
};

export default Contact;