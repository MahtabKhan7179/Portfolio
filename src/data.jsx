import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNode } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import studentEnrollmentFormImage from "./assets/studentEnrollmentForm.gif";
import dblogWebsiteImage from "./assets/dblog-website.gif";

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#resume', text: 'resume' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='text-6xl text-red-500' />,
    progress: '95',
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='text-6xl text-red-500' />,
    progress: '90',
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'TailwindCSS',
    icon: <RiTailwindCssFill className='text-6xl text-red-500' />,
    progress: '85',
    text: 'Highly skilled in TailwindCSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'NodeJs',
    icon: <FaNode className='text-6xl text-red-500' />,
    progress: '70',
    text: 'Advanced proficiency in NodeJs, developing efficient and interactive front-end applications with various NodeJs packages. ',
  },
  {
    id: nanoid(),
    title: 'MongoDb',
    icon: <SiMongodb className='text-6xl text-red-500' />,
    progress: '75',
    text: 'Proficiency in MongoDb, developing efficient and interactive web applications with using MongoDb for storing data ',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='text-6xl text-red-500' />,
    progress: '80',
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'ExpressJs',
    icon: <SiExpress className='text-6xl text-red-500' />,
    progress: '78',
    text: 'Advanced proficiency in ExpressJs, developing efficient and interactive back-end applications with a strong emphasis on component-based architecture.',
  }

];

export const projects = [
  {
    id: nanoid(),
    img: dblogWebsiteImage,
    url: 'https://dblogwebsite.vercel.app/',
    github: 'https://github.com/MahtabKhan7179/dBlogWebsite',
    title: 'dBlog Website',
    text: 'Created a Blog Management System using React.js, material-Ui and Redux.js, enabling users to perform CRUD operations on blog posts with local data storage. Implemented a Digital Watch component for real-time time display, focusing on responsive design and user experience, showcasing my skills in frontend development and state management.',
  },
  {
    id: nanoid(),
    img: studentEnrollmentFormImage,
    url: 'https://mahtabkhan7179.github.io/dashboard/',
    github: 'https://github.com/MahtabKhan7179/dashboard',
    title: 'Student Enrollment Form',
    text: 'Developed an enrollment page using HTML5, CSS3, and JavaScript, featuring validated form fields with error messages. Upon submission, enrolled students are dynamically added to a table with a fade-in effect. Images load from submitted URLs, and links open in new tabs. The responsive design utilizes Bootstrap for layout.',
  },
];
