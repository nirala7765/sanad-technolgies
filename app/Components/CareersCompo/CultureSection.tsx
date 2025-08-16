"use client";

import { FaBalanceScale, FaUsers, FaBolt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function CultureSection() {
  const router = useRouter();
  const cultureItems = [
    {
      icon: <FaBalanceScale size={32} />,
      title: "Work–Life Balance",
      desc: "We know productivity isn’t about working longer — it’s about working smarter. Our flexible approach helps you manage your time, recharge, and bring your best self to every project.",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Collaboration at the Core",
      desc: "From brainstorming to delivery, we work as one. You’ll collaborate with skilled professionals who share insights, support your ideas, and celebrate team wins.",
    },
    {
      icon: <MdOutlineWork size={32} />,
      title: "Ownership & Impact",
      desc: "Here, your work matters. We give you the freedom to take ownership, make decisions, and see your contributions shape real outcomes for clients.",
    },
    {
      icon: <FaBolt size={32} />,
      title: "Continuous Learning",
      desc: "Technology evolves fast — and so do we. Every project is an opportunity to pick up new skills, experiment with tools, and expand your expertise.",
    },{
      icon: <FaBalanceScale size={32} />,
      title: "Work–Life Balance",
      desc: "We know productivity isn’t about working longer — it’s about working smarter. Our flexible approach helps you manage your time, recharge, and bring your best self to every project.",
    },
    {
      icon: <FaUsers size={32} />,
      title: "Collaboration at the Core",
      desc: "From brainstorming to delivery, we work as one. You’ll collaborate with skilled professionals who share insights, support your ideas, and celebrate team wins.",
    },
    
  ];

  return (
    <section className="bg-black text-white px-6 py-12 space-y-12">
      {/* Our Culture Title */}
      <h2 className="text-center text-3xl sm:text-4xl font-bold">Our Culture</h2>

      {/* Culture Items */}
      <div className="grid gap-10 sm:grid-cols-2 max-w-6xl mx-auto">
        {cultureItems.map((item, idx) => (
          <div key={idx} className="flex flex-col space-y-4">
            <div className="text-white">{item.icon}</div>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-white text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-16 bg-black border-t border-gray-800 pt-16 max-w-6xl mx-auto">
        <p className="text-center sm:text-left text-lg font-medium mb-4 sm:mb-0">
          Join us and shape the future of technology
        </p>
        <a
          href="/contact#contact-form"
          className="px-6 py-2 bg-[#57BFFF] hover:bg-[#3ba7dd] rounded-full font-medium transition-all duration-300 hover:scale-105"
        >
          Apply Now
        </a>
      </div>
    </section>
  );
}
