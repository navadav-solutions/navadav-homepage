import { ListServices } from "@/app/types/listServicesTypes";
import { getAssetPath } from "@/app/utils/assets";

const listServicesDevelopment: ListServices[] = [
  {
    title: "Aplicaciones a la Medida",
    link: "https://www.google.com",
  },
  {
    title: "Integraciones y APIs Empresariales",
    link: "https://www.google.com",
  },
  {
    title: "Modernización y Refactorización de Sistemas",
    link: "https://www.google.com",
  },
];

const listServicesBusinessIntelligence: ListServices[] = [
  {
    title: "Modelamiento de Datos y Dashboards Gerenciales",
    link: "https://www.google.com",
  },
  {
    title: "Consultoría Microsoft 365 y Automatización Empresarial",
    link: "https://www.google.com",
  },
  {
    title: "Transformación Digital y Metodologías Ágiles",
    link: "https://www.google.com",
  },
];

const listServicesUxUi: ListServices[] = [
  {
    title: "Diseño UX/UI",
    link: "https://www.google.com",
  },
  {
    title: "Identidad Visual y Sitios Web Corporativos",
    link: "https://www.google.com",
  },
  {
    title: "Optimización de Experiencia Digital",
    link: "https://www.google.com",
  },
];

const listServicesAutomation: ListServices[] = [
  {
    title: "Automatización de Procesos",
    link: "https://www.google.com",
  },
  {
    title: "Agentes Inteligentes Empresariales",
    link: "https://www.google.com",
  },
  {
    title: "Flujos Inteligentes de Negocio",
    link: "https://www.google.com",
  },
];

export const services = [
  {
    title: "Soluciones Empresariales a la Medida",
    imageSrc: getAssetPath("/images/services/desarrollo.png"),
    listServices: listServicesDevelopment,
  },

  {
    title: "Automatización e Inteligencia Artificial",
    imageSrc: getAssetPath("/images/services/automatizacion.png"),
    listServices: listServicesAutomation,
  },
  {
    title: "Inteligencia de Negocio",
    imageSrc: getAssetPath("/images/services/inteligencia-negocio.png"),
    listServices: listServicesBusinessIntelligence,
  },
  {
    title: "Diseño y Experiencia Digital",
    imageSrc: getAssetPath("/images/services/diseno-service.png"),
    listServices: listServicesUxUi,
  },
];
