"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react"; // icons

const projects = [
  {
    title: "mealmate",
    description:
      "MealMate is a recipe discovery web app built with Next.js 15, TypeScript, and Tailwind CSS. It fetches data from TheMealDB API and lets users browse categories, view recipe details, and explore new meals.",
    link: "https://mealmate-pied.vercel.app/",
    github: "https://github.com/sabawaheed27/mealmate",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
    image: "/images/mealmate.png",
  },
  {
    title: "next-ts-fact-fetcher",
    description:
      "Single-page app that fetches and displays random fun facts with a stylish SCSS layout.",
    link: "https://next-ts-fact-fetcher.vercel.app/",
    github: "https://github.com/sabawaheed27/next-ts-fact-fetcher",
    tech: ["Next.js", "TypeScript", "SCSS"],
    image: "/images/fact-fetcher.png",
  },
  {
    title: "aussie-animal-atlas",
    description:
      "A React-powered zoo explorer showcasing mammals, birds, and reptiles. Built with React Router, conditional rendering, and responsive design principles.",
    link: "https://zoo-assignment.vercel.app/",
    github: "https://github.com/sabawaheed27/aussie-animal-atlas",
    tech: ["React", "React Router", "CSS"],
    image: "/images/aussie-atlas.png",
  },
  {
    title: "React-API-Fetching",
    description: "Find random recipes using an API.",
    link: "https://react-api-fetching-oxll.vercel.app/",
    github: "https://github.com/sabawaheed27/React-API-Fetching",
    tech: ["React", "API", "CSS"],
    image: "/images/react-api.png",
  },
];

// Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent"
      >
        Projects
      </motion.h3>

      {/* Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        variants={containerVariants}
      >
        {projects.map((project, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-900 transition-all duration-300 hover:shadow-2xl flex flex-col min-h-[460px]"
          >
            {/* Image with overlay */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-white font-semibold bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  View Project
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-2xl font-semibold mb-2 capitalize">
                {project.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                {project.description}
              </p>

              {/* Spacer pushes tags & buttons to bottom */}
              <div className="flex-grow" />

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white text-sm rounded-lg hover:bg-blue-600 transition"
                >
                  <ExternalLink size={16} /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-black transition"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
