import Image from "next/image";

const CardStepByStep = ({
  imageSrc,
  title,
  description,
  isWorkLineSection = false,
  url,
}: {
  imageSrc: string;
  title: string;
  description: string;
  isWorkLineSection?: boolean;
  url?: string;
}) => {
  return (
    <section className="flex flex-col items-start justify-start w-full rounded-[24px] p-[36px] bg-white"
    style={{
      background: isWorkLineSection ? "linear-gradient(207deg, #FFF 39.37%, #F2F3FB 100.34%)" : "bg-white",
    }}
    >
      <div className="">
        <Image
          src={imageSrc}
          alt="Step"
          width={100}
          height={100}
          className="lg:w-[100px] w-[80px] lg:h-auto lg:w-auto"
        />
      </div>
      <div className="flex flex-col items-start justify-start w-[100%]">
        <span className={`text-[24px] font-[700] text-[#2B2B40] text-start lg:text-left ${isWorkLineSection ? "lg:text-[32px] w-[90%]" : "lg:text-[40px] "}`}>
          {title}
        </span>
        <p className="lg:text-[24px] text-[18px] font-[400] text-[#585967] text-start lg:w-[90%] w-[100%]">
          {description}
        </p>
      </div>
      {isWorkLineSection && (
        <a href={url} className="text-[24px] font-[700] text-[#0743D7] text-start lg:w-[90%] w-[100%] mt-4 text-decoration-line: underline">
          Ver más
        </a>
      )}
    </section>
  );
};

export default CardStepByStep;
