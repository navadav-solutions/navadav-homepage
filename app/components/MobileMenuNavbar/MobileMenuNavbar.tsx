import { getAssetPath } from "@/app/utils/assets";
import { scrollToContact } from "@/app/utils/scrollToContact";
import Image from "next/image";
import Link from "next/link";

interface MobileMenuNavbarProps {
  handleCloseMenu: () => void;
  setIsMobileServicesOpen: (isOpen: boolean) => void;
  isAnimating: boolean;
  isMobileServicesOpen: boolean;
  pathname: string;
}

const MobileMenuNavbar = ({
  handleCloseMenu,
  isAnimating,
  setIsMobileServicesOpen,
  isMobileServicesOpen,
  pathname,
}: MobileMenuNavbarProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
          isAnimating ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleCloseMenu}
      />
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-xl z-50 lg:hidden transform transition-transform duration-300 ease-out ${
          isAnimating ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 h-full">
          <div className="flex justify-between items-center mb-8">
            <Image
              src={getAssetPath("/logos/main.svg")}
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
              <button
                className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${
                  pathname === "/" ? "text-[#0743D7]" : "text-gray-800"
                }`}
              >
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
                className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200 flex items-center justify-between ${
                  pathname.startsWith("/servicios")
                    ? "text-[#0743D7]"
                    : "text-gray-800"
                }`}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isMobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isMobileServicesOpen
                    ? "max-h-48 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <Link
                  href="/servicios/soluciones-a-medida"
                  onClick={handleCloseMenu}
                >
                  <div className="pl-8 py-2 hover:bg-gray-50 cursor-pointer transition-colors">
                    <p className="text-gray-700">Soluciones a medida</p>
                  </div>
                </Link>

                <Link
                  href="/servicios/inteligencia-negocios"
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

                <Link href="/servicios/diseno" onClick={handleCloseMenu}>
                  <div className="pl-8 py-2 hover:bg-gray-50 cursor-pointer transition-colors">
                    <p className="text-gray-700">Diseño</p>
                  </div>
                </Link>
              </div>
            </div>
            <Link
              href="/about"
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
              <button
                className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${
                  pathname === "/about"
                    ? "text-[#0743D7]"
                    : "text-gray-800"
                }`}
              >
                Quienes Somos
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
              <button
                className={`w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 cursor-pointer transition-colors duration-200 ${
                  pathname === "/blog" ? "text-[#0743D7]" : "text-gray-800"
                }`}
              >
                Blog
              </button>
            </Link>
            <div
              className={`border-t border-gray-200 my-4 transition-all duration-300 ${
                isAnimating ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
              }`}
              style={{
                transitionDelay: isAnimating ? "350ms" : "0ms",
              }}
            />
            <div
              onClick={() => {
                handleCloseMenu();
                setTimeout(scrollToContact, 350);
              }}
              className={`transition-all duration-300 cursor-pointer ${
                isAnimating
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
              style={{
                transitionDelay: isAnimating ? "450ms" : "0ms",
              }}
            >
              <button className="w-full text-left px-4 py-2 rounded-[16px] bg-blue-500 text-white font-semibold hover:bg-blue-600 transition-all cursor-pointer">
                Contactanos
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileMenuNavbar;
