"use client";

import { useState } from "react";
import { getAssetPath } from "@/app/utils/assets";
import Image from "next/image";
import { customersData } from "@/app/data/customersData";

const CustomerHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? customersData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === customersData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentCustomer = customersData[currentIndex];

  return (
    <section className="w-[90%] mx-auto py-8">
      <div className="relative">
        <div className="flex flex-col lg:flex-row gap-10 w-full bg-[#F1F2F9] mx-auto rounded-[24px] lg:p-[64px] p-[24px] relative overflow-hidden">
          <div
            key={currentCustomer.id}
            className="flex flex-col lg:flex-row gap-10 w-full animate-fade-in"
          >
            <div className="flex-1 lg:w-[465px] w-[auto] max-w-[465px] max-h-[392px] h-[392px]">
              <Image
                src={currentCustomer.backgroundImage}
                alt="Customer Background"
                width={400}
                height={400}
                className="object-cover w-full h-full rounded-[53px]"
              />
            </div>

            <div className="flex-1 flex flex-col items-start justify-start">
              <div>
                <Image
                  src={getAssetPath("/icons/ui/quote.svg")}
                  alt="Quote Icon"
                  width={115}
                  height={115}
                  className="lg:w-[115px] w-[80px] h-[80px] lg:h-auto lg:w-auto"
                />
              </div>
              <p className="lg:text-[32px] text-[24px] font-[500] lg:w-[80%] w-[100%] text-[#53535B] lg:mb-0 mb-4">
                {currentCustomer.quote}
              </p>
              <div className="flex items-center justify-start gap-2 mt-auto">
                <p className="lg:text-[16px] text-[14px] font-[400] text-gray-600">
                  <b>{currentCustomer.author}</b> {currentCustomer.role}
                </p>
                <Image
                  src={currentCustomer.companyLogo}
                  alt={`${currentCustomer.company} Badge`}
                  width={100}
                  height={100}
                  className="lg:w-[100px] w-[80px] lg:h-auto lg:w-auto"
                />
              </div>
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-3 top-1/2 cursor-pointer lg:-translate-y-1/2 -translate-y-1/1  bg-white/80 hover:bg-white hover:scale-105 rounded-full p-3 shadow-lg transition-all z-10"
            aria-label="Testimonio anterior"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#1f2937"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 cursor-pointer lg:-translate-y-1/2 -translate-y-1/1 bg-white/80 hover:bg-white hover:scale-105 rounded-full p-3 shadow-lg transition-all z-10"
            aria-label="Siguiente testimonio"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#1f2937"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {customersData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-blue-500"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir al testimonio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerHero;