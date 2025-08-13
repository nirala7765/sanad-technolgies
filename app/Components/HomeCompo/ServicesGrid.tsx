// components/ServicesGrid.tsx
import Image from "next/image";

export default function ServicesGrid() {
  return (
    <section className="bg-black text-white px-4 py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          What We Can Do for You
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          We deliver end-to-end technology services that solve real problems,
          boost efficiency, and prepare your business for what’s next.
        </p>
      </div>

      {/* Grid */}
      <div className="flex flex-col gap-6 items-center">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Wide Card */}
          <ServiceCard
            img="/bgfa.png"
            title="Smart Business Solutions"
            desc="From AI insights to streamlined workflows, we identify the smartest ways to boost efficiency, cut waste, and position your business for long-term success."
            widthClass="md:w-[666px]"
          />
          {/* Small Card */}
          <ServiceCard
            img="/bgfa.png"
            title="Cloud & Data Innovation"
            desc="Flexible, secure cloud strategies that boost performance, collaboration, and control over your data."
            widthClass="md:w-[469px]"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Small Card */}
          <ServiceCard
            img="/bgfa.png"
            title="Support That Scales"
            desc="We keep your systems evolving so your business stays competitive."
            widthClass="md:w-[469px]"
          />
          {/* Wide Card */}
          <ServiceCard
            img="/bgfa.png"
            title="Build for Your Business Landscape"
            desc="Whether in retail, healthcare, manufacturing, or beyond, our solutions are designed to tackle your sector’s real challenges and deliver measurable results."
            widthClass="md:w-[666px]"
          />
        </div>
      </div>

     
      {/* Bottom CTA */}
      <div className="mt-12 bg-black w-full px-4 md:px-8 py-6">
        <div className="max-w-6xl  flex flex-col md:flex-row items-center md:items-center justify-center  gap-24">
          <p className="text-sm md:text-base font-semibold text-white  text-center leading-snug">
            Looking for something specific? Contact us to discuss a{" "}
            <br className="hidden md:block" />
            custom solution for your business.
          </p>
          <button className="bg-[#57BFFF] text-white font-semibold px-6 py-3 rounded-2xl hover:bg-[#3ba7dd] transition cursor-pointer">
            Let’s Talk
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  img,
  title,
  desc,
  widthClass,
}: {
  img: string;
  title: string;
  desc: string;
  widthClass: string;
}) {
  return (
    <div
      className={`bg-[#1a1a1a] flex-shrink-0 w-full ${widthClass} h-[300px] md:h-[441px] rounded-lg overflow-hidden flex flex-col`}
    >
      {/* Image with Padding */}
      <div className="py-6 px-16">
        <div className="relative w-full h-[150px] md:h-[250px] rounded-lg overflow-hidden">
          <Image src={img} alt={title} fill className="object-cover" />
        </div>
      </div>
      {/* Text */}
      <div className="px-4 pb-4 flex flex-col flex-grow justify-center text-center">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}
