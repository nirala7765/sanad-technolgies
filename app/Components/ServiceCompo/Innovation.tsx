"use client";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import Image from "next/image";
import { sections } from "../../../Const";

export default function Innovation() {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Ignite Your Potential with AI-Driven Innovations
        </h2>
        <p className="mt-4 text-gray-400">
          Fuel your business growth with AI solutions that are not only dynamic
          and adaptive but also innovative and tailored to match the scale and
          vision of your ambitions.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {sections.map((sec, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 ${
              idx % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-1">
              <Image
                src={sec.img}
                alt={sec.title}
                width={500}
                height={400}
                className="rounded-xl w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <Image
                src={sec.icon}
                alt={`${sec.title} icon`}
                width={40}
                height={40}
                className="mb-4"
              />
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                {sec.title}
              </h3>
              <p className="text-gray-400 mb-6">{sec.description}</p>

              {/* Points */}
              <ul className="space-y-2 mb-6">
                {sec.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-gray-600">
                      <FiCheck className="text-white text-sm" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              <button className="bg-[#2A9FFF] hover:bg-[#1f8bd6] text-white font-semibold px-6 py-3 rounded-2xl cursor-pointer flex items-center gap-2 transition-all duration-300 group">
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
