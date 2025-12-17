"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { getAssetPath } from "../utils/assets";

const Layout = ({ children, isHome }: { children: React.ReactNode, isHome?: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  const handleToggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      // Pequeño delay para que la animación funcione correctamente
      setTimeout(() => setIsAnimating(true), 10);
    } else {
      setIsAnimating(false);
      // Esperar a que termine la animación antes de ocultar
      setTimeout(() => setIsMenuOpen(false), 300);
    }
  };

  const handleCloseMenu = () => {
    setIsAnimating(false);
    setTimeout(() => setIsMenuOpen(false), 300);
  };

  return (
    <div className="w-full">
      <nav className="w-[100%] font-semibold text-[var(--primary-color-text)] mx-auto flex justify-between items-center p-4 absolute top-0 left-1/2 transform -translate-x-1/2 z-50">
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
            <button className={`px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer ${pathname === "/" ? "text-[#0743D7]" : ""}`}>
              Home
            </button>
          </Link>
          {/* Servicios Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              className={`px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer flex items-center gap-1 ${pathname.startsWith("/servicios") ? "text-[#0743D7]" : ""}`}
            >
              Servicios
              <svg 
                className={`w-4 h-4 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {/* Dropdown Menu */}
            <div 
              className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 ${
                isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <Link href="/servicios/soluciones-a-medida" onClick={() => setIsServicesOpen(false)}>
                <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                  <p className="font-semibold text-gray-800">Soluciones a medida</p>
                </div>
              </Link>
             
              <Link href="/servicios/automatizacion-ai" onClick={() => setIsServicesOpen(false)}>
                <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                  <p className="font-semibold text-gray-800">Automatización AI</p>
                </div>
              </Link>

              <Link href="/servicios/inteligencia-negocios" onClick={() => setIsServicesOpen(false)}>
                <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                  <p className="font-semibold text-gray-800">Inteligencia de Negocios</p>
                </div>
              </Link>

              <Link href="/servicios/diseno" onClick={() => setIsServicesOpen(false)}>
                <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                  <p className="font-semibold text-gray-800">Diseño</p>
                </div>
              </Link>
            </div>
          </div>
          <Link href="/portafolio">
            <button className={`px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer ${pathname === "/portafolio" ? "text-[#0743D7]" : ""}`}>
              Portafolio
            </button>
          </Link>
          <Link href="/blog">
            <button className={`px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer ${pathname === "/blog" ? "text-[#0743D7]" : ""}`}>
              Blog
            </button>
          </Link>
        </div>
        <div className="hidden lg:flex gap-4 z-10 relative">
          {
            !isHome && ( 
              <Link href="/careers">
                <button className="py-[12px] px-[16px] rounded-[16px] bg-white/20 backdrop-blur-md border border-white/30 text-[var(--primary-color-text)] font-semibold hover:bg-white/50 transition-all cursor-pointer shadow-sm">
                  Careers
                </button>
              </Link>
            )
          }
          <Link href="/contact">
            <button className="bg-white rounded-[16px] text-[#032F9D] p-[12px] transition-all cursor-pointer shadow-sm">
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
          {/* Overlay con animación de fade */}
          <div
            className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
              isAnimating ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleCloseMenu}
          />
          {/* Panel del menú con animación de slide */}
          <div
            className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-out ${
              isAnimating ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col p-6 h-full">
              <div className="flex justify-between items-center mb-8">
                <Image
                  src={getAssetPath("/mainLogo.svg")}
                  alt="logo"
                  width={100}
                  height={80}
                  className={`w-35 h-12 transition-opacity duration-300 delay-100 ${
                    isAnimating ? "opacity-100" : "opacity-0"
                  }`}
                />
                <button
                  onClick={handleCloseMenu}
                  className={`text-gray-600 hover:text-gray-800 text-2xl transition-all duration-200 hover:rotate-90 ${
                    isAnimating ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  }`}
                >
                  ×
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  onClick={handleCloseMenu}
                  className={`transition-all duration-300 ${
                    isAnimating
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isAnimating ? "150ms" : "0ms",
                  }}
                >
                  <button className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${pathname === "/" ? "text-[#0743D7]" : "text-gray-800"}`}>
                    Home
                  </button>
                </Link>
                {/* Mobile Servicios Dropdown */}
                <div
                  className={`transition-all duration-300 ${
                    isAnimating
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isAnimating ? "200ms" : "0ms",
                  }}
                >
                  <button 
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200 flex items-center justify-between ${pathname.startsWith("/servicios") ? "text-[#0743D7]" : "text-gray-800"}`}
                  >
                    Servicios
                    <svg 
                      className={`w-4 h-4 transition-transform duration-200 ${isMobileServicesOpen ? "rotate-180" : ""}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Submenu */}
                  <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                    <Link
                      href="/servicios/soluciones-a-medida"
                      onClick={handleCloseMenu}
                    >
                      <div className="pl-8 py-2 hover:bg-gray-50 cursor-pointer transition-colors">
                        <p className="text-gray-700">Soluciones a medida</p>
                      </div>
                    </Link>

                    <Link
                      href="/servicios/inteligencia-de-negocios"
                      onClick={handleCloseMenu}
                    >
                      <div className="pl-8 py-2 hover:bg-gray-50 cursor-pointer transition-colors">
                        <p className="text-gray-700">Inteligencia de Negocios</p>
                      </div>
                    </Link>
                    
                    <Link
                      href="/servicios/automatizacion-ai"
                      onClick={handleCloseMenu}
                    >
                      <div className="pl-8 py-2 hover:bg-gray-50 cursor-pointer transition-colors">
                        <p className="text-gray-700">Automatización AI</p>
                      </div>
                    </Link>

                    <Link
                      href="/servicios/diseno"
                      onClick={handleCloseMenu}
                    >
                      <div className="pl-8 py-2 hover:bg-gray-50 cursor-pointer transition-colors">
                        <p className="text-gray-700">Diseño</p>
                      </div>
                    </Link>
                  </div>
                </div>
                <Link
                  href="/portafolio"
                  onClick={handleCloseMenu}
                  className={`transition-all duration-300 ${
                    isAnimating
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isAnimating ? "250ms" : "0ms",
                  }}
                >
                  <button className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${pathname === "/portafolio" ? "text-[#0743D7]" : "text-gray-800"}`}>
                    Portafolio
                  </button>
                </Link>
                <Link
                  href="/blog"
                  onClick={handleCloseMenu}
                  className={`transition-all duration-300 ${
                    isAnimating
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isAnimating ? "300ms" : "0ms",
                  }}
                >
                  <button className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${pathname === "/blog" ? "text-[#0743D7]" : "text-gray-800"}`}>
                    Blog
                  </button>
                </Link>
                <div
                  className={`border-t border-gray-200 my-4 transition-all duration-300 ${
                    isAnimating
                      ? "opacity-100 scale-x-100"
                      : "opacity-0 scale-x-0"
                  }`}
                  style={{
                    transitionDelay: isAnimating ? "350ms" : "0ms",
                  }}
                />
                <Link
                  href="/careers"
                  onClick={handleCloseMenu}
                  className={`transition-all duration-300 ${
                    isAnimating
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isAnimating ? "400ms" : "0ms",
                  }}
                >
                  <button className="w-full text-left px-4 py-2 rounded-[16px] bg-white/20 backdrop-blur-md border border-gray-300 text-[var(--primary-color-text)] font-semibold hover:bg-gray-100 transition-all cursor-pointer">
                    Careers
                  </button>
                </Link>
                <Link
                  href="/contact"
                  onClick={handleCloseMenu}
                  className={`transition-all duration-300 ${
                    isAnimating
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }`}
                  style={{
                    transitionDelay: isAnimating ? "450ms" : "0ms",
                  }}
                >
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
          <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-0">
            <p className="text-[22px] font-[700] text-white text-left">
              Your Trusted Global Partner for <br /> Innovative Mobile Solutions
              and Digital <br /> Transformation
            </p>
            <div className="flex flex-col items-start justify-center lg:font-weight-[400] font-[700] text-[#D3C7D2]">
              <p className="text-[24px] font-bold text-left mb-[40px] text-white">
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
              <ul className="flex flex-col items-start justify-center gap-[24px] text-[#D3C7D2] lg:font-weight-[400] font-[700]">
                <li>
                  <Link href="/servicios" className="text-[16px]   text-left">
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
          
          <div className="flex flex-col lg:flex-row  items-start lg:items-center gap-12 lg:gap-72 mt-12 lg:mt-0">
            <p className="text-[18px] font-weight-[700] text-white text-left">
              Copyright Appdevshop all Rights Reserved
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/queueunderstop/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Image
                  src={getAssetPath("/iconFacebook.svg")}
                  alt="facebook"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.facebook.com/queueunderstop/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Image
                  src={getAssetPath("/iconInstagram.svg")}
                  alt="instagram"
                  width={20}
                  height={20}
                />
              </a>
              <a
                href="https://www.facebook.com/queueunderstop/"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Image
                  src={getAssetPath("/iconIn.svg")}
                  alt="linkedin"
                  width={20}
                  height={20}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
