import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import abouthero from "@/public/abouthero.png"; // replace with actual image path

export default function AboutHero() {
  return (
    <section
      className="bg-black text-white flex flex-col items-center px-4 sm:px-8 py-8 gap-4"
      style={{ paddingTop: "100px" }} // offset for sticky navbar
    >
      {/* Top Button */}
      <div className="flex items-center border border-[#57BFFF] rounded-full px-4 py-2 text-sm mb-6">
        <span className="mr-2">Looking for AI?</span>
        <button className="text-[#57BFFF] flex items-center cursor-pointer">
          Click Here →
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
        Who We Are &amp; Why We Do It
      </h1>

      {/* Description */}
      <p className="text-gray-400 max-w-3xl text-center mb-8 px-2">
        At Sanad Technologies, we turn ideas into solutions that work in the real
        world. Our team combines tech expertise with business know-how to help you
        build, innovate, and grow. From apps and AI to cloud and process
        optimization, we make technology simple, effective, and tailored to you.
      </p>

      {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 flex-wrap">
          {/* Let's Talk button */}
          <button className="bg-[#57BFFF] text-black font-semibold px-6 py-3 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer">
            Let&apos;s Talk
          </button>

          {/* About Us button */}
          <button className="group flex items-center gap-2 border border-gray-500 px-6 py-3 rounded-2xl hover:bg-white hover:text-black transition cursor-pointer">
            Learn More
            <FiArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>


      {/* Hero Image */}
      <div className="flex justify-center">
        <Image
          src={abouthero}
          alt="About Hero"
          width={1095}
          height={592}
          className="rounded-2xl max-w-full h-auto"
        />
      </div>
    </section>
  );
}
