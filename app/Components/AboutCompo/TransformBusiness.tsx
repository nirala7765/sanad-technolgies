// app/Components/AboutCompo/TransformBusiness.tsx
"use client";
import { FiArrowRight } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { transformBusinessData } from "../../../Const";

export default function TransformBusiness() {
  const router = useRouter();
  const { videoSrc, overlayOpacity, paragraph, heading, buttonText } =
    transformBusinessData;

  return (
    <section className="bg-black text-white flex justify-center px-6 md:px-12  py-14 md:py-20">
      <div className="relative rounded-2xl overflow-hidden w-full min-h-[400px] md:min-h-[520px] lg:min-h-[600px]">
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
        <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-14 lg:p-20">
          {/* Top right paragraph */}
          <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-xl ml-auto text-right leading-relaxed">
            {paragraph}
          </p>

          {/* Bottom left heading + underline + button */}
          <div className="mt-8 md:mt-0">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold max-w-2xl border-b-4 border-[#57BFFF] pb-3 inline-block">
              {heading}
            </h2>

            <button
              onClick={() => router.push("/contact#contact-form")}
              className="mt-6 flex items-center gap-3 text-white font-semibold group cursor-pointer text-lg md:text-xl lg:text-2xl"
            >
              <span>{buttonText}</span>
              <FiArrowRight
                size={34}
                className="text-[#57BFFF] group-hover:translate-x-2 transition-transform duration-200"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
