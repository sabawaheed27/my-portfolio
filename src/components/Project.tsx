"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const projects = [
  {
    title: "MealMate",
    description:
      "MealMate is a recipe discovery web app built with Next.js 15, TypeScript, and Tailwind CSS. It fetches data from TheMealDB API and lets users browse categories, view recipe details, and explore new meals.",
    link: "https://mealmate-pied.vercel.app/",
    github: "https://github.com/sabawaheed27/mealmate",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
    image: "/images/mealmate.png",
  },
  {
    title: "Next TS Fact Fetcher",
    description:
      "Single-page app that fetches and displays random fun facts with a stylish SCSS layout.",
    link: "https://next-ts-fact-fetcher.vercel.app/",
    github: "https://github.com/sabawaheed27/next-ts-fact-fetcher",
    tech: ["Next.js", "TypeScript", "SCSS"],
    image: "/images/fact-fetcher.png",
  },
  {
    title: "Aussie Animal Atlas",
    description:
      "A React-powered zoo explorer showcasing mammals, birds, and reptiles. Built with React Router, conditional rendering, and responsive design principles.",
    link: "https://zoo-assignment.vercel.app/",
    github: "https://github.com/sabawaheed27/aussie-animal-atlas",
    tech: ["React", "React Router", "CSS"],
    image: "/images/aussie-atlas.png",
  },
  {
    title: "React API Fetching",
    description: "Find random recipes using an API.",
    link: "https://react-api-fetching-oxll.vercel.app/",
    github: "https://github.com/sabawaheed27/React-API-Fetching",
    tech: ["React", "API", "CSS"],
    image: "/images/react-api.png",
  },
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24">
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-4xl font-extrabold text-center mb-12 text-white">
        Projects
      </motion.h3>

      {/* Swiper */}
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  spaceBetween={20} // smaller space
  slidesPerView={1}
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }, // show 3 on desktop
  }}
  navigation
  pagination={{ clickable: true }}
  autoplay={{ delay: 5000, disableOnInteraction: false }}
  loop
  className="max-w-6xl mx-auto py-10">

        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-black transition-all duration-300 hover:shadow-2xl flex flex-col "
            >
              {/* Image */}
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"/>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={project.link}
                    target="_blank"
                    className="text-white font-semibold bg-black px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                    View Project
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="text-xl font-semibold mb-2 capitalize text-black dark:text-white">
                  {project.title}
                </h4>
                <p className="text-gray-400 dark:text-gray-300 line-clamp-2 mb-4">
                  {project.description}
                </p>

                <div className="flex-grow" />

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-700 rounded-full text-black dark:text-white">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white text-sm rounded-lg hover:bg-gray-800 transition">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 text-white text-sm rounded-lg hover:bg-black transition">
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper controls fix */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important
         
  top: 50% !important;;
        }
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: white !important;
          opacity: 1;
        }
      `}</style>
    </motion.section>
  );
}

