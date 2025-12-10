import { getAssetPath } from '@/app/utils/assets'
import Image from 'next/image'
import React from 'react'

const TestimonialCard = ({ imageSrc, name, date }: { imageSrc: string, name: string, date: string }) => {
  return (
    <article className="relative w-full aspect-[4/5] rounded-[24px] overflow-hidden cursor-pointer group">
      {/* Imagen de fondo */}
      <Image 
        src={imageSrc} 
        alt={name} 
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Gradiente oscuro en la parte inferior */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      

      {/* Contenido de texto */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-start">
        <h3 className="text-[20px] font-[700] text-white leading-tight mb-2">
          {name}
        </h3>
        <p className="text-[14px] font-[400] text-white/80">
          {date}
        </p>
      </div>
    </article>
  )
}

export default TestimonialCard