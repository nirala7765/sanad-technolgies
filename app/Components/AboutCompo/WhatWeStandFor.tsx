// app/Components/AboutCompo/WhatWeStandFor.tsx
"use client";
import { useState } from "react";
import { FaFlask, FaHandshake } from "react-icons/fa";
import { MdOutlineRocketLaunch } from "react-icons/md";

const THEME_COLOR = "#57BFFF";

const blocks = [
  {
    id: 1,
    title: "Mission",
    text: "Empower businesses with simple, effective, and lasting technology solutions that drive real results for clients.",
    icon: <FaFlask size={36} />,
  },
  {
    id: 2,
    title: "Vision",
    text: "Be the trusted technology partner that turns ideas into innovations and challenges into growth.",
    icon: <MdOutlineRocketLaunch size={36} />,
  },
  {
    id: 3,
    title: "Values",
    text: "Client-first, transparent, and committed to excellence — delivering solutions that last and scale.",
    icon: <FaHandshake size={36} />,
  },
];

export default function WhatWeStandFor() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section
      className="
        bg-black text-white
        lg:h-[100svh] h-auto
        flex flex-col items-center justify-center
        px-4 py-10
      "
    >
      <h2
        className="
          text-3xl md:text-5xl lg:text-7xl
          font-bold mb-8 lg:mb-28 text-center
        "
      >
        What We Stand For
      </h2>

      <div
        className="
          grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
          gap-6 lg:gap-8 w-full max-w-6xl
        "
      >
        {blocks.map((block) => {
          const isActive = block.id === activeId;

          return (
            <div
              key={block.id}
              onClick={() => setActiveId(block.id)}
              className={`
                cursor-pointer rounded-lg
                p-6 md:p-7 lg:p-8
                bg-[#1A1A1A] transition-all duration-300 border-2
                flex flex-col justify-between
                ${isActive
                  ? `border-[${THEME_COLOR}]`
                  : "border-transparent hover:border-gray-600"
                }
                lg:w-[380px] lg:h-[435px]
                w-full h-auto
                mx-auto md:mx-0
              `}
            >
              {/* Top section: Icon + Title */}
              <div className="flex flex-col gap-3 md:gap-4">
                <div
                  className={`transition-colors duration-300 ${
                    isActive ? `text-[${THEME_COLOR}]` : "text-white"
                  }`}
                >
                  {block.icon}
                </div>
                <h3 className="text-xl md:text-2xl lg:text-4xl font-bold">
                  {block.title}
                </h3>
              </div>

              {/* Middle section: Description */}
              <p className="text-sm md:text-base text-gray-300 leading-relaxed my-3 md:my-4 flex-grow">
                {block.text}
              </p>

              {/* Bottom section: Number */}
              <span
                className={`
                  text-3xl md:text-5xl lg:text-7xl
                  font-light transition-colors duration-300
                  ${isActive ? `text-[${THEME_COLOR}]` : "text-gray-500"}
                `}
              >
                {String(block.id).padStart(2, "0")}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
