import { getAssetPath } from '@/app/utils/assets'
import Image from 'next/image'

const CustomerHero = () => {
  return (
    <section className="flex flex-col lg:flex-row gap-10 w-[90%] bg-[#F1F2F9] mx-auto rounded-[24px] lg:p-[64px] p-[24px]">
    <div className="flex-1w-[465px] max-w-[465px] max-h-[392px] h-[392px]">
      <Image
        src={getAssetPath("/images/testimonials/background.png")}
        alt="Home Layout"
        width={400}
        height={400}
        className="object-cover w-full h-full rounded-[53px]" />
    </div>

    <div className="flex-1 flex flex-col items-start justify-start">
      <div>
        <Image src={getAssetPath("/icons/ui/quote.svg")} alt="Quote Icon" width={115} height={115} className="lg:w-[115px] w-[80px] h-[80px] lg:h-auto lg:w-auto" />
      </div>
      <p className="lg:text-[32px] text-[24px] font-[500] lg:w-[80%] w-[100%] text-[#53535B] lg:mb-0 mb-4" >
        We love navadav! Our designers were using it for their projects, so clients already knew what navadav was and how to use it.
      </p>
      <div className="flex items-center justify-start gap-2 mt-auto ">
        <p className="lg:text-[16px] text-[14px] font-[400] text-gray-600">
          <b>Jenn Wilson</b>  Co-founder de
        </p>
        <Image src={getAssetPath("/images/misc/amazon-badge.png")} alt="Amazon Badge" width={100} height={100} className="lg:w-[100px] w-[80px] lg:h-auto lg:w-auto" />
      </div>
    </div>
  </section>
  )
}

export default CustomerHero