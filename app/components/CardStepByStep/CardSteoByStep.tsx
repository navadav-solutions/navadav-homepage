import { getAssetPath } from "@/app/utils/assets";
import Image from "next/image";

const CardStepByStep = ({ imageSrc, title, description }: { imageSrc: string, title: string, description: string }) => {
  return (
    <section className="flex flex-col items-start justify-start w-full bg-white rounded-[24px] p-[36px]" >
      <div className="">
        <Image src={getAssetPath(imageSrc)} alt="Step 1" width={100} height={100} />
      </div>
      <div className="flex flex-col items-start justify-start w-[100%]">
        <span className="text-[40px] font-[700] text-[#2B2B40]">{title}</span>
        <p className="text-[24px] font-[400] text-[#585967] text-start w-[90%]">{description}</p>
      </div>
    </section>
  );
};

export default CardStepByStep;