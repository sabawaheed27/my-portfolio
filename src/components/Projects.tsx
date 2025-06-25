
"use client";
import { motion } from "framer-motion";

// const projects = [
//   {
//     title: 'styled-todo-app',
//     description: 'A task A responsive and clean Todo List application built using React and TypeScript. This project demonstrates the use of Styled Components for styling and browser localStorage for persistent state management. Features include adding, editing, deleting, and toggling tasks, with responsive design and clean code architecture.',
//     link: 'https://styled-todo-app.vercel.app/',
//     github: 'git@github.com:sabawaheed27/styled-todo-app.git',
//   },
//   {
//     title: 'next-ts-fact-fetcher',
//     description: 'Single-page app that fetches and displays random fun facts with a stylish SCSS layout',
//     link: 'https://next-ts-fact-fetcher.vercel.app/',
//     github: 'git@github.com:sabawaheed27/next-ts-fact-fetcher.git',
//   },
//   {
//     title: 'aussie-animal-atlas',
//     description: 'Find random A React-powered zoo explorer showcasing mammals, birds, and reptiles. Built with React Router, conditional rendering, and responsive design principles.recipes using an API',
//     link: 'https://https://zoo-assignment.vercel.app/-recipe-demo.com',
//     github: 'https://https://github.com/sabawaheed27/aussie-animal-atlas.git.com',
//   },
//   {
//     title: 'React-API-Fetching',
//     description: 'Find random recipes using an API',
//     link: 'https://react-api-fetching-oxll.vercel.app/',
//     github: 'git@github.com:sabawaheed27/React-API-Fetching.git',
//   },
// ];



const projects = [
  {
    title: 'styled-todo-app',
    description: 'A responsive and clean Todo List application built using React and TypeScript. This project demonstrates the use of Styled Components for styling and browser localStorage for persistent state management. Features include adding, editing, deleting, and toggling tasks, with responsive design and clean code architecture.',
    link: 'https://styled-todo-app.vercel.app/',
    github: 'https://github.com/sabawaheed27/styled-todo-app',
  },
  {
    title: 'next-ts-fact-fetcher',
    description: 'Single-page app that fetches and displays random fun facts with a stylish SCSS layout.',
    link: 'https://next-ts-fact-fetcher.vercel.app/',
   github: 'https://github.com/sabawaheed27/next-ts-fact-fetcher',
  },
  {
    title: 'aussie-animal-atlas',
    description: 'A React-powered zoo explorer showcasing mammals, birds, and reptiles. Built with React Router, conditional rendering, and responsive design principles.',
    link: 'https://zoo-assignment.vercel.app/',
    github: 'https://github.com/sabawaheed27/aussie-animal-atlas',
  },
  {
    title: 'React-API-Fetching',
    description: 'Find random recipes using an API.',
    link: 'https://react-api-fetching-oxll.vercel.app/',
    github: 'https://github.com/sabawaheed27/React-API-Fetching',
  },
];


export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 text-center"
      >
        Projects
      </motion.h3>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="border p-6 rounded-xl shadow-md bg-white dark:bg-gray-800 hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
            <a href={project.link} className="text-blue-500 mr-4" target="_blank">Live Demo</a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub ↗
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}