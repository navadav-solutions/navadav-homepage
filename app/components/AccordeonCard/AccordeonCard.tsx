"use client"
import React, { useState } from 'react'

interface AccordeonCardProps {
  title: string
  paragraph: string
}

const AccordeonCard = ({ title, paragraph }: AccordeonCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={`
        w-full rounded-2xl transition-all duration-300 ease-in-out cursor-pointer
        ${isOpen 
          ? 'bg-white border-2 border-[#0743D7] p-6 sm:p-8' 
          : 'bg-white border border-[#D9D9D9] shadow-sm p-6 sm:p-8 hover:shadow-md'
        }
      `}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 
          className={`
            text-[24px] font-semibold leading-tight flex-1 text-start
            ${isOpen ? 'text-[#283B5C]' : 'text-gray-900'}
          `}
        >
          {title}
        </h3>
        
        <button
          className={`
            flex-shrink-0 w-8 h-8 flex items-center justify-center
            transition-transform duration-300 ease-in-out
            ${isOpen ? 'rotate-180' : 'rotate-0'}
          `}
          aria-label={isOpen ? 'Cerrar' : 'Abrir'}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-600"
          >
            <path 
              d="M6 9L12 15L18 9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'}
        `}
      >
        <p className="text-gray-600 text-start leading-relaxed w-[90%]">
          {paragraph}
        </p>
      </div>
    </div>
  )
}

export default AccordeonCard
