"use client";
import { FiArrowRight } from "react-icons/fi";

export default function CareersHero() {
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center px-4 py-16 md:py-20">
      <div className="w-full">


        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-snug">
            Build Your Future with <br />{" "}
            <span className="text-[#57BFFF]">Sanad Technologies</span>
          </h1>
        </div>

        {/* Description below buttons */}
        <div className="text-center max-w-2xl mx-auto pb-24">
          <p className="text-gray-400 text-[18px] md:text-base leading-relaxed pt-5">
            Join a team where innovation thrives, ideas matter, and your work
            shapes the way businesses succeed.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8 flex-wrap">
          {/* Get In Touch */}
          <button className="bg-[#57BFFF] text-white font-semibold px-6 py-3 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer text-[15px]">
            Get In Touch
          </button>

          {/* About Us */}
          <button className="group flex items-center gap-3 border border-gray-600 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer text-[15px]">
            About Us
            <span className="relative flex items-center justify-center">
              <span className="absolute w-7 h-7 rounded-full bg-white/10 group-hover:bg-black/10 transition"></span>
              <FiArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
