
"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

function ProfileImage() {
  return (
    <img
      src="/saba.jpg"
      alt="Saba profile"
      className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-700"/>
  );
}

function StatusIndicator({ status }: { status: string }) {
  return (
    <div className="flex items-center space-x-2 mb-4">
      <span className="w-3 h-3 rounded-full bg-green-500"></span>
      <span className="text-sm text-gray-600 dark:text-gray-300">{status}</span>
    </div>
  );
}

export default function HeroBanner() {
  return (
    <section className="w-full md:w-3/4 lg:w-2/4 py-24 mx-auto flex flex-col items-start">
      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <ProfileImage />
      </motion.div>

      {/* Status */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}>
        <StatusIndicator status="Available for Work" />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 1, duration: 1, ease: "easeOut" }}
        className="font-jet text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter dark:text-white my-2">
        Saba Waheed
      </motion.h1>

      {/* Subtitle + TypeAnimation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="space-y-2">
        <h2 className="font-jet text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight dark:text-gray-200">
          Frontend Developer
        </h2>

        <TypeAnimation
          sequence={[
            "Next Enthusiast",
            2000,
            "Creative Problem Solver",
            2000,
            "Always Learning",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="block text-md sm:text-lg md:text-xl text-gray-700 dark:text-gray-300"/>

        <p className="text-sm md:text-lg text-[#767676] max-w-xl md:max-w-2xl py-2 leading-6">
          I’m a web development student passionate about building creative and
          user-friendly applications. With a background in design and a strong
          eye for detail, I enjoy transforming ideas into clean and responsive
          digital experiences.
        </p>
      </motion.div>

      
    </section>
  );
}
