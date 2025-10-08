
"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ContactForm from "./contactForm";


const Footer = () => {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const currentYear = new Date().getFullYear();
  const yourName = "Saba Waheed";

  return (
    <footer className="text-gray-800 mt-12 border-gray-100">
      <div className="max-w-xl mx-auto p-6">
        {status === "success" ? (
          <div className="bg-green-100 text-green-700 rounded-lg p-4 mb-4 shadow-sm text-center">
            <h2 className="text-xl font-semibold mb-1">Thank you!</h2>
            <p>Your message has been sent successfully. I’ll get back to you soon.</p>
          </div>
        ) : (
          <ContactForm onSuccess={() => setStatus("success")} />
        )}

        {/* Social Links + Name */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 border-t pt-4">
          <div className="flex space-x-4 mb-3 md:mb-0">
            <a
              href="https://github.com/sabawaheed27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition">
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/notifications/?filter=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaLinkedin size={22} />
            </a>
          </div>

          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-right">
            &copy; {currentYear} {yourName}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
