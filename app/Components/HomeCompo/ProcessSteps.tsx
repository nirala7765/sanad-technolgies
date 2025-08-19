"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PROCESS_STEPS } from "../../../Const";

export default function ProcessSteps() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(PROCESS_STEPS.length - 1);
  const [hoverStep, setHoverStep] = useState<number | null>(null);

  const getIsActive = (index: number) => {
    if (hoverStep !== null) return hoverStep === index;
    return activeStep === index;
  };

  return (
    <section
      id="process-steps"
      className="bg-black text-white w-full px-6 md:px-12 py-12 md:pt-50"
    >
      {/* Heading */}
      <div className="text-center mx-auto mb-16 space-y-8">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          How We Turn Ideas into Impact
        </h2>
        <p className="text-[#808080] text-lg md:px-32">
          A clear, collaborative process that ensures your project is delivered
          on time, on budget, and above expectations.
        </p>
      </div>

      {/* Steps wrapper */}
      <div className="w-full md:border md:border-[#222222] md:rounded-xl md:overflow-hidden md:space-y-0 space-y-6">
        {PROCESS_STEPS.map((step, i) => {
          const isActive = getIsActive(i);

          return (
            <div
              key={i}
              className={`
                flex flex-col md:flex-row items-stretch 
                border-[#222222] transition-all duration-300 
                ${i !== PROCESS_STEPS.length - 1 ? "md:border-b" : ""}
                md:space-y-0 space-y-0
                border border-[#222222] md:border-0
                overflow-hidden
                rounded-xl md:rounded-none   
              `}
              onMouseEnter={() => setHoverStep(i)}
              onMouseLeave={() => setHoverStep(null)}
              onClick={() => setActiveStep(i)}
            >
              {/* Content (centered on mobile) */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-center bg-black space-y-6 text-center md:text-left">
                {/* Phase + Number pill */}
                <div className="inline-flex items-center border border-[#57BFFF] rounded-xl px-3 py-1 text-sm w-fit mx-auto md:mx-0 hover:bg-[#57BFFF]/10 transition-colors">
                  <span className="font-semibold whitespace-nowrap">
                    {step.phase}
                  </span>
                  <span className="mx-3 w-px h-4 bg-gray-500" />
                  <span className="text-[#9D9D9D]">{step.num}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-2xl font-semibold">
                  {step.title}
                </h3>

                {/* Description + Button */}
                <div
                  className={`
                    transition-all duration-500 ease-in-out 
                    md:overflow-hidden 
                    ${isActive ? "md:max-h-56 md:opacity-100" : "md:max-h-0 md:opacity-0"}
                    max-h-full opacity-100
                  `}
                >
                  <div className="space-y-6">
                    <p className="text-[#808080] text-base leading-relaxed">
                      {step.desc}
                    </p>

                    {step.cta && (
                      <button
                        onClick={() => router.push("/contact#contact-form")}
                        className="bg-[#57BFFF] hover:bg-[#42aee6] cursor-pointer text-white px-5 py-2 rounded-xl font-semibold w-fit transition-all duration-300 mx-auto md:mx-0"
                      >
                        {step.cta}
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile: Image at the bottom */}
              <div className="relative w-full md:hidden h-48 sm:h-56 bg-gray-800 overflow-hidden rounded-b-xl">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  priority={i === PROCESS_STEPS.length - 1}
                  className="object-cover"
                />
              </div>

              {/* Desktop image */}
              <div className="relative flex-1 min-h-[180px] md:min-h-[240px] bg-gray-800 overflow-hidden hidden md:block">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  priority={i === PROCESS_STEPS.length - 1}
                  className={`object-cover transition-transform duration-500 ease-in-out ${
                    isActive ? "scale-100" : "scale-105"
                  }`}
                />

                {/* Sliding overlay (desktop only) */}
                <div
                  className={`
                    absolute inset-y-0 right-0
                    w-[55%] md:w-[45%]
                    transition-transform duration-500 ease-in-out
                    pointer-events-none
                    ${isActive ? "translate-x-full" : "translate-x-0"}
                  `}
                >
                  <div className="h-full w-full bg-gradient-to-l from-black/90 via-black/70 to-transparent" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
