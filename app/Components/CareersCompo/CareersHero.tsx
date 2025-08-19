"use client";

import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import React from "react";

export default function CareersHero(): React.ReactElement {
  const router = useRouter();

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center px-6 md:px-12 py-16 md:py-20">
      <div className="w-full space-y-16">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold mb-10 leading-tight">
            <span className="block">Build Your Future with</span>
            <span className="block">
              <span className="text-[#57BFFF]">Sanad Technologies</span>
            </span>
          </h1>
        </div>

        {/* Description below buttons */}
        <div className="text-center max-w-2xl mx-auto px-6">
          <p className="text-[#808080] text-base sm:text-lg md:text-xl leading-relaxed ">
            Join a team where innovation thrives, ideas matter, and your work
            shapes the way businesses succeed.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap px-4">
          <button
            onClick={() => router.push("/contact#contact-form")}
            className="bg-[#57BFFF] text-white font-semibold px-7 py-3 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer text-[15px] w-auto mx-auto sm:mx-0"
          >
            Get In Touch
          </button>

          <button
            onClick={() => router.push("/about")}
            className="group flex items-center gap-3 border border-gray-600 px-7 py-3.5 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer text-[15px] w-auto mx-auto sm:mx-0"
          >
            About Us
            <span className="relative flex items-center justify-center">
              <span className="absolute w-7 h-7 rounded-full bg-white/10 group-hover:bg-black/10 transition"></span>
              <FiArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300"
              />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
