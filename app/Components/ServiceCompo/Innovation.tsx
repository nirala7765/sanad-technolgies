"use client";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Image from "next/image";
import { sections } from "../../../Const";
import { useRouter } from "next/navigation";

export default function Innovation() {
  const router = useRouter();
  return (
    <section className="bg-black text-white px-6 md:px-12 py-12 md:pt-50">
      {/* Heading */}
      <div className="text-center  mx-auto mb-20 space-y-8">
        <h2 className="text-3xl md:text-5xl  font-extrabold leading-tight md:px-88">
          Ignite Your Potential with AI-Driven Innovations
        </h2>
        <p className="mt-4 text-[#A0A0A0] text-lg md:text-xl md:px-88">
          Fuel your business growth with AI solutions that are dynamic, adaptive, and tailored to match your ambitions.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-12 lg:gap-20 py-12 md:py-16 rounded-2xl ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Container */}
            <div
              className={`w-full md:w-1/2 flex-shrink-0 flex ${
                idx % 2 === 0
                  ? "justify-center md:justify-end"
                  : "justify-center md:justify-start"
              }`}
            >
              <div className="relative w-full max-w-[540px] md:h-[650px] h-[300px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={sec.img}
                  alt={sec.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 540px"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              {/* Title */}
              <div className=" items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center  p-2">
                  <Image
                    src={sec.icon}
                    alt={`${sec.title} icon`}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-2xl md:text-4xl font-bold">{sec.title}</h3>
              </div>

              {/* Description */}
              <p className="text-[#E0E0E0] text-lg md:text-xl lg:text-2xl leading-relaxed mb-8">
                {sec.description}
              </p>

              {/* Points */}
              <ul className="space-y-5 mb-8">
                {sec.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-4 text-[#FFFFFF] text-base md:text-lg lg:text-xl"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-[#1E1E1E]">
                      <FiCheck className="text-white text-sm" />
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                onClick={() => router.push("/contact#contact-form")}
                className="bg-[#57BFFF] hover:bg-[#3ba7dd] text-white font-semibold px-7 py-4 rounded-2xl cursor-pointer flex items-center gap-3 transition-all duration-300 group w-max"
              >
                Get Started
                <FiArrowRight
                  size={20}
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
