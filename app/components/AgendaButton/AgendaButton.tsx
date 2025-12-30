import Image from "next/image";
import { getAssetPath } from "../../utils/assets";
import { scrollToContact } from "../../layout/Layout";

interface AgendaButtonProps {
  isVisible: boolean;
}

const AgendaButton = ({ isVisible }: AgendaButtonProps) => {
  return (
    <button
      className={`h-[55px] lg:h-[auto] bg-gradient-to-b from-blue-600 to-blue-500 text-white px-[36px] py-[17px] rounded-[16px] text-lg font-semibold shadow-lg flex items-center gap-2 hover:from-blue-700 hover:to-blue-600 transition-all hover:scale-105 cursor-pointer
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      style={{
        background: "radial-gradient(50% 50% at 50% 50%, #0743D7 0%, #2D69FD 100%)",
        boxShadow: "0 -4px 4px 0 rgba(3, 47, 157, 0.40) inset, 0 4px 4px 0 rgba(250, 251, 255, 0.40) inset",
        transitionDuration: "700ms",
        transitionTimingFunction: "ease-out",
        ...(isVisible && {
          transitionDelay: "200ms",
        }),
      }}
      onClick={scrollToContact}
    >
      Agenda cita
      <Image
        src={getAssetPath("/icons/ui/arrow-right.svg")}
        alt="Arrow Right"
        width={20}
        height={20}
        className="w-5 h-5"
      />
    </button>
  );
};

export default AgendaButton;

