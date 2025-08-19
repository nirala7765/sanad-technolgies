"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <header className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="w-full px-2 sm:px-11 py-4 flex items-center justify-between">
        {/* Left: Logo + Links */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={40}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-base transition-colors duration-200 font-bold ${
                  pathname === link.path
                    ? "text-[#57BFFF]"
                    : "text-white hover:text-[#57BFFF]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right: Contact Button & Mobile Menu Icon */}
        <div className="flex items-center">
          {/* Desktop Contact */}
          <Link
            href="/contact"
            className="hidden md:inline-block bg-[#57BFFF] hover:bg-[#3ba7dd] text-white px-4 sm:px-5 py-3 rounded-2xl font-semibold transition"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-2 text-white hover:text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 w-full">
          <nav className="flex flex-col px-2 sm:px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`block text-base font-medium transition-colors duration-200 ${
                  pathname === link.path ? "text-[#57BFFF]" : "text-white hover:text-[#57BFFF]"
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <div className="flex justify-center pt-2">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-1/2 sm:w-1/3 text-center bg-[#57BFFF] hover:bg-[#3ba7dd] text-white py-2 rounded-2xl font-semibold transition shadow-md"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
