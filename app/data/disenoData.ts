import { MainCard } from "../types/mainCardTypes";
import { getAssetPath } from "../utils/assets";

export const disenoData: MainCard[] = [
  {
    id: 1,
    title: "Diseño UX/UI",
    description: "Diseñamos interfaces intuitivas y atractivas que conectan con tus usuarios y mejoran la experiencia digital.",
    imageSrc: getAssetPath("/images/services/diseno.png"),
    imageAlt: "Diseño UX/UI",
    icon: getAssetPath("/icons/services/diseno.svg"),
    reverse: false
  },
  {
    id: 2,
    title: "Identidad Visual y Sitios Web Corporativos",
    description: "Construimos tu imagen digital: logo, colores, tipografía y sitio web, transmitiendo la esencia y profesionalismo de tu marca.",
    imageSrc: getAssetPath("/images/services/identidad.png"),
    imageAlt: "Identidad Visual y Sitios Web Corporativos",
    icon: getAssetPath("/icons/services/identidad.svg"),
    reverse: true
  }
]