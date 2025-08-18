"use client";

import { FiArrowRight } from "react-icons/fi";
import { videos } from "../../../Const";
import { useRouter } from "next/navigation";

export default function AboutHero() {
  const router = useRouter();
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center px-6 md:px-12 py-20 md:py-28">
      <div className="w-full space-y-20">
        {/* Top Pill CTA */}
        <div className="flex justify-center mt-4">
          <div
            onClick={() => {
              const el = document.getElementById("ai-roadmap");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-3 border border-[#57BFFF] rounded-full px-6 py-3 text-sm md:text-base cursor-pointer hover:bg-[#57BFFF]/10 transition"
          >
            <span className="font-bold text-white">Looking for AI?</span>
            <span className="text-white">|</span>
            <span className="flex items-center gap-2 font-medium text-[#9D9D9D]">
              Click Here
              <FiArrowRight
                size={18}
                className="relative z-10 text-[#9D9D9D] group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mx-auto px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[58px] font-extrabold mb-10 leading-tight">
            Who We Are &amp; Why We Do It
          </h1>
        </div>

                {/* Description */}
        <div className="text-center max-w-4xl mx-auto px-4">
          <p className="text-[#808080] text-lg md:text-xl lg:text-2xl leading-relaxed ">
            At Sanad Technologies, we turn ideas into solutions that work in the real
            world. Our team combines tech expertise with business know-how to help you
            build, innovate, and grow. From apps and AI to cloud and process
            optimization, we make technology simple, effective, and tailored to you.
          </p>
        </div>


        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
          {/* Let's Talk button */}
          <button
            onClick={() => router.push("/contact#contact-form")}
            className="bg-[#57BFFF] text-white font-semibold px-8 py-4 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer text-base md:text-lg w-auto mx-auto sm:mx-0"
          >
            Let&apos;s Talk
          </button>

          {/* Learn More button */}
          <button
            onClick={() => {
              const el = document.getElementById("our-story");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-3 border border-gray-600 px-7 py-3.5 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer text-[15px] w-auto mx-auto sm:mx-0"
          >
            Learn More
            <span className="relative flex items-center justify-center">
              <span className="absolute w-8 h-8 rounded-full bg-white/10 group-hover:bg-black/10 transition"></span>
              <FiArrowRight
                size={22}
                className="relative z-10 transition-transform duration-300"
              />
            </span>
          </button>
        </div>


        {/* Hero Video */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden h-[280px] sm:h-[380px] md:h-[480px] lg:h-[560px] shadow-lg">
          <video
            src={videos.aboutHero}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
