import Image from "next/image";
import { OUR_STORY } from "../../../Const";

export default function OurStorySection() {
  return (
    <section className="min-h-[100svh] bg-black text-white flex flex-col justify-center px-6 md:px-12 ">
      <h2 className="text-center text-4xl font-bold mb-12">
        {OUR_STORY.sectionTitle}
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <Image
          src={OUR_STORY.firstBlock.image}
          alt="Our Story Part 1"
          width={600}
          height={400}
          className="rounded-xl object-cover"
        />
        <p className="text-lg text-gray-300 leading-relaxed text-center md:text-left">
          {OUR_STORY.firstBlock.text}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <p className="text-lg text-gray-300 leading-relaxed order-2 md:order-1 text-center md:text-left">
          {OUR_STORY.secondBlock.text}
        </p>
        <Image
          src={OUR_STORY.secondBlock.image}
          alt="Our Story Part 2"
          width={600}
          height={400}
          className="rounded-xl object-cover order-1 md:order-2"
        />
      </div>
    </section>
  );
}
