import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaNode } from 'react-icons/fa';
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiMongodb, SiExpress } from "react-icons/si";


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='text-6xl text-red-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='text-6xl text-red-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'TailwindCSS',
    icon: <RiTailwindCssFill className='text-6xl text-red-500' />,
    text: 'Highly skilled in TailwindCSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'NodeJs',
    icon: <FaNode className='text-6xl text-red-500' />,
    text: 'Advanced proficiency in NodeJs, developing efficient and interactive front-end applications with various NodeJs packages. ',
  },
  {
    id: nanoid(),
    title: 'MongoDb',
    icon: <SiMongodb className='text-6xl text-red-500' />,
    text: 'Proficiency in MongoDb, developing efficient and interactive web applications with using MongoDb for storing data ',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='text-6xl text-red-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'ExpressJs',
    icon: <SiExpress className='text-6xl text-red-500' />,
    text: 'Advanced proficiency in ExpressJs, developing efficient and interactive back-end applications with a strong emphasis on component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Next',
    icon: <RiNextjsFill className='text-6xl text-red-500' />,
    text: 'Advanced proficiency in NextJs, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },

];

export const projects = [
  {
    id: nanoid(),
    img: 'https://photos.app.goo.gl/4ZvLGXEu8KVGyw5N8',
    url: 'https://mahtabkhan7179.github.io/dashboard/',
    github: 'https://github.com/MahtabKhan7179/dashboard',
    title: 'Student Enrollment Form',
    text: 'The enrollment page is created using  HTML5, CSS3 and Javascript.
All fields of the form have necessary validations and error messages on validation failure.
On form submission the enrolled student will be added dynamically to the table using javascript
The image will be loaded from the URL submitted in the form and website link will open in a new tab on clicking
The new enrollment will be added with a fade-in effect achieved using CSS animations.
The webpage is responsive for all resolutions and screen-sizes. Bootstrap framework is used for layout and forms.',
  },
  {
    id: nanoid(),
    img: 'https://photos.app.goo.gl/4ZvLGXEu8KVGyw5N8',
    url: 'https://mahtabkhan7179.github.io/dashboard/',
    github: 'https://github.com/MahtabKhan7179/dashboard',
    title: 'Student Enrollment Form',
    text: 'The enrollment page is created using  HTML5, CSS3 and Javascript.
All fields of the form have necessary validations and error messages on validation failure.
On form submission the enrolled student will be added dynamically to the table using javascript
The image will be loaded from the URL submitted in the form and website link will open in a new tab on clicking
The new enrollment will be added with a fade-in effect achieved using CSS animations.
The webpage is responsive for all resolutions and screen-sizes. Bootstrap framework is used for layout and forms.',
  },
  {
    id: nanoid(),
    img: 'https://photos.app.goo.gl/4ZvLGXEu8KVGyw5N8',
    url: 'https://mahtabkhan7179.github.io/dashboard/',
    github: 'https://github.com/MahtabKhan7179/dashboard',
    title: 'Student Enrollment Form',
    text: 'The enrollment page is created using  HTML5, CSS3 and Javascript.
All fields of the form have necessary validations and error messages on validation failure.
On form submission the enrolled student will be added dynamically to the table using javascript
The image will be loaded from the URL submitted in the form and website link will open in a new tab on clicking
The new enrollment will be added with a fade-in effect achieved using CSS animations.
The webpage is responsive for all resolutions and screen-sizes. Bootstrap framework is used for layout and forms.',
  },
     {
    id: nanoid(),
    img: 'https://photos.app.goo.gl/4ZvLGXEu8KVGyw5N8',
    url: 'https://mahtabkhan7179.github.io/dashboard/',
    github: 'https://github.com/MahtabKhan7179/dashboard',
    title: 'Student Enrollment Form',
    text: 'The enrollment page is created using  HTML5, CSS3 and Javascript.
All fields of the form have necessary validations and error messages on validation failure.
On form submission the enrolled student will be added dynamically to the table using javascript
The image will be loaded from the URL submitted in the form and website link will open in a new tab on clicking
The new enrollment will be added with a fade-in effect achieved using CSS animations.
The webpage is responsive for all resolutions and screen-sizes. Bootstrap framework is used for layout and forms.',
  },
   {
    id: nanoid(),
    img: 'https://photos.app.goo.gl/4ZvLGXEu8KVGyw5N8',
    url: 'https://mahtabkhan7179.github.io/dashboard/',
    github: 'https://github.com/MahtabKhan7179/dashboard',
    title: 'Student Enrollment Form',
    text: 'The enrollment page is created using  HTML5, CSS3 and Javascript.
All fields of the form have necessary validations and error messages on validation failure.
On form submission the enrolled student will be added dynamically to the table using javascript
The image will be loaded from the URL submitted in the form and website link will open in a new tab on clicking
The new enrollment will be added with a fade-in effect achieved using CSS animations.
The webpage is responsive for all resolutions and screen-sizes. Bootstrap framework is used for layout and forms.',
  },
];
