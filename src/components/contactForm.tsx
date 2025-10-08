"use client";

import React, { useState } from "react";

interface ContactFormProps {
  onSuccess: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        form.reset();
        onSuccess(); // ✅ SAFE: called after fetch, not during render
      } else {
        const data = await response.json();
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      action="https://formspree.io/f/mwprqzjy"
      method="POST"
      onSubmit={handleSubmit}
      className="rounded-lg p-6 shadow-sm border">
      <h2 className="text-xl font-semibold mb-4 text-white text-center">
        Contact Me
      </h2>

      <label className="block mb-3 text-white text-sm">
        Name:
        <input
          type="text"
          name="name"
          required
          className="w-full p-2 mt-1 rounded border border-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
      </label>

      <label className="block mb-3 text-white text-sm">
        Email:
        <input
          type="email"
          name="email"
          required
          className="w-full p-2 mt-1 rounded border border-gray-100 focus:ring-2 focus:ring-blue-400 focus:outline-none"/>
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

      {error && <p className="text-red-400 text-sm mb-2">{error}</p>}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-blue-500 text-white p-2 rounded transition font-medium ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
