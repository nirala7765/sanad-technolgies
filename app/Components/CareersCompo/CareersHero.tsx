"use client";
import { FiArrowRight } from "react-icons/fi";

export default function CareersHero() {
  return (
    <section className="flex flex-col justify-center items-center text-center bg-black text-white min-h-[100svh] px-6">
      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Build Your Future with <br className="hidden sm:block" /> Sanad Technologies
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-400 max-w-xl text-sm sm:text-base">
        Join a team where innovation thrives, ideas matter, and your work shapes the way businesses succeed.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        {/* Get In Touch */}
        <a
          href="#contact"
          className="bg-[#2A9FFF] hover:bg-[#1f8bd6] text-white font-semibold px-6 py-3 rounded-2xl cursor-pointer transition"
        >
          Get In Touch
        </a>

        {/* About Us */}
        <a
          href="#about"
          className="group border border-gray-500 px-6 py-3 rounded-2xl font-semibold flex items-center gap-2 cursor-pointer hover:bg-white hover:text-black transition"
        >
          About Us
          <FiArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>
      </div>
    </section>
  );
}
