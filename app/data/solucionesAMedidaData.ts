import { MainCard } from "../types/mainCardTypes";
import { getAssetPath } from "../utils/assets";

export const solucionesAMedidaData: MainCard[] = [
  {
    id: 1,
    title: "Aplicaciones a la Medida",
    description:
      "Desarrollamos aplicaciones web diseñadas específicamente para tu empresa, con una arquitectura sólida que garantiza rendimiento, seguridad y crecimiento sostenido en el tiempo.",
    imageSrc: getAssetPath("/images/services/api.png"),
    imageAlt: "Aplicaciones a la Medida",
    icon: getAssetPath("/icons/ui/api.svg"),
    reverse: false,
  },
  {
    id: 2,
    title: "Integraciones y APIs Empresariales",
    description:
      "Integramos tus sistemas y servicios para unificar la información, reducir tareas manuales y habilitar una operación más ágil y conectada.",
    imageSrc: getAssetPath("/images/services/refactor.png"),
    imageAlt: "Integraciones y APIs Empresariales",
    icon: getAssetPath("/icons/ui/refactor.svg"),
    reverse: true,
  },
  {
    id: 3,
    title: "Modernización y Refactorización de Sistemas",
    description:
      "Modernizamos sistemas existentes sin interrumpir la operación, mejorando estabilidad, rendimiento y mantenibilidad para preparar tu plataforma para el futuro.",
    imageSrc: getAssetPath("/images/services/refactor.png"),
    imageAlt: "Modernización y Refactorización de Sistemas",
    icon: getAssetPath("/icons/ui/refactor.svg"),
    reverse: false,
  },
];
