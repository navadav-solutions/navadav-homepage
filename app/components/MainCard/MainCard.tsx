import { TextSegment } from "@/app/types/aboutDataTypes";
import Image from "next/image";

interface MainCardProps {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string | TextSegment[];
  reverse?: boolean;
}

const MainCard = ({
  imageSrc,
  imageAlt,
  icon,
  title,
  description,
  reverse = false,
}: MainCardProps) => {

  const renderDescription = (description: string | TextSegment[]) => {
    // Si es un array, renderiza cada segmento con su formato
    return (
      <p className="text-start lg:text-[24px] text-gray-600 leading-relaxed whitespace-pre-line">
        {Array.isArray(description) ? description.map((segment, index) => (
          <span key={index} className={segment.bold ? "font-bold" : ""}>
            {segment.text}
          </span>
        )) : description}
      </p>
    );
  };

  return (
    <div
      className={`flex flex-col lg:flex-row w-full ${
        reverse ? "lg:flex-row-reverse" : ""
      } bg-white rounded-[24px]`}
    >
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-start p-8 lg:p-12 lg:min-h-[500px] min-h-[300px]">
        <div className="flex flex-col items-start justify-start lg:w-[80%] w-[100%]">
          <div className="mb-8">{icon}</div>
          <h3 className="text-start text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
            {title}
          </h3>
          {renderDescription(description)}
        </div>
      </div>
      <div className={`w-full lg:w-1/2  lg:h-[400px] h-[300px] lg:h-auto lg:min-h-[500px] min-h-[300px] relative overflow-hidden ${reverse ? "lg:rounded-l-[24px]" : "lg:rounded-r-[24px] rounded-b-[0px]"}`}>
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill 
          className="object-cover" 
        />
      </div>
    </div>
  );
};

export default MainCard;
