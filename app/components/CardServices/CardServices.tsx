'use client';
import { getAssetPath } from '@/app/utils/assets';
import Image from 'next/image';


interface ListServices {
  title: string;
  link: string;
}

interface CardServicesProps {
  title: string;
  imageSrc: string;
  listServices: Array<ListServices>;
}

const CardServices = ({ title, imageSrc, listServices }: CardServicesProps) => {
  return (
    <section className="flex flex-col items-start justify-start w-full bg-white rounded-[104px] rounded-b-[96px] w-full lg:w-[615px]">
     <div className="relative w-full aspect-[615/350] rounded-t-[104px] overflow-hidden">
        <Image 
        src={imageSrc} 
        alt="Service 1" 
        fill
    className="object-cover" />
      </div>
      <div className="flex flex-col items-start justify-start py-[32px] px-[50px] w-full">
        <h3 className="text-[24px] font-[700] text-[#2B2B40] text-start">{title}</h3>
        <ul className="list-disc list-inside list-none w-full text-start mt-[32px] flex flex-col gap-4">
          {listServices.map((service) => (
            <li
              className=' w-full hover:bg-[#F1F2F9] cursor-pointer '
              key={service.title}
              onClick={() => window.location.href = service.link}
            >
              <div className='flex flex-row items-center justify-between gap-2'>
                <span className='lg:text-[24px] text-[18px] font-[500] text-[#2B2B40] text-start'>{service.title}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <path d="M6 16H26M26 16L18.5 8M26 16L18.5 24" stroke="#2B2B40" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CardServices