
"use client"

import { useState } from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
    const [status, setStatus] = useState<"idle" | "success">("idle")
    const currentYear = new Date().getFullYear()
    const yourName = "Saba Waheed"

    if (status === "success") {
        return (
            <footer className="bg-white text-gray-800 mt-12 border-t border-gray-200">
                <div className="max-w-4xl mx-auto text-center p-6">
                    <div className="bg-green-100 text-green-700 rounded-lg p-4 mb-4 shadow-sm">
                        <h2 className="text-xl font-semibold mb-1">Thank you!</h2>
                        <p>Your message has been sent successfully. I’ll get back to you soon. ✅</p>
                    </div>

                    <div className="flex justify-center space-x-4 mb-3">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500 transition"
                        >
                            <FaGithub size={22} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 transition"
                        >
                            <FaLinkedin size={22} />
                        </a>
                    </div>

                    <p className="text-sm text-gray-500">
                        &copy; {currentYear} {yourName}. All rights reserved.
                    </p>
                </div>
            </footer>
        )
    }

    return (
        <footer className=" text-gray-800 mt-12 border-gray-100">
            <div className="max-w-xl mx-auto p-6">
                <form
                    action="https://formspree.io/f/mwprqzjy" // your Formspree link
                    method="POST"
                    onSubmit={() => setStatus("success")}
                    className="rounded-lg p-6 shadow-sm border "
                >
                    <h2 className="text-xl font-semibold mb-4 text-white text-center">Contact Me</h2>

                    <label className="block mb-3  text-white text-sm">
                        Name:
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full p-2 mt-1 rounded border border-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </label>

                    <label className="block mb-3  text-white text-sm">
                        Email:
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full p-2 mt-1 rounded border border-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                    </label>

                    <label className="block mb-4 text-white text-sm">
                        Message:
                        <textarea
                            name="message"
                            rows={4}
                            required
                            className="w-full p-2 mt-1 rounded border border-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
                        ></textarea>
                    </label>

                    <button
                        type="submit"
                        className=" bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition font-medium"
                    >
                        Send Message
                    </button>
                </form>

                {/* Social Links + Name */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 border-t pt-4">
                    <div className="flex space-x-4 mb-3 md:mb-0">
                        <a
                            href="https://github.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-blue-500 transition"
                        >
                            <FaGithub size={22} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yourusername"
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
    )
}

export default Footer
