"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getAssetPath } from "../utils/assets";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="w-full">
      <nav className="w-[90%] font-semibold text-[var(--primary-color-text)] mx-auto flex justify-between items-center p-4 absolute top-0 left-1/2 transform -translate-x-1/2 z-50">
        <Image
          src={getAssetPath("/mainLogo.svg")}
          alt="logo"
          width={100}
          height={80}
          className="w-35 h-12 z-10 relative"
        />
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-4 z-10 relative">
          <Link href="/">
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              Home
            </button>
          </Link>
          <Link href="/servicios">
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              Servicios
            </button>
          </Link>
          <Link href="/portafolio">
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              Portafolio
            </button>
          </Link>
          <Link href="/blog">
            <button className="px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer">
              Blog
            </button>
          </Link>
        </div>
        <div className="hidden lg:flex gap-4 z-10 relative">
          <Link href="/careers">
            <button className="py-[12px] px-[16px] rounded-[16px] bg-white/20 backdrop-blur-md border border-white/30 text-[var(--primary-color-text)] font-semibold hover:bg-white/50 transition-all cursor-pointer shadow-sm">
              Careers
            </button>
          </Link>
          <Link href="/contact">
            <button className="bg-white rounded-[16px] text-[var(--secondary-color-text)] p-[12px] transition-all cursor-pointer shadow-sm">
              Contact us
            </button>
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
          onClick={handleToggleMenu}
          className="lg:hidden bg-white rounded-[16px] px-4 py-2 text-[#1C58EC] font-semibold shadow-sm z-50"
        >
          Menu
        </button>
      </nav>
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={handleCloseMenu}
          />
          <div className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col p-6 h-full">
              <div className="flex justify-between items-center mb-8">
                <Image
                  src={getAssetPath("/mainLogo.svg")}
                  alt="logo"
                  width={100}
                  height={80}
                  className="w-35 h-12"
                />
                <button
                  onClick={handleCloseMenu}
                  className="text-gray-600 hover:text-gray-800 text-2xl"
                >
                  ×
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <Link href="/" onClick={handleCloseMenu}>
                  <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-gray-800">
                    Home
                  </button>
                </Link>
                <Link href="/servicios" onClick={handleCloseMenu}>
                  <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-gray-800">
                    Servicios
                  </button>
                </Link>
                <Link href="/portafolio" onClick={handleCloseMenu}>
                  <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-gray-800">
                    Portafolio
                  </button>
                </Link>
                <Link href="/blog" onClick={handleCloseMenu}>
                  <button className="w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer text-gray-800">
                    Blog
                  </button>
                </Link>
                <div className="border-t border-gray-200 my-4" />
                <Link href="/careers" onClick={handleCloseMenu}>
                  <button className="w-full text-left px-4 py-2 rounded-[16px] bg-white/20 backdrop-blur-md border border-gray-300 text-[var(--primary-color-text)] font-semibold hover:bg-gray-100 transition-all cursor-pointer">
                    Careers
                  </button>
                </Link>
                <Link href="/contact" onClick={handleCloseMenu}>
                  <button className="w-full text-left px-4 py-2 rounded-[16px] bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all cursor-pointer">
                    Contact us
                  </button>
                </Link>
              </nav>
            </div>
          </div>
        </>
      )}
      {children}
      <footer
        className="text-center text-sm text-gray-500"
        style={{
          background: "linear-gradient(174deg, #190347, #3414C8, #59E9F4)",
        }}
      >
        <div className="w-[90%] mx-auto text-white py-24">
          <Image
            src={getAssetPath("/mainLogo.svg")}
            alt="logo"
            width={100}
            height={80}
            className="w-70 z-10 relative mb-4"
          />
          <div className="flex items-start justify-between">
            <p className="text-[22px] font-weight-[700] text-white text-left">
              Your Trusted Global Partner for <br /> Innovative Mobile Solutions
              and Digital <br /> Transformation
            </p>
            <div className="flex flex-col items-start justify-center">
              <p className="text-[24px] font-bold text-left mb-[40px]">
                Get in touch
              </p>
              <ul className="flex flex-col items-start justify-center gap-[24px]">
                <li>
                  <Link
                    href="/"
                    className="text-[16px] font-weight-[400] text-left"
                  >
                    47 W 13th St, New York, NY 10011, USA
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[16px] font-weight-[400] text-left"
                  >
                    +1-212-555-0158
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-[16px] font-weight-[400] text-left"
                  >
                    info@navadad.com
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-center">
              <p className="text-[24px] font-bold text-left mb-[40px]">Links</p>
              <ul className="flex flex-col items-start justify-center gap-[24px]">
                <li>
                  <Link
                    href="/servicios"
                    className="text-[16px] font-weight-[400] text-left"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portafolio"
                    className="text-[16px] font-weight-[400] text-left"
                  >
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-[16px] font-weight-[400] text-left"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-[16px] font-weight-[400] text-left"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[16px] font-weight-[400] text-left"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
