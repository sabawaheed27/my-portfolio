
"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const projects = [
  {
    title: "MealMate",
    link: "https://mealmate-pied.vercel.app/",
    github: "https://github.com/sabawaheed27/mealmate",
    image: "/images/mealmate.png",
  },
  {
    title: "npm-Multipage-website",
    link: "https://npm-multipage-website.vercel.app/",
    github: "https://github.com/sabawaheed27/npm-Multipage-website.git",
    image: "/images/travelguide.png",
  },
  {
    title: "Aussie Animal Atlas",
    link: "https://zoo-assignment.vercel.app/",
    github: "https://github.com/sabawaheed27/aussie-animal-atlas",
    image: "/images/aussie-atlas.png",
  },

  {
  title: "API-Project",
  link: "https://api-project-steel.vercel.app/",
  github: "https://github.com/sabawaheed27/API-Project.git",
  image: "/images/flags.png",
},
{
  title: "Frontend_hangman",
  link: "https://frontend-hangman.vercel.app/",
  github: "https://github.com/sabawaheed27/Frontend_hangman.git",
  image: "/images/hangman.png",
},
];

export default function Projects() {
  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="py-24 max-w-5xl mx-auto px-6"
    >
      {/* Heading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-extrabold mb-16 text-white text-center"
      >
        My work
      </motion.h3>
      {/* Subtitle / description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-gray-400 max-w-2xl mx-auto text-center mb-16">
        A collection of projects that highlight my journey as a developer from
        simple apps to full-featured web applications, showcasing problem-solving,
        creativity, and technical growth.
      </motion.p>

      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 }, // show 2 at a time on tablet+
        }}

        pagination={{ clickable: true }}
        loop
        className="pb-12">
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative overflow-hidden ">
              {/* Image */}
              <div className="relative h-56 sm:h-64 md:h-72 lg:h-80">
                <h3 className="text-xl sm:text-2xl md:text-3xl mb-4 font-bold text-white">{project.title}</h3>

                <img
                  src={project.image}
                  alt={project.title}
                  className=" h-full object-cover" />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 flex items-center justify-center transition">
                  <a

                    target="_blank"
                    className="px-5 py-2 bg-black text-white rounded-lg flex items-center gap-2 hover:bg-gray-800 transition">
                    <ExternalLink size={16} /> Live Site
                  </a>
                </div>
              </div>

              {/* Title + Repo */}


              <div className="p-6 flex justify-end items-center">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 mt-8  text-white rounded-lg hover:bg-black transition">
                  <Github size={14} /> Repo
                </a>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Style overrides for navigation buttons */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
          top: 40% !important;
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
