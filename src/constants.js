// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Education Section Logo
import altgtyLogo from './assets/education_logo/altgty_logo.jpg';
import bgpk_logo from './assets/education_logo/bgpk_logo.jpg';

// Project Section Logo
import positivusLogo from './assets/work_logo/positivus.png';
import medLogo from './assets/work_logo/med_app.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import ProductStoreLogo from './assets/work_logo/product_store_mern.png';
import omnivisionLogo from './assets/work_logo/omniVision.png';
import taskLogo from './assets/work_logo/task_project.png';
import doorsWp_Logo from './assets/work_logo/wp_doors_project.png';
import kitchenLogo from './assets/work_logo/next_kitchen_recipes.png';



export const SkillsInfo = [
  {
    title: 'Frontend/Backend',
    skills: [
      {name: 'HTML', logo: htmlLogo},
      {name: 'CSS', logo: cssLogo},
      {name: 'SASS', logo: sassLogo},
      {name: 'JavaScript', logo: javascriptLogo},
      {name: 'React JS', logo: reactjsLogo},
      {name: 'Tailwind CSS', logo: tailwindcssLogo},
      {name: 'Bootstrap', logo: bootstrapLogo},
      {name: 'MySQL', logo: mysqlLogo},
      {name: 'MongoDB', logo: mongodbLogo},
      {name: 'Firebase', logo: firebaseLogo},
      {name: 'PostgreSQL', logo: postgreLogo},
    ],
  },
  // {
  //   title: 'Backend',
  //   skills: [
  //     {name: 'MySQL', logo: mysqlLogo},
  //     {name: 'MongoDB', logo: mongodbLogo},
  //     {name: 'Firebase', logo: firebaseLogo},
  //     {name: 'PostgreSQL', logo: postgreLogo},
  //   ],
  // },

  {
    title: 'Tools',
    skills: [
      {name: 'Git', logo: gitLogo},
      {name: 'GitHub', logo: githubLogo},
      {name: 'VS Code', logo: vscodeLogo},
      {name: 'Postman', logo: postmanLogo},
      {name: 'Vercel', logo: vercelLogo},
      {name: 'Figma', logo: figmaLogo},
    ],
  },
];


export const education = [
  {
    id: 0,
    img: altgtyLogo,
    school: "АлтГТУ им. И. И. Ползунова, Барнаул",
    date: "Сентябрь 2021 - Июль 2025",
    desc: "Я получил степень бакалавра по направлению «Информатика и вычислительная техника» со специализацией «Программно-техническое обеспечение автоматизированных систем» в АлтГТУ. В процессе обучения я приобрёл прочные знания в области информатики, программирования, веб-разработки и создания программного обеспечения. В программу обучения входили такие дисциплины, как «Программирование», «Операционные системы», «Базы данных», «Сети и телекоммуникации», «Проектирование автоматизированных систем», «Системное программное обеспечение» и «Веб-технологии». Обучение в АлтГТУ помогло мне развить логическое мышление, умение решать технические задачи и уверенно работать с современными инструментами разработки",
    degree: "Информатика и вычислительная техника",
  },
  {
    id: 1,
    img: bgpk_logo,
    school: "КГБПОУ \"БГПК\", Барнаул",
    date: "Сентябрь 2017 - Июль 2021",
    desc: "Я окончил КГБПОУ «БГПК» по специальности «Техник-программист». В колледже получил фундаментальные знания в области информационных технологий, программирования и работы с базами данных. Изучал основы алгоритмизации, объектно-ориентированное программирование, веб-технологии и администрирование операционных систем.\n" +
      "\n" +
      "Обучение в колледже дало мне практическое понимание принципов разработки программного обеспечения и веб-приложений, а также сформировало интерес к дальнейшему профессиональному развитию в сфере IT.",
    degree: "Техник-программист",
  },
];

export const projects = [
  {
    id: 0,
    title: "Landing page \"Positivus\"",
    description:
      "Веб-сайт проекта Positivus с современным дизайном и адаптивной версткой. Я сверстал все блоки по макету, реализовал адаптивность для разных устройств, применял методологию БЭМ для удобства поддержки кода.",
    image: positivusLogo,
    tags: ["HTML", "CSS/SCSS", "JavaScript", "БЭМ", "Адаптивная верстка"],
    github: "https://github.com/vlad-ryad/positivus-frontend",
    webapp: "https://vlad-ryad.github.io/positivus-frontend/",
  },
  {
    id: 1,
    title: "Приложение для учета приема лекарств",
    description:
      "Приложение на React Native для создания, редактирования и удаления напоминаний о приеме лекарств и добавок. Реализовал хранение данных в Firestore и локально через AsyncStorage, добавил уведомления и пользовательский интерфейс для удобного управления приемом лекарств.",
    image: medLogo,
    tags: ["React Native", "Expo", "Firestore", "AsyncStorage", "JavaScript", "TypeScript"],
    github: "https://github.com/vlad-ryad/Medical-Reminder-App",
    webapp: "https://drive.google.com/file/d/1GoRqIcirRjLf84w2O3hZKiHrOR5ddBp1/view?usp=sharing",
  },
  {
    id: 2,
    title: "Movie App",
    description:
      "Интерактивное веб-приложение для просмотра популярных фильмов. Реализовал фильтры по жанрам, дате выхода, рейтингу и названию, добавил темную/светлую тему, подключил внешний API для получения данных о фильмах.",
    image: movierecLogo,
    tags: ["React", "API", "HTML", "CSS", "JavaScript" , "Vite"],
    github: "https://github.com/vlad-ryad/movie",
    webapp: "https://movie-five-dusky.vercel.app/",
  },
  {
    id: 3,
    title: "Landing page \"OmniVision\"",
    description:
      "Современный одностраничный сайт с фокусом на UX/UI. Реализовал адаптивную верстку для разных устройств, также интерактивные элементы с помощью React и Tailwind CSS.",
    image: omnivisionLogo,
    tags: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/vlad-ryad/OmniVision/tree/main",
    webapp: "https://vlad-ryad.github.io/OmniVision/",
  },
  {
    id: 4,
    title: "Product Store (MERN)",
    description:
      "Веб-приложение на стеке MERN для управления товарами. Реализовал добавление, редактирование и удаление товаров, интеграцию с REST API, работу с MongoDB и Node.js, настроил фронтенд на React с использованием Chakra UI.",
    image: ProductStoreLogo,
    tags: ["Express", "React", "REST API", "Node", "Vite", "MongoDB", "Chakra UI"],
    github: "https://github.com/vlad-ryad/product_store_mern",
    webapp: "https://product-store-mern-05b1.onrender.com/",
  },
  {
    id: 5,
    title: "TaskTrek - Приложение для управления задачами",
    description:
      "Простое приложение для управления задачами с функцией drag-and-drop. Разработал интерфейс для добавления и удаления задач, реализовал сохранение данных в Local Storage.",
    image: taskLogo,
    tags: ["HTML", "CSS", "React", "Vite", "Local Storage"],
    github: "https://github.com/vlad-ryad/task-project",
    webapp: "https://task-project-tan-eight.vercel.app/",
  },
  {
    id: 6,
    title: "ZHOVNER - Магазин межкомнатных дверей на WordPress",
    description: "Проект демонстрирует полный цикл создания сайта: от верстки до интеграции с CMS. В рамках разработки кастомной темы WordPress были реализованы ключевые функции интернет-магазина: фильтрация каталога, динамические карточки товаров с использованием плагина SCF (Secure Custom Fields), настраиваемые через админку страницы (главная, портфолио, контакты) и функциональные формы обратной связи. Для фронтенда использована vanilla JavaScript с подключением библиотеки List.js для сортировки данных. Проект завершен переносом на рабочий хостинг.",
    image: doorsWp_Logo,
    tags: ["WordPress", "PHP", "HTML", "CSS", "JavaScript", "List.js", "Contact Form 7", "SCF"],
    github: "https://github.com/vlad-ryad/doors_wp_project/",
    webapp: "http://u196614.test-handyhost.ru/",
  },
  {
    id: 7,
    title: "Рецепты домашней кухни",
    description: "Full-stack веб-приложение для управления рецептами с полным циклом разработки — от инициализации проекта до деплоя. Реализована система аутентификации пользователей (Auth.js) с защищенными маршрутами через middleware. В проекте использован современный стек: Next.js App Router для файлового роутинга, PostgreSQL база данных с Prisma ORM, Zustand для глобального состояния и Zod для валидации данных. Интерфейс построен на компонентах HeroUI. Ключевые функции: регистрация/авторизация, создание/редактирование рецептов, работа с ингредиентами, серверные действия для обработки форм и модальные окна для взаимодействия с пользователем.",
    image: kitchenLogo,
    tags: ["Next.js", "Typescript", "Zustand", "Zod", "HeroUI", "PostgreSQL", "Prisma ORM", "Auth.js"],
    github: "https://github.com/vlad-ryad/next_kitchen_recipes/",
    webapp: "https://next-kitchen-recipes.vercel.app/",
  },
];