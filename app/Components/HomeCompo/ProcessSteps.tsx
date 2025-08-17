"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PROCESS_STEPS } from "../../../Const";

export default function ProcessSteps() {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(PROCESS_STEPS.length - 1); // last step active by default
  const [hoverStep, setHoverStep] = useState<number | null>(null);

  const getIsActive = (index: number) => {
    if (hoverStep !== null) return hoverStep === index; // hover overrides click
    return activeStep === index;
  };

  return (
    <section id="process-steps" className="bg-black text-white px-4 py-20">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold">
          How We Turn Ideas into Impact
        </h2>
        <p className="text-[#808080] text-[22px] mt-6">
          A clear, collaborative process that ensures your project is delivered
          on time, on budget, and above expectations.
        </p>
      </div>

      {/* Steps */}
      <div className="max-w-6xl mx-auto border border-[#222222] rounded-2xl overflow-hidden space-y-1">
        {PROCESS_STEPS.map((step, i) => {
          const isActive = getIsActive(i);

          return (
            <div
              key={i}
              className="flex flex-col md:flex-row items-stretch border-b border-[#222222] last:border-b-0 cursor-pointer transition-all duration-300 "
              onMouseEnter={() => setHoverStep(i)}
              onMouseLeave={() => setHoverStep(null)}
              onClick={() => setActiveStep(i)}
            >
              {/* Left */}
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center bg-black ">
                <div className="flex flex-col space-y-8">
                  {/* Phase + Number pill */}
                  <div className="inline-flex items-center border border-[#57BFFF] rounded-xl px-4 py-2 text-sm w-fit hover:bg-[#57BFFF]/10 transition-colors">
                    <span className="font-semibold whitespace-nowrap">
                      {step.phase}
                    </span>
                    <span className="mx-4 w-px h-4 bg-gray-500" />
                    <span className="text-[#9D9D9D]">{step.num}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-3xl font-semibold">
                    {step.title}
                  </h3>

                  {/* Unfold (desc + button) */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isActive ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="space-y-8">
                      <p className="text-[#808080] text-[18px] leading-relaxed">
                        {step.desc}
                      </p>

                      {step.cta && (
                        <button
                          onClick={() => router.push("/contact#contact-form")}
                          className={`bg-[#57BFFF] hover:bg-[#42aee6] text-white px-6 py-3 rounded-2xl font-semibold w-fit transition-all duration-300 ${
                            isActive
                              ? "opacity-100 translate-y-0"
                              : "opacity-0 translate-y-2"
                          }`}
                        >
                          {step.cta}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right (Image) */}
              <div className="relative flex-1 min-h-[220px] md:min-h-[280px] bg-gray-800 overflow-hidden">
                <Image
                  src={step.img}
                  alt={step.title}
                  fill
                  priority={i === PROCESS_STEPS.length - 1}
                  className={`object-cover transition-transform duration-500 ease-in-out ${
                    isActive ? "scale-100" : "scale-105"
                  }`}
                />

                {/* Sliding overlay */}
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
