"use client";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Image from "next/image";
import { sections } from "../../../Const";
import { useRouter } from "next/navigation";

export default function Innovation() {
  const router = useRouter();
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-11">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          Ignite Your Potential with AI-Driven Innovations
        </h2>
        <p className="mt-4 text-[#808080]">
          Fuel your business growth with AI solutions that are dynamic, adaptive, and tailored to match your ambitions.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 py-8 md:py-12 rounded-2xl ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image Container */}
            <div
              className={`w-full md:w-[50%] flex-shrink-0 flex ${
                idx % 2 === 0
                  ? "justify-center md:justify-end" // if image is on the right
                  : "justify-center md:justify-start" // if image is on the left
              }`}
            >
              <div className="relative w-full max-w-[513px] md:h-[650px] h-[300px] rounded-xl overflow-hidden">
                <Image
                  src={sec.img}
                  alt={sec.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-xl"
                  sizes="(max-width: 768px) 100vw, 513px"
                />
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-[50%] flex flex-col justify-center ">
              <div className="flex items-center gap-3 mb-4 space-y-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full mt-6">
                  <Image
                    src={sec.icon}
                    alt={`${sec.title} icon`}
                    width={80}
                    height={80}
                  />
                </div>
                <h3 className="text-xl md:text-3xl font-semibold">
                  {sec.title}
                </h3>
              </div>

              <p className="text-white text-2xl mb-6 ">{sec.description}</p>

              {/* Points */}
              <ul className="space-y-6 mb-6 mt-6">
                {sec.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-3 text-[#FFFFFF] text-xl"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#1E1E1E]">
                      <FiCheck className="text-white text-sm" />
                    </span>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => router.push("/contact#contact-form")}
                className="bg-[#57BFFF] hover:bg-[#3ba7dd] text-white font-semibold px-6 py-3 rounded-2xl cursor-pointer flex items-center gap-2 transition-all duration-300 group w-max mt-6"
              >
                Get Started
                <FiArrowRight
                  size={16}
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
