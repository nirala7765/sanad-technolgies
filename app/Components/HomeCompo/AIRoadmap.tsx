"use client";
import Image from "next/image";
import { aiSteps } from "../../../Const";
import { useRouter } from "next/navigation";

export default function AIRoadmap() {
  const router = useRouter();
  return (
    <section
      id="ai-roadmap"
      className="bg-black text-white w-full px-6 md:px-12  py-12 md:pt-50"
    >
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto space-y-8 mb-16">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-snug">
          Want AI to Work for You <br className="hidden md:block" />
          but Can’t See the Path?
        </h2>
        <p className="text-[#808080] text-base md:text-lg">
          We’ll quickly identify where AI can make the biggest impact in your
          business and give you a simple, tailored roadmap to get started. No
          jargon, no guesswork,{" "}
          <span className="font-semibold">no cost</span>
        </p>
      </div>

      {/* Steps Grid (full width, less padding) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-10 px-2 space-y-8">
        {aiSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center rounded-xl"
          >
            {/* Square Image */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
              <Image
                src={step.img}
                alt={step.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title + Description */}
            <h3 className="text-lg md:text-2xl font-semibold mb-2">
              {step.title}
            </h3>
            <p className="text-[#808080] text-sm md:text-lg leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-10 bg-black w-full px-2 py-4">
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <p className="text-sm md:text-base font-semibold text-white leading-snug">
            It’s that simple — in less than a week, you’ll know exactly{" "}
            <br className="hidden md:block" />
            where AI can deliver the biggest impact for your business.
          </p>
          <button
            onClick={() => router.push("/contact#contact-form")}
            className="bg-[#57BFFF] text-white font-semibold px-7 py-3 rounded-xl hover:bg-[#3ba7dd] transition cursor-pointer"
          >
            Let’s Talk
          </button>
        </div>
      </div>
    </section>
  );
}
