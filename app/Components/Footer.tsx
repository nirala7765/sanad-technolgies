"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white space-y-6">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <div className="w-28 h-24 rounded-full flex items-center justify-center">
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
        <p className="font-semibold mb-4">Explore</p>
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`transition-colors ${
              pathname === link.path
                ? "text-[#57BFFF] font-semibold"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Social Media Icons */}
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

      {/* Copyright */}
      <p className="text-[#C9D4D8] text-lg mt-16">
        © 2025 Sanad Technologies, All Rights Reserved.
      </p>
    </div>
  );
}
