

// components/ServicesGrid.tsx
"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { services } from "../../../Const"; // adjust path as needed

export default function ServicesGrid() {
  const router = useRouter();
  return (
    <section 
      id="services-grid"
      className="bg-black text-white px-4 py-16">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          What We Can Do for You
        </h2>
        <p className="text-[#808080] text-[18px] md:text-base">
          We deliver end-to-end technology services that solve real problems,
          boost efficiency, and prepare your business for what’s next.
        </p>
      </div>

      {/* Grid */}
      <div className="flex flex-col gap-6 items-center">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6 ">
          {services.slice(0, 2).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          {services.slice(2, 4).map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 bg-black w-full px-4 py-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <p className="text-sm md:text-base font-semibold text-white leading-snug">
            Looking for something specific? Contact us to discuss a{" "}
            <br className="hidden md:block" />
            custom solution for your business.
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
      <div className="py-6 px-16">
        <div className="relative w-full h-[150px] md:h-[250px] rounded-lg overflow-hidden">
          <Image src={img} alt={title} fill className="object-cover" />
        </div>
      </div>
      <div className="px-4 pb-4 flex flex-col flex-grow justify-center text-center">
        <h3 className="font-semibold text-lg mb-2 md:text-3xl">{title}</h3>
        <p className="text-[#ABABAB] text-sm">{desc}</p>
      </div>
    </div>
  );
}
