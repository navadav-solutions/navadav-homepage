import { MainCard } from "../types/mainCardTypes";
import { getAssetPath } from "../utils/assets";

export const inteligenciaNegociosData: MainCard[] = [
  {
    id: 1,
    title: "Modelamiento de Datos y Dashboards Gerenciales",
    description:
      "Transformamos los datos de tu empresa en información clara y confiable, diseñando modelos y dashboards que permiten entender el desempeño real del negocio y tomar decisiones basadas en evidencia.",
    imageSrc: getAssetPath("/images/services/modelamiento.png"),
    imageAlt: "Inteligencia de Negocios",
    icon: getAssetPath("/icons/services/modelamiento.svg"),
    reverse: false,
  },
  {
    id: 2,
    title: "Consultoría Microsoft 365 y Automatización Empresarial",
    description:
      "Optimizamos procesos internos aprovechando el ecosistema Microsoft para mejorar la colaboración, reducir tareas repetitivas y aumentar la eficiencia sin interrumpir la operación.",
    imageSrc: getAssetPath("/images/services/consultoria.png"),
    imageAlt: "Inteligencia de Negocios",
    icon: getAssetPath("/icons/services/consultoria.svg"),
    reverse: true,
  },
  {
    id: 3,
    title: "Transformación Digital y Metodologías Ágiles",
    description:
      "Acompañamos a tu empresa en la adopción de prácticas y modelos de trabajo que fortalecen la colaboración, la medición y la mejora continua como parte de la operación diaria.",
    imageSrc: getAssetPath("/images/services/transformacion.png"),
    imageAlt: "Inteligencia de Negocios",
    icon: getAssetPath("/icons/services/transformacion.svg"),
    reverse: false,
  },
];
