"use client";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white space-y-6">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <div className="w-28 h-24 rounded-full flex items-center justify-center">
          {/* Replace this with your actual logo image */}
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
        <Link href="/" className="text-gray-400 hover:text-white transition-colors">
          Home
        </Link>
        <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
          About
        </Link>
        <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
          Services
        </Link>
        <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
          Careers
        </Link>
      </div>

      {/* Social Media Icons with Magnify on Hover */}
      <div className="flex space-x-6 mt-4">
        <a
          href="https://wa.me/1234567890?text=Hello%20Sanad%20Technologies"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#57BFFF] transform hover:scale-125 transition-all duration-300"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#57BFFF] transform hover:scale-125 transition-all duration-300"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#57BFFF] transform hover:scale-125 transition-all duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://linkedin.com/in/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#57BFFF] transform hover:scale-125 transition-all duration-300"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </div>
  );
}
