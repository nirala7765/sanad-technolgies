// app/Components/AboutCompo/TransformBusiness.tsx
"use client";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function TransformBusiness() {
  return (
    <section className="bg-black text-white flex justify-center px-4 py-10">
      <div
        className="relative rounded-2xl overflow-hidden w-full max-w-6xl min-h-[350px] md:min-h-[450px] lg:min-h-[500px]"
      >
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/bgfa.png" // make sure this is in the /public folder
            alt="Transform Your Business"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />
        </div>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-10 lg:p-14">
          {/* Top right paragraph */}
          <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-lg ml-auto text-right">
            At Sanad Technologies, we believe technology should work for you,
            not against you, that’s why we partner with businesses to design,
            build, and deliver solutions that are as reliable as they are
            innovative, helping you grow today and thrive tomorrow.
          </p>

          {/* Bottom left heading + underline + button */}
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-3xl lg:text-[26px] font-bold max-w-lg border-b border-[#57BFFF] pb-2 inline-block">
              Transform Your Business with Cutting Edge Technology Today!
            </h2>
            

            <button className="mt-4 flex items-center gap-2 text-white font-semibold group cursor-pointer text-xl">
              <span>Get Started</span>
              <FiArrowRight  size={30} className="text-[#57BFFF] group-hover:translate-x-1 transition-transform duration-200 " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
