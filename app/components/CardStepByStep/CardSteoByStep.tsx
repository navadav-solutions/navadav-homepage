import Image from "next/image";

const CardStepByStep = ({ imageSrc, title, description }: { imageSrc: string, title: string, description: string }) => {
  return (
    <section className="flex flex-col items-start justify-start w-full bg-white rounded-[24px] p-[36px]" >
      <div className="">
        <Image src={imageSrc} alt="Step 1" width={100} height={100} className="lg:w-[100px] w-[80px] lg:h-auto lg:w-auto" />
      </div>
      <div className="flex flex-col items-start justify-start w-[100%]">
        <span className="lg:text-[40px] text-[24px] font-[700] text-[#2B2B40] text-start lg:text-center">{title}</span>
        <p className="lg:text-[24px] text-[18px] font-[400] text-[#585967] text-start lg:w-[90%] w-[100%]">{description}</p>
      </div>
    </section>
  );
};

export default CardStepByStep;