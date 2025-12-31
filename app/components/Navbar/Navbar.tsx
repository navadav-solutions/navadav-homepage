"use client";
import { navbarLinks } from '@/app/data/navbarLinks';
import { getAssetPath } from '@/app/utils/assets'
import { scrollToContact } from '@/app/utils/scrollToContact'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import MobileMenuNavbar from '../MobileMenuNavbar/MobileMenuNavbar';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Verificar la posición inicial del scroll al montar el componente
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Llama a handleScroll una vez para establecer el estado inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <>
      <nav className={`w-[100%] font-semibold text-[var(--primary-color-text)] mx-auto flex justify-between items-center px-4 fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : ""}`}>
        <div className="relative w-[200px] h-[auto] z-10 relative">
          <Image
            src={getAssetPath("/logos/final.svg")}
            alt="logo"
            width={200}
            height={0}
            className="w-full h-auto"
          />
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-4 z-10 relative">
          {navbarLinks.map((link) => {
            // Si es Services, renderizar con dropdown
            if (link.title === "Services") {
              return (
                <div
                  key={link.title}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <button
                    className={`px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer ${pathname.startsWith("/servicios") ? "text-[#0743D7]" : ""}`}
                  >
                    {link.title}
                    <svg
                      className={`w-4 h-4 inline-block ml-1 transition-transform duration-200 ${isServicesOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-200 ${isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                      }`}
                  >
                    {link.sublinks?.map((sublink) => (
                      <Link key={sublink.title} href={sublink.link} onClick={() => setIsServicesOpen(false)}>
                        <div className="px-4 py-3 hover:bg-gray-50 cursor-pointer transition-colors">
                          <p className="font-semibold text-gray-800">{sublink.title}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            // Para los otros links, sin hover
            return (
              <Link key={link.title} href={link.link}>
                <button className={`px-4 py-2  hover:bg-gray-100 rounded-md cursor-pointer ${pathname === link.link ? "text-[#0743D7]" : ""}`}>
                  {link.title}
                </button>
              </Link>
            );
          })}
        </div>
        <div className="hidden lg:flex gap-4 z-10 relative">
          <button
            onClick={scrollToContact}
            className="bg-white rounded-[16px] text-[#032F9D] p-[12px] transition-all cursor-pointer shadow-sm hover:bg-gray-50"
          >
            Contact us
          </button>
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
        <MobileMenuNavbar
          handleCloseMenu={handleCloseMenu}
          isAnimating={isAnimating}
          setIsMobileServicesOpen={setIsMobileServicesOpen}
          isMobileServicesOpen={isMobileServicesOpen}
          pathname={pathname}
        />
      )}
    </>

  )
}

export default Navbar