"use client";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function ServiceHero() {
  const router = useRouter();
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col justify-start px-4 pt-[120px] pb-16 md:pt-[140px] md:pb-20">
      <div className="w-full">
        {/* Top Pill CTA */}
        <div className="flex justify-center mb-12">
          <div 
            onClick={()=>router.push("/#ai-roadmap")}
            className="group inline-flex items-center gap-3 border border-[#57BFFF] rounded-full px-5 py-2 text-sm md:text-base cursor-pointer hover:bg-[#57BFFF]/10 transition">
            <span className="font-medium text-white">Looking for AI?</span>
            <span className="text-[#9D9D9D]">|</span>
            <span className="flex items-center gap-2 font-medium text-[#9D9D9D]">
              Click Here
              <span className="relative flex items-center justify-center">
                <FiArrowRight
                  size={16}
                  className="relative z-10 text-[#9D9D9D]"
                />
              </span>
            </span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-snug">
            Explore What We Can Do for You
          </h1>
        </div>

        {/* Description */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-[#808080] text-[18px] md:text-base leading-relaxed pt-5">
            Explore tailored solutions from intelligent platforms to scalable
            operations designed to help your business innovate faster, operate
            smarter, and compete stronger.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8 flex-wrap">
          {/* Let's Talk button */}
          <button 
            onClick={() => router.push("/contact#contact-form")}
            className="bg-[#57BFFF] text-white font-semibold px-6 py-3 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer text-[15px]">
            Let&apos;s Talk
          </button>

          {/* About Us button */}
          <button 
            onClick={()=> router.push("/about")}
            className="group flex items-center gap-3 border border-gray-600 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer text-[15px]">
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

        {/* Large Video */}
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden md:h-[441px] md:pt-11">
          <video
            src="/sanad-vid.mp4" // place your video inside public/ folder
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
