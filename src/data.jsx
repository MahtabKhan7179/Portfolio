import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNode } from 'react-icons/fa';
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";
import studentEnrollmentFormImage from "./assets/studentEnrollmentForm.gif";
import dblogWebsiteImage from "./assets/dblog-website.gif";
import menu from "./assets/menu.gif"

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
    text: 'htmlAbout',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='text-6xl text-red-500' />,
    progress: '90',
    text: 'javascriptAbout',
  },
  {
    id: nanoid(),
    title: 'TailwindCSS',
    icon: <RiTailwindCssFill className='text-6xl text-red-500' />,
    progress: '85',
    text: 'tailwindCSSAbout',
  },
  {
    id: nanoid(),
    title: 'NodeJs',
    icon: <FaNode className='text-6xl text-red-500' />,
    progress: '70',
    text: 'nodeJsAbout',
  },
  {
    id: nanoid(),
    title: 'MongoDb',
    icon: <SiMongodb className='text-6xl text-red-500' />,
    progress: '75',
    text: 'mongoDbAbout',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='text-6xl text-red-500' />,
    progress: '80',
    text: 'reactJsAbout',
  },
  {
    id: nanoid(),
    title: 'ExpressJs',
    icon: <SiExpress className='text-6xl text-red-500' />,
    progress: '78',
    text: 'expressJsAbout',
  }

];

export const projects = [
  {
    id: nanoid(),
    img: dblogWebsiteImage,
    url: 'https://dblogwebsite.vercel.app/',
    github: 'https://github.com/MahtabKhan7179/dBlogWebsite',
    title: 'dBlogWebsite',
    text: 'dBlogWebsiteDetail',
  },
  {
    id: nanoid(),
    img: studentEnrollmentFormImage,
    url: 'https://mahtabkhan7179.github.io/dashboard/',
    github: 'https://github.com/MahtabKhan7179/dashboard',
    title: 'StudentEnrollmentForm',
    text: 'StudentEnrollmentFormProjectDetail',
  },
  {
    id: nanoid(),
    img: menu,
    url: 'https://menu-one-sable.vercel.app/',
    github: 'https://github.com/MahtabKhan7179/Menu',
    title: 'menu',
    text: 'menuDetail',
  },
];
