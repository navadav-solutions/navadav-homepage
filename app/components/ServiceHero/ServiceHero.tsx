"use client";

import { useEffect, useState } from "react";
import { getAssetPath } from "@/app/utils/assets";
import ConversemosButton from "@/app/components/AgendaButton/AgendaButton";

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
          <ConversemosButton isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
