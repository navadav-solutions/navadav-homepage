"use client";

import { useEffect, useState } from "react";
import ConversemosButton from "@/app/components/AgendaButton/AgendaButton";
import MainBackground from "../MainBackground/MainBackground";

interface ServiceHeroProps {
  evolutionLabel: string;
}

const ServiceHero = ({ evolutionLabel }: ServiceHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Activar animación después de que el componente se monte
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MainBackground>
      <h1
        className={`text-3xl lg:text-[72px] font-bold mb-12 transition-all duration-700 ease-out ${isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
          }`}
      >
        <span className="text-gray-800 leading-[1.3]">
          Acompañamos la{" "}
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
            evolución {evolutionLabel}
          </span>
          <br />
          tu negocio.
        </span>
      </h1>
      <ConversemosButton isVisible={isVisible} />
    </MainBackground>

  );
};

export default ServiceHero;
