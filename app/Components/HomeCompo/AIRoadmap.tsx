"use client";
import Image from "next/image";
import { aiSteps } from "../../../Const";
import { useRouter } from "next/navigation";

export default function AIRoadmap() {
  const router = useRouter();
  return (
    <section id="ai-roadmap" className="bg-black text-white flex flex-col justify-center items-center px-6 md:px-12 lg:px-20 lg:min-h-[100svh]">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-4xl font-semibold leading-snug mb-6">
          Want AI to Work for You <br className="hidden md:block" />
          but Can’t See the Path?
        </h2>
        <p className="text-[#808080] text-base md:text-lg">
          We’ll quickly identify where AI can make the biggest impact in your
          business and give you a simple, tailored roadmap to get started. No
          jargon, no guesswork, <span className="font-semibold">no cost</span>.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl w-full">
        {aiSteps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center  rounded-2xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="relative w-full h-[200px] md:h-[250px] mb-6">
              <Image
                src={step.img}
                alt={step.title}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-lg  font-semibold mb-3">
              {step.title}
            </h3>
            <p className="text-[#808080] text-[17px] ">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-12 bg-black w-full px-4 py-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <p className="text-sm md:text-base font-semibold text-white leading-snug">
            It’s that simple — in less than a week, you’ll know exactly {" "}
            <br className="hidden md:block" />
            where AI can deliver the biggest impact for your business.
          </p>
          <button 

        onClick={() => router.push("/contact#contact-form")}
          
          className="bg-[#57BFFF] text-white font-semibold px-6 py-3 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer">
            Let’s Talk
          </button>
        </div>
      </div>
    </section>
  );
}
