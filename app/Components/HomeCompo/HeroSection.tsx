"use client";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center px-4 py-16 md:py-20">
      {/* Increased gap between contents */}
      <div className="w-full  space-y-16">
        {/* Top Pill CTA */}
        <div className="flex justify-center ">
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
        <div className="text-center max-w-4xl mx-auto  px-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[55px] font-bold mb-8 leading-tight text-center">
            <span className="block">
              Make Technology Work for Your
            </span>
            <span className="block">
              Business with{" "}
              <span className="text-[#57BFFF]">
                Sanad Tech
              </span>
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

          {/* Learn More button */}
          <button
            onClick={() => {
              const el = document.getElementById("services-grid");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="group flex items-center gap-3 border border-gray-600 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer text-[15px] w-auto mx-auto sm:mx-0"
          >
            Learn More
            <span className="relative flex items-center justify-center">
              <span className="absolute w-7 h-7 rounded-full bg-white/10 group-hover:bg-black/10 transition"></span>
              <FiArrowRight
                size={18}
                className="relative z-10 transition-transform duration-300 "
              />
            </span>
          </button>
        </div>

        {/* Description below buttons */}
        <div className="text-center max-w-2xl mx-auto px-4">
          <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed pt-5">
            We help you solve challenges, improve efficiency, and build the
            right technology foundation for lasting growth.
          </p>
        </div>
      </div>
    </section>
  );
}
