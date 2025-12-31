
import { MainCard } from "../types/mainCardTypes";
import { getAssetPath } from "../utils/assets";

export const solucionesAMedidaData: MainCard[] = [
  {
    id: 1,
    title: "Aplicaciones a la Medida",
    description: "Diseñamos y desarrollamos plataformas adaptadas a tus procesos de negocio, con tecnología moderna, alto rendimiento y escalabilidad.",
    imageSrc: getAssetPath("/images/services/api.png"),
    imageAlt: "Aplicaciones a la Medida",
    icon: getAssetPath("/icons/ui/api.svg"),
    reverse: false
  },
  {
    id: 2,
    title: "Integraciones y APIs Empresariales",
    description: "Conectamos tus sistemas, aplicaciones y servicios externos para que tu información fluya de forma segura y automatizada.",
    imageSrc: getAssetPath("/images/services/refactor.png"),
    imageAlt: "Integraciones y APIs Empresariales",
    icon: getAssetPath("/icons/ui/refactor.svg"),
    reverse: true
  },
  {
    id: 3,
    title: "Modernización y Refactorización de Sistemas",
    description: "Transformamos aplicaciones heredadas en arquitecturas modernas, más estables, eficientes y fáciles de mantener.",
    imageSrc: getAssetPath("/images/services/refactor.png"),
    imageAlt: "Modernización y Refactorización de Sistemas",
    icon: getAssetPath("/icons/ui/refactor.svg"),
    reverse: false
  },
]