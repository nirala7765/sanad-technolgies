// app/Components/AboutCompo/TransformBusiness.tsx
"use client";
import { FiArrowRight } from "react-icons/fi";
import { transformBusinessData } from "../../../Const";

export default function TransformBusiness() {
  const { videoSrc, overlayOpacity, paragraph, heading, buttonText } =
    transformBusinessData;

  return (
    <section className="bg-black text-white flex justify-center px-4 py-10">
      <div className="relative rounded-2xl overflow-hidden w-full max-w-6xl min-h-[350px] md:min-h-[450px] lg:min-h-[500px]">
        {/* Background video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark overlay */}
        <div className={`absolute inset-0 ${overlayOpacity}`}></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between h-full p-6 md:p-10 lg:p-14">
          {/* Top right paragraph */}
          <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-lg ml-auto text-right">
            {paragraph}
          </p>

          {/* Bottom left heading + underline + button */}
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl md:text-3xl lg:text-[26px] font-bold max-w-lg border-b border-[#57BFFF] pb-2 inline-block">
              {heading}
            </h2>

            <button className="mt-4 flex items-center gap-2 text-white font-semibold group cursor-pointer text-xl">
              <span>{buttonText}</span>
              <FiArrowRight
                size={30}
                className="text-[#57BFFF] group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
