import { ListServices } from "../types/listServicesTypes"
import { getAssetPath } from "../utils/assets"

export const listServicesUxUi: ListServices[] = [
  {
    title: "Diseño web",
    link: "https://www.google.com",
  },
  {
    title: "UX/UI Design",
    link: "https://www.google.com",
  },
  {
    title: "Mobile app design",
    link: "https://www.google.com",
  },
  {
    title: "Branding",
    link: "https://www.google.com",
  },
]


export const listServicesDevelopment: ListServices[] = [
  {
    title: "Custom software",
    link: "https://www.google.com",
  },
  {
    title: "Business Intelligence Consulting",
    link: "https://www.google.com",
  },
  {
    title: "Mobile app design",
    link: "https://www.google.com",
  },
  {
    title: "MS 365 Consulting",
    link: "https://www.google.com",
  },

]

export const listServicesAutomation: ListServices[] = [
  {
    title: "Custom software",
    link: "https://www.google.com",
  },
  {
    title: "Business Intelligence Consulting",
    link: "https://www.google.com",
  },
  {
    title: "Mobile app design",
    link: "https://www.google.com",
  },
  {
    title: "MS 365 Consulting",
    link: "https://www.google.com",
  },
]


export const services = [
  {
    title: "Desarrollo",
    imageSrc: getAssetPath("/images/services/desarrollo.png"),
    listServices: listServicesDevelopment,
  },
  {
    title: "Inteligencia de negocios",
    imageSrc: getAssetPath("/images/services/desarrollo.png"),
    listServices: listServicesDevelopment,
  },
  {
    title: "Automatización",
    imageSrc: getAssetPath("/images/services/desarrollo.png"),
    listServices: listServicesAutomation,
  },
  {
    title: "Diseño",
    imageSrc: getAssetPath("/images/services/diseno-service.png"),
    listServices: listServicesUxUi,
  },
]