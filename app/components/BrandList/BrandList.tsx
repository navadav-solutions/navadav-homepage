import Image from 'next/image'
import { brandsData } from '@/app/data/aboutData'

const BrandList = () => {
  return (
    <section className="w-full mx-auto py-8 pt-0 text-center flex flex-row justify-between items-center gap-8">
      {
        brandsData.map((brand) => (
          <Image
            key={brand.id}
            src={brand.imageSrc}
            alt={brand.imageAlt}
            width={150}
            height={69}
            className="w-[150px] h-[69px]"
          />
        ))
      }
    </section>
  )
}

export default BrandList