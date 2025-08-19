"use client";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();
  return (
    <section className="relative bg-black text-white min-h-screen flex items-center px-6 md:px-12  py-16 md:py-20 w-full">
      {/* Keep consistent spacing */}
      <div className="w-full space-y-20">
        {/* Top Pill CTA */}
{/* Top Pill CTA */}
<div className="flex justify-center mt-8 sm:mt-4">
  <div
    onClick={() => {
      const el = document.getElementById("ai-roadmap");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }}
    className="group inline-flex items-center gap-3 border border-[#57BFFF] rounded-full px-6 py-3 text-sm md:text-base cursor-pointer hover:bg-[#57BFFF]/10 transition-colors duration-300"
  >
    <span className="font-bold text-white transition-colors duration-300">
      Looking for AI?
    </span>
    <span className="text-white transition-colors duration-300">|</span>
    <span className="flex items-center gap-2">
      <span className="font-medium text-[#9D9D9D] group-hover:text-white group-hover:font-bold transition-all duration-300 ease-in-out">
        Click Here
      </span>
      <FiArrowRight
        size={18}
        className="relative z-10 text-[#9D9D9D] transition-transform duration-300 group-hover:translate-x-1"
      />
    </span>
  </div>
</div>


        {/* Heading */}
        <div className="text-center mx-auto px-2 sm:px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-[58px] font-extrabold leading-tight">
            <span className="block">Make Technology Work for Your</span>
            <span className="block">
              Business with <span className="text-[#57BFFF]">Sanad Tech</span>
            </span>
          </h1>
        </div>

        {/* Buttons */}
<div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
  {/* Let's Talk button */}
  <button
    onClick={() => router.push("/contact#contact-form")}
    className="bg-[#57BFFF] text-white font-semibold px-7 py-3 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer text-[15px] md:w-auto mx-auto sm:mx-0 w-full min-w-[160px]"
  >
    Let&apos;s Talk
  </button>

  {/* Learn More button */}
  <button
    onClick={() => {
      const el = document.getElementById("services-grid");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }}
    className="group flex items-center justify-center sm:justify-start gap-3 border border-gray-600 px-7 py-3 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer text-[15px] md:w-auto mx-auto sm:mx-0 w-full min-w-[160px]"
  >
    {/* Text stays centered on mobile */}
    <span className="flex-1 text-center sm:flex-none">Learn More</span>

    {/* Arrow always at end */}
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
        <div className="text-center max-w-3xl mx-auto px-2 sm:px-4">
          <p className="text-[#808080] text-base sm:text-lg md:text-xl leading-relaxed">
            We help you solve challenges, improve efficiency, and build the
            right <br /> technology foundation for lasting growth.
          </p>
        </div>
      </div>
    </section>
  );
}
