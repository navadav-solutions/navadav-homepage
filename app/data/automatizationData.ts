import { MainCard } from "../types/mainCardTypes";
import { getAssetPath } from "../utils/assets";

export const automatizationData: MainCard[] = [
  {
    id: 1,
    title: "Automatización de Procesos",
    description: "Implementamos soluciones que ahorran tiempo y eliminan errores humanos, optimizando la productividad y la precisión operativa.",
    imageSrc: getAssetPath("/images/services/automatizacion.png"),
    imageAlt: "Automatización de Procesos",
    icon: getAssetPath("/icons/services/automatizacion.svg"),
    reverse: false
  },
  {
    id: 2,
    title: "Asistentes y Chatbots Inteligentes",
    description: "Creamos asistentes virtuales y bots entrenados con la información de tu empresa, que agilizan la atención y la toma de decisiones.",
    imageSrc: getAssetPath("/images/services/asistentes.png"),
    imageAlt: "Asistentes y Chatbots Inteligentes",
    icon: getAssetPath("/icons/services/asistentes.svg"),
    reverse: true
  },
  {
    id: 3,
    title: "Analítica de Datos",
    description: "Analizamos tus datos para obtener insights y tomar decisiones basadas en evidencia.",
    imageSrc: getAssetPath("/images/services/analitica.png"),
    imageAlt: "Analítica de Datos",
    icon: getAssetPath("/icons/services/analitica.svg"),
    reverse: false
  }
]