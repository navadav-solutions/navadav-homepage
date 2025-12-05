import Image from "next/image";

interface MainCardProps {
  imageSrc: string;
  imageAlt: string;
  icon: React.ReactNode;
  title: string;
  description: string;
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
  return (
    <div
      className={`flex flex-col md:flex-row w-full ${
        reverse ? "md:flex-row-reverse" : ""
      } bg-white rounded-[24px]`}
    >
      <div className="w-full md:w-1/2 flex flex-col items-start justify-start p-8 md:p-12 min-h-[500px]">
        <div className="flex flex-col items-start justify-start w-[80%]">
          <div className="mb-8">{icon}</div>
          <h3 className="text-start text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            {title}
          </h3>
          <p className="text-start md:text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <div className={`w-full md:w-1/2  h-[400px] md:h-auto min-h-[500px] relative overflow-hidden ${reverse ? "rounded-l-[24px]" : "rounded-r-[24px]"}`}>
        <Image 
          src={imageSrc} 
          alt={imageAlt} 
          fill 
          className="object-cover " 
        />
      </div>
    </div>
  );
};

export default MainCard;
