"use client";

import { FiArrowRight } from "react-icons/fi";
import { videos } from "../../../Const";
import { useRouter } from "next/navigation";

export default function AboutHero() {
  const router = useRouter();
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col justify-start px-4 sm:px-8 pt-[100px] pb-12 md:pt-[120px] md:pb-16">
      {/* Top Pill CTA */}
      <div className="flex justify-center mb-6"> {/* reduced mb-12 → mb-6 */}
        <div 
        
          onClick={()=>router.push("/#ai-roadmap")}

          className="group inline-flex items-center gap-3 border border-[#57BFFF] rounded-full px-5 py-2 text-sm md:text-base cursor-pointer hover:bg-[#57BFFF]/10 transition">
          <span className="font-medium text-white">Looking for AI?</span>
          <span className="text-[#9D9D9D]">|</span>
          <span className="flex items-center gap-2 font-medium text-[#9D9D9D]">
            Click Here
            <span className="relative flex items-center justify-center">
              <FiArrowRight size={16} className="relative z-10 text-[#9D9D9D]" />
            </span>
          </span>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-6"> {/* reduced mb-12 → mb-6 */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug"> {/* reduced mb-8 → mb-4 */}
          Who We Are &amp; Why We Do It
        </h1>
      </div>

      {/* Description */}
      <div className="text-center max-w-2xl mx-auto mb-6"> {/* reduced mb-10 → mb-6 */}
        <p className="text-gray-400 text-[18px] md:text-base leading-relaxed">
          At Sanad Technologies, we turn ideas into solutions that work in the real
          world. Our team combines tech expertise with business know-how to help you
          build, innovate, and grow. From apps and AI to cloud and process
          optimization, we make technology simple, effective, and tailored to you.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 flex-wrap"> {/* reduced gap-6 → gap-4, mb-12 → mb-8 */}
        <button 
          onClick={() => router.push("/contact#contact-form")}
          className="bg-[#57BFFF] text-white font-semibold px-6 py-3 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer text-[15px]">
          Let&apos;s Talk
        </button>
        <button 
           onClick={() => {
              const el = document.getElementById("our-story");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          className="group flex items-center gap-3 border border-gray-600 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer text-[15px]">
          Learn More
          <span className="relative flex items-center justify-center">
            <span className="absolute w-7 h-7 rounded-full bg-white/10 group-hover:bg-black/10 transition"></span>
            <FiArrowRight
              size={18}
              className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
            />
          </span>
        </button>
      </div>

      {/* Hero Video */}
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden h-[441px] w-full">
        <video
          src={videos.aboutHero}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
