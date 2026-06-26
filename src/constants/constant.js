// all tech images 
import javaScript from "../assets/tech img/javascript.png"
import bootstrap from "../assets/tech img/bootstrap.png"
import css from "../assets/tech img/css.png"
import express from "../assets/tech img/express.png"
import figma from "../assets/tech img/figma.png"
import git from "../assets/tech img/git.png"
import github from "../assets/tech img/github.png"
import html from "../assets/tech img/html.png"
import mongodb from "../assets/tech img/mongodb.png"
import reactjs from "../assets/tech img/reactjs.png"
import redux from "../assets/tech img/redux.png"
import tailwind from "../assets/tech img/tailwind.png"
import versel from "../assets/tech img/versel.png"
import vscode from "../assets/tech img/vscode.jpg"
import node from "../assets/tech img/node.png"

//clg images 

import gita from "../assets/clg img/gita.jpg"
import gp from "../assets/clg img/gp.jpg"
import carmel from "../assets/clg img/carmel.jpg"

// personal images
import myphoto from "../assets/personal img/myphoto.png"

// interns images

import prodigy from "../assets/interns img/prodigy.jpg"
import webbocket from "../assets/interns img/webbocket.png"

// work images

import weatherLogo from '../assets/work_logo/weatherLogo.jpg';
import recipeLogo from  '../assets/work_logo/recipeLogo.jpg';
import movieLogo from  '../assets/work_logo/movieLogo.jpg';
import quizLogo from '../assets/work_logo/quizLogo.jpg';
import textVoiceLogo from '../assets/work_logo/textVoiceLogo.png';
import todoLogo from  '../assets/work_logo/todoLogo.jpg';
import notesLogo from  '../assets/work_logo/notesLogo.png';
import passwordLogo from '../assets/work_logo/passwordLogo.png';



export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: html },
      { name: "CSS", logo: css },
      { name: "JavaScript", logo: javaScript },
      { name: "React JS", logo: reactjs },
      { name: "Redux Toolkit", logo: redux },
      { name: "Tailwind CSS", logo: tailwind },
      { name: "Bootstrap", logo: bootstrap },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: node },
      { name: "Express JS", logo: express },
      { name: "MongoDB", logo: mongodb },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", logo: javaScript },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: git },
      { name: "GitHub", logo: github },
      { name: "VS Code", logo: vscode },
      { name: "Figma", logo: figma },
      { name: "Vercel", logo: versel },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webbocket,
    role: "MERN Stack Developer Intern",
    company: "Web Bocket",
    date: "May 2026 - August 2026",
    desc: "Completed a 3-month MERN Stack internship where I developed full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Built responsive user interfaces, developed RESTful APIs, implemented CRUD operations, integrated MongoDB databases, and collaborated on real-world projects while following modern web development practices.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Redux Toolkit",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Tailwind CSS",
      "Bootstrap",
      "Git",
      "GitHub",
    ],
  },
  {
    id: 1,
    img: prodigy,
    role: "Web Development Intern",
    company: "Prodigy InfoTech",
    date: "June 2025 - July 2025",
    desc: "Successfully completed a Web Development internship by designing and developing responsive web applications using HTML, CSS, and JavaScript. Built projects including a Weather App, Movie Detail App, Recipe Finder, Quiz App, Notes App, To-Do List, Password Generator, and Text-to-Voice Converter. Strengthened my skills in DOM manipulation, API integration, Local Storage, and responsive web design through hands-on project development.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "Git",
      "GitHub",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: gita,
    school: "Gita Autonomous College, Bhubaneswar",
    date: "2024 - Present",
    grade: "pursuing",
    desc: "Currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering at Gita Autonomous College. Along with my academic coursework, I actively build full-stack web applications using the MERN stack and continuously strengthen my skills in Data Structures, Database Management Systems, Operating Systems, Computer Networks, and modern web technologies through hands-on projects.",
    degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
  },
  {
    id: 1,
    img: gp,
    school: "Government Polytechnic, Bhubaneswar",
    date: "2021 - 2024",
    grade: "7.3 CGPA",
    desc: "Completed a Diploma in Information Technology, where I gained a strong foundation in programming, database management, software development, networking, and web technologies. This program helped me build practical problem-solving skills and sparked my interest in full-stack web development.",
    degree: "Diploma in Information Technology",
  },
  {
    id: 2,
    img: carmel,
    school: "Carmel English Medium School",
    date: "2020 - 2021",
    grade: "64%",
    desc: "Completed my secondary education from Carmel English Medium School under the CBSE board. During my schooling, I developed a strong academic foundation and problem-solving skills that later motivated me to pursue a career in technology and software development.",
    degree: "CBSE (Class X)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Weather App",
    description:
      "A responsive weather application that provides real-time weather information using the OpenWeather API. Users can search for any city to view temperature, humidity, wind speed, and weather conditions through a clean and user-friendly interface.",
    image: weatherLogo,
    tags: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    github: "https://github.com/skazhar786/weather-app",
    webapp: "",
  },
  {
    id: 1,
    title: "Recipe Finder App",
    description:
      "A dynamic recipe search application that allows users to discover recipes from an external API. Users can search for meals, explore ingredients, and view detailed cooking instructions through an interactive interface.",
    image: recipeLogo,
    tags: ["HTML", "CSS", "JavaScript", "Recipe API"],
    github: "https://github.com/skazhar786/Recipe-App",
    webapp: "",
  },
  {
    id: 2,
    title: "Movie Detail App",
    description:
      "A movie search application that fetches detailed movie information from the OMDb API. Users can search for movies and instantly view ratings, release dates, genres, posters, and plot summaries in a responsive interface.",
    image: movieLogo,
    tags: ["HTML", "CSS", "JavaScript", "OMDb API"],
    github: "https://github.com/skazhar786/movie-app",
    webapp: "",
  },
  {
    id: 3,
    title: "Quiz App",
    description:
      "An interactive quiz application that presents multiple-choice questions and calculates the user's final score. The project demonstrates DOM manipulation, event handling, and dynamic UI updates using JavaScript.",
    image: quizLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/skazhar786/quiz-app",
    webapp: "",
  },
  {
    id: 4,
    title: "Text to Voice Converter",
    description:
      "A browser-based text-to-speech application that converts written text into natural voice using the Web Speech API. Users can enter text and listen to speech through an intuitive interface.",
    image: textVoiceLogo,
    tags: ["HTML", "CSS", "JavaScript", "Web Speech API"],
    github: "https://github.com/skazhar786/text-to-voice-converter",
    webapp: "",
  },
  {
    id: 5,
    title: "To-Do List",
    description:
      "A task management application that enables users to create, organize, and manage daily tasks efficiently. The application supports task completion, deletion, and data persistence using Local Storage.",
    image: todoLogo,
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github: "https://github.com/skazhar786/todo-app",
    webapp: "",
  },
  {
    id: 6,
    title: "Notes App",
    description:
      "A lightweight note-taking application that allows users to create, edit, and delete notes. Notes are stored locally in the browser using Local Storage, ensuring data persistence across sessions.",
    image: notesLogo,
    tags: ["HTML", "CSS", "JavaScript", "Local Storage"],
    github: "https://github.com/skazhar786/notes-app",
    webapp: "",
  },
  {
    id: 7,
    title: "Password Generator",
    description:
      "A secure password generator that creates strong and random passwords based on user-defined criteria. The application helps users generate reliable passwords for enhanced online security.",
    image: passwordLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/skazhar786/password-generator",
    webapp: "https://password-generator-jvwmsce53-azhar17.vercel.app/",
  },

];