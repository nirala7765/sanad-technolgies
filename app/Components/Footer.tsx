"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white space-y-6">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <div className="w-28 h-24  rounded-full flex items-center justify-center">
          {/* You can replace this with your actual logo image */}
             <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={90}
              height={90}
              className="object-contain"
            />

          </Link>
        </div>
        <h1 className="mt-4 text-2xl font-bold">Sanad Technologies</h1>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center space-y-2">
        <p className="font-semibold">Explore</p>
        {["Home", "About", "Services", "Careers"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-gray-400 hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      {/* Social Media Icons with Animation */}
      <div className="flex space-x-6 mt-4">
        {[FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin].map((Icon, idx) => (
          <a
            key={idx}
            href="#"
            className="text-gray-400 hover:text-[#57BFFF] transform hover:scale-125 hover:animate-bounce transition-all duration-300"
          >
            <Icon size={24} />
          </a>
        ))}
      </div>
    </div>
  );
}
