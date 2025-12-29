"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getAssetPath } from "../../utils/assets";
import { scrollToContact } from "@/app/layout/Layout";

const ServiceHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activar animación después de que el componente se monte
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${getAssetPath("/images/hero/main.png")})`,
      }}
    >
      <div className="w-full lg:w-[80%] mx-auto h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <h1
            className={`text-3xl lg:text-5xl lg:text-6xl font-bold mb-12 transition-all duration-700 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-gray-800 leading-[1.3]">
              {/* Mobile: cada línea en bloque */}
              <span className="block lg:hidden">Tu aliado tecnológico</span>
              <span className="block lg:hidden">
                para hacer{" "}
                <span
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(93deg, #32C3EA, #3043D0, #33055A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  crecer y
                </span>
              </span>
              <span className="block lg:hidden">
                <span
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(93deg, #32C3EA, #3043D0, #33055A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  modernizar
                </span>{" "}
                tu negocio.
              </span>
              {/* Desktop: todo en línea */}
              <span className="hidden lg:inline">
                Tu aliado tecnológico para hacer{" "}
                <span
                  className="inline-block"
                  style={{
                    background:
                      "linear-gradient(93deg, #32C3EA, #3043D0, #33055A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  crecer y modernizar
                </span>{" "}
                tu negocio.
              </span>
            </span>
          </h1>
          <button
            className={`h-[58px] lg:h-[auto] bg-gradient-to-b from-blue-600 to-blue-500 text-white px-[36px] py-[20px] rounded-[16px] text-lg font-semibold shadow-lg flex items-center gap-2 hover:from-blue-700 hover:to-blue-600 transition-all hover:scale-105 cursor-pointer ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{
              background:
                "radial-gradient(85.16% 87.63% at 50% 50%, #0743D7 0%, #2D69FD 100%)",
              boxShadow: "0 0 30px 0 rgba(113, 137, 255, 0.70)",
              transitionDelay: isVisible ? "200ms" : "0ms",
              transitionDuration: "700ms",
              transitionTimingFunction: "ease-out",
            }}
            onClick={scrollToContact}
          >
            Agenda cita
            <Image
              src={getAssetPath("/icons/ui/arrow-right.svg")}
              alt="Arrow Right"
              width={20}
              height={20}
              className="w-5 h-5"
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;

