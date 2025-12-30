

interface TitleSectionProps {
  title: string;
  description: string;
}

const TitleSection = ({ title, description }: TitleSectionProps) => {
  return (
    <>
      <h2 className="text-[32px] lg:text-[56px] font-bold text-[#2B2B40] mb-6">
        {title}
      </h2>
      <p className="text-[24px] font-[400] text-[#585967] lg:w-[80%] w-[100%] m-[0px]">
        {description}
      </p>
    </>
  )
}

export default TitleSection