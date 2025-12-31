import { MainCard } from "../types/mainCardTypes";
import { getAssetPath } from "../utils/assets";

export const automatizationData: MainCard[] = [
  {
    id: 1,
    title: "Automatización de Procesos",
    description:
      "Identificamos tareas repetitivas y las automatizamos para liberar tiempo del equipo y enfocarlo en actividades de mayor valor para la operación.",
    imageSrc: getAssetPath("/images/services/automatizacion.png"),
    imageAlt: "Automatización de Procesos",
    icon: getAssetPath("/icons/services/automatizacion.svg"),
    reverse: false,
  },
  {
    id: 2,
    title: "Asistentes y Chatbots Inteligentes",
    description:
      "Creamos asistentes virtuales y bots entrenados con la información de tu empresa, que agilizan la atención y la toma de decisiones.",
    imageSrc: getAssetPath("/images/services/asistentes.png"),
    imageAlt: "Asistentes y Chatbots Inteligentes",
    icon: getAssetPath("/icons/services/asistentes.svg"),
    reverse: true,
  },
  {
    id: 3,
    title: "Flujos Inteligentes de Negocio",
    description:
      "Implementamos flujos inteligentes que optimizan la coordinación operativa y permiten a los equipos dedicar su tiempo a actividades de mayor valor.",
    imageSrc: getAssetPath("/images/services/analitica.png"),
    imageAlt: "Analítica de Datos",
    icon: getAssetPath("/icons/services/analitica.svg"),
    reverse: false,
  },
];
