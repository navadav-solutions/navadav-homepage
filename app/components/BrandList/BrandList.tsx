"use client";

import Image from 'next/image'
import { brandsData } from '@/app/data/aboutData'

const BrandList = () => {
  // Duplicar las marcas para crear un efecto infinito
  const duplicatedBrands = [...brandsData, ...brandsData];

  return (
    <section className="w-full mx-auto py-8 pt-0 overflow-hidden">
      <div className="flex flex-row items-center gap-8 animate-scroll">
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="flex-shrink-0"
          >
            <Image
              src={brand.imageSrc}
              alt={brand.imageAlt}
              width={150}
              height={69}
              className="w-[150px] h-[69px] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default BrandList