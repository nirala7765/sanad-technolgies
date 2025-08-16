import Image from "next/image";
import { OUR_STORY } from "../../../Const";

export default function OurStorySection() {
  return (
    <section id="our-story" className="min-h-screen bg-black text-white flex flex-col justify-center px-6 md:px-12 py-16">
      {/* Section Title */}
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">
        {OUR_STORY.sectionTitle}
      </h2>

      <div className="flex flex-col gap-16 w-full max-w-6xl mx-auto">
        {/* First Block */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px]">
            <Image
              src={OUR_STORY.firstBlock.image}
              alt="Our Story Part 1"
              fill
              className="rounded-xl object-cover"
            />
          </div>
          <p className="text-base md:text-lg text-[#ABABAB] leading-relaxed text-center md:text-left">
            {OUR_STORY.firstBlock.text}
          </p>
        </div>

        {/* Second Block */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <p className="text-base md:text-lg text-[#ABABAB] leading-relaxed order-2 md:order-1 text-center md:text-left">
            {OUR_STORY.secondBlock.text}
          </p>
          <div className="relative w-full h-[200px] sm:h-[280px] md:h-[350px] lg:h-[400px] order-1 md:order-2">
            <Image
              src={OUR_STORY.secondBlock.image}
              alt="Our Story Part 2"
              fill
              className="rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
