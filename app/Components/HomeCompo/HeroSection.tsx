"use client";
import { FiArrowRight } from "react-icons/fi";
import Image from "next/image";

export default function ServiceHero() {
  return (
    <section className="relative bg-black text-white px-4 md:py-20">
      <div className="pt-[100px]">
        {/* Top Pill CTA */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-3 border border-[#57BFFF] rounded-full px-4 py-2 text-sm md:text-base cursor-pointer hover:bg-[#57BFFF]/10 transition">
            <span className="text-gray-300">Looking for AI?</span>
            <span className="flex items-center gap-1 text-gray-200 font-medium">
              Click Here <FiArrowRight size={16} />
            </span>
          </div>
        </div>

        {/* Heading + Description */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Explore What We Can Do for You
          </h1>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Explore tailored solutions from intelligent platforms to scalable operations
            designed to help your business innovate faster, operate smarter, and compete stronger.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 flex-wrap">
          {/* Let's Talk button */}
          <button className="bg-[#57BFFF] text-black font-semibold px-6 py-3 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer">
            Let&apos;s Talk
          </button>

          {/* About Us button */}
          <button className="group flex items-center gap-2 border border-gray-500 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer">
            Learn More
            <FiArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        <div>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed text-center justify-center lg:pb-48">We help you solve challenges, improve efficiency, and build the right technology foundation for lasting growth.</p>

        </div>

        {/* Large Image */}
        <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/bgfa.png"
            alt="Service Hero"
            width={1920}
            height={1080}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
