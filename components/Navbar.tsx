"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // Explicitly typed
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleDropdown = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white shadow-md p-4 flex items-center justify-between z-50 transition-all duration-300 ${
        showNavbar ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={50}
          className="object-cover"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {["Home", "About", "Services"].map((menu) => (
          <div key={menu} className="relative">
            <button
              onClick={() => toggleDropdown(menu)}
              className="text-[#222222] text-[16px] font-semibold flex items-center gap-1"
            >
              {menu} <span className="text-[12px]">⌄</span>
            </button>
            {dropdownOpen === menu && (
              <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Option 1
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Option 2
                </a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Option 3
                </a>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMobileMenu} className="text-[#222222] text-[20px] font-semibold">
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4 md:hidden">
          {["Home", "About", "Services"].map((menu) => (
            <div key={menu} className="relative">
              <button
                onClick={() => toggleDropdown(menu)}
                className="w-full text-left text-[#222222] text-[16px] font-semibold flex items-center gap-1 p-2"
              >
                {menu} <span className="text-[12px]">⌄</span>
              </button>
              {dropdownOpen === menu && (
                <div className="ml-4 mt-1 flex flex-col bg-gray-100 rounded-md">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                    Option 1
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                    Option 2
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
                    Option 3
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Login Button */}
      <button className="hidden md:block bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-600 transition">
        Login
      </button>
    </nav>
  );
}
