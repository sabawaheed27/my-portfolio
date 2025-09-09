
"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <motion.section 
      id="hero"
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-800 dark:via-gray-900 dark:to-black px-4">
      <motion.img
        src="/saba.jpg"
        alt="Saba profile"
        className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover mb-6 border-4 border-white dark:border-gray-700"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}/>
      <motion.h2 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white">
        Hi, I&apos;m Saba
      </motion.h2>

      <TypeAnimation
        sequence={[
          "Frontend Developer",
          2000,
          "Creative Thinker",
          2000,
          "UI/UX Enthusiast",
          2000,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-md sm:text-lg md:text-2xl text-gray-700 dark:text-gray-300"/>
    </motion.section>
  );
}