
"use client";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };

  return (
    <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <button
        onClick={scrollToTop}
        className="block mb-4 text-blue-500 hover:underline"
      >
        ⬆ Back to Top
      </button>

      <motion.div
        className="flex justify-center space-x-4 mb-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.a
          href="https://github.com/sabawaheed27"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="text-xl hover:text-blue-500"
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/saba-waheed-0bb188367/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: -10 }}
          whileTap={{ scale: 0.9 }}
          className="text-xl hover:text-blue-500"
        >
          <FaLinkedin />
        </motion.a>
      </motion.div>

      © {new Date().getFullYear()} Saba. All rights reserved.
    </footer>
  );
}
