"use client";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Image from "next/image";
import { sections } from "../../../Const";
import { useRouter } from "next/navigation";

export default function Innovation() {
  const router = useRouter();
  return (
    <section className="bg-black text-white px-6 md:px-12 py-12">
      {/* Heading */}
      <div className="text-center mx-auto mb-16 max-w-4xl space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          Ignite Your Potential with AI-Driven Innovations
        </h2>
        <p className="text-[#A0A0A0] text-base md:text-lg">
          Fuel your business growth with AI solutions that are dynamic, adaptive, and tailored to match your ambitions.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-12">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 py-8 ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Container */}
            <div
              className={`w-full md:w-1/2 flex-shrink-0 flex ${
                idx % 2 === 0 ? "justify-center md:justify-end" : "justify-center md:justify-start"
              }`}
            >
              <div className="relative w-full max-w-lg md:h-[32rem] h-80 rounded-xl overflow-hidden shadow-md">
                <Image
                  src={sec.img}
                  alt={sec.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4">
              {/* Title */}
              <div className=" items-center gap-4 mb-4">
                <div className="w-28 h-28 flex items-center justify-start p-2 left-0">
                  <Image
                    src={sec.icon}
                    alt={`${sec.title} icon`}
                    width={50}
                    height={50}
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold">{sec.title}</h3>
              </div>

              {/* Description */}
              <p className="text-[#E0E0E0] text-sm md:text-base leading-relaxed m">
                {sec.description}
              </p>

              {/* Points */}
              <ul className="space-y-5 mt-3">
                {sec.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-3 text-[#FFFFFF] text-sm md:text-base"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1E1E1E]">
                      <FiCheck className="text-white text-xs md:text-sm" />
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => router.push("/contact#contact-form")}
                className="bg-[#57BFFF] hover:bg-[#3ba7dd] text-white font-medium px-6 py-3 rounded-xl cursor-pointer mt-3 flex items-center gap-2 transition-all duration-300 w-max"
              >
                Get Started
                <FiArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
