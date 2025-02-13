"use client"
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        // Scrolling Up (Show Navbar)
        setShowNavbar(true);
      } else {
        // Scrolling Down (Hide Navbar)
        setShowNavbar(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-transparent p-4 flex items-center justify-between z-50 transition-all duration-300 ${
        showNavbar ? "opacity-100" : "opacity-0 translate-y-[-100%]"
      }`}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/logo.png" // Replace with your logo source
          alt="Logo"
          width={100}
          height={50}
          className="object-cover"
        />
      </div>

      {/* Menu Items */}
      <div className="flex items-center gap-10">
        <a
          href="#"
          className="text-[#222222] text-[16px] font-semibold flex items-center gap-1"
        >
          Home <span className="text-[12px]">⌄</span>
        </a>
        <a
          href="#"
          className="text-[#222222] text-[16px] font-semibold flex items-center gap-1"
        >
          About <span className="text-[12px]">⌄</span>
        </a>
        <a
          href="#"
          className="text-[#222222] text-[16px] font-semibold flex items-center gap-1"
        >
          Services <span className="text-[12px]">⌄</span>
        </a>
      </div>

      {/* Login Button (Gray color) */}
      <button className="bg-gray-400 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
        Login
      </button>
    </nav>
  );
}
