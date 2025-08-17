"use client";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function ServiceHero() {
  const router = useRouter();
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center px-4 py-16 md:py-20">
      <div className="w-full space-y-16">
        {/* Top Pill CTA */}
        <div className="flex justify-center">
          <div
            onClick={() => {
              const el = document.getElementById("ai-roadmap");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group inline-flex items-center gap-2 border border-[#57BFFF] rounded-full px-5 py-2 text-sm md:text-base cursor-pointer hover:bg-[#57BFFF]/10 transition"
          >
            <span className="font-bold text-white">Looking for AI?</span>
            <span className="text-white">|</span>
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
        <div className="text-center max-w-4xl mx-auto px-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[58px] font-bold mb-8 leading-tight text-center">
            <span className="block">Explore What We Can Do</span>
            <span className="block">
              for Your Business
            </span>
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
          {/* Let's Talk button */}
          <button
            onClick={() => router.push("/contact#contact-form")}
            className="bg-[#57BFFF] text-white font-semibold px-6 py-3 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer text-[15px] w-auto mx-auto sm:mx-0"
          >
            Let&apos;s Talk
          </button>

          {/* About Us button */}
          <button
            onClick={() => router.push("/about")}
            className="group flex items-center gap-3 border border-gray-600 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer text-[15px] w-auto mx-auto sm:mx-0"
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

        {/* Description */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed pt-5">
            Explore tailored solutions — from intelligent platforms to scalable
            operations — designed to help your business innovate faster, operate
            smarter, and compete stronger.
          </p>
        </div>

        {/* Video */}
        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden h-[250px] sm:h-[350px] md:h-[441px]">
          <video
            src="/sanad-vid.mp4"
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
