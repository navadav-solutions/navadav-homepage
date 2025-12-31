import { MainCard } from "../types/mainCardTypes";
import { getAssetPath } from "../utils/assets";

export const inteligenciaNegociosData: MainCard[] = [
  {
    id: 1,
    title: "Modelamiento de Datos y Dashboards Gerenciales",
    description:
      "Transformamos los datos de tu empresa en información clara, confiable y útil para la gestión. Diseñamos modelos de datos y sistemas de inteligencia que te permiten comprender el desempeño real de tu negocio, anticipar riesgos y tomar decisiones basadas en evidencia.",
    imageSrc: getAssetPath("/images/services/modelamiento.png"),
    imageAlt: "Inteligencia de Negocios",
    icon: getAssetPath("/icons/services/modelamiento.svg"),
    reverse: false,
  },
  {
    id: 2,
    title: "Inteligencia de Negocios",
    description:
      "Transformamos tus datos en información estratégica para tomar decisiones informadas y optimizar tu negocio.",
    imageSrc: getAssetPath("/images/services/consultoria.png"),
    imageAlt: "Inteligencia de Negocios",
    icon: getAssetPath("/icons/services/consultoria.svg"),
    reverse: true,
  },
  {
    id: 3,
    title: "Inteligencia de Negocios",
    description:
      "Transformamos tus datos en información estratégica para tomar decisiones informadas y optimizar tu negocio.",
    imageSrc: getAssetPath("/images/services/transformacion.png"),
    imageAlt: "Inteligencia de Negocios",
    icon: getAssetPath("/icons/services/transformacion.svg"),
    reverse: false,
  },
];
