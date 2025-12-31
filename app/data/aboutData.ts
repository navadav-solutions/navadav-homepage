import { AboutData, Brand, WorkLine, WhyNavadavFeature } from "../types/aboutDataTypes";
import { getAssetPath } from "../utils/assets";

export const aboutData: AboutData[] = [
  {
    id: 1,
    title: "Diseñamos tecnología pensada para tu realidad",
    description: [
      { text: "NAVADAV es una firma tecnológica especializada en " },
      { text: "diseñar soluciones empresariales a la medida", bold: true },
      { text: ".\n\nTrabajamos con empresas que necesitan que la tecnología se adapte a su forma real de operar, no al revés." },
    ],
    imageSrc: getAssetPath("/images/about/designImage.png"),
    imageAlt: "Diseñamos tecnología pensada para tu realidad",
    icon: getAssetPath("/icons/about/Icon_service.svg"),
    reverse: false,
    },
  {
    id: 2,
    title: "Nuestro enfoque es consultivo y práctico: ",
    description: [
      { text: "Entendemos el negocio, diseñamos la solución correcta y la construimos con una visión de largo plazo.\n\nNo creemos en implementaciones genéricas ni en soluciones desconectadas de la operación diaria." },
    ],
    imageSrc: getAssetPath("/images/about/focusImage.png"),
    imageAlt: "Nuestro enfoque es consultivo y práctico: ",
    icon: getAssetPath("/icons/about/Icon_service.svg"),
    reverse: true,
  },
];

export const brandsData: Brand[] = [
  {
    id: 1,
    name: "Clear",
    imageSrc: getAssetPath("/images/about/clear.png"),
    imageAlt: "Clear",
  },
  {
    id: 2,
    name: "Delivery",
    imageSrc: getAssetPath("/images/about/delivery.png"),
    imageAlt: "Delivery",
  },
  {
    id: 3,
    name: "Samsung",
    imageSrc: getAssetPath("/images/about/samsung.svg"),
    imageAlt: "Samsung",
  },
  {
    id: 4,
    name: "Glenair",
    imageSrc: getAssetPath("/images/about/glenair.png"),
    imageAlt: "Glenair",
  },
  {
    id: 5,
    name: "Bare",
    imageSrc: getAssetPath("/images/about/bare.png"),
    imageAlt: "Bare",
  },
  {
    id: 6,
    name: "Adidas",
    imageSrc: getAssetPath("/images/about/adidas.png"),
    imageAlt: "Adidas",
  },
];


export const workLinesData: WorkLine[] = [
  {
    id: 1,
    title: "Soluciones empresariales a la medida",
    description: "Diseñamos y construimos sistemas que se ajusten a la forma en que cada empresa opera, priorizando estabilidad, escalabilidad y claridad operativa.",
    imageSrc: getAssetPath("/icons/about/suitcaseIcon.svg"),
    url: "/servicios/soluciones-a-medida/",
  },
  {
    id: 2,
    title: "Automatización e inteligencia artificial aplicada",
    description: "Ayudamos a las empresas a optimizar su operación mediante automatización de procesos y agentes inteligentes que potencian el trabajo de las personas.",
    imageSrc: getAssetPath("/icons/about/aiIcon.svg"),
    url: "/servicios/automatizacion-ai/",
  },
  {
    id: 3,
    title: "Inteligencia de negocio y transformación digital",
    description: "Acompañamos a las organizaciones en el uso estratégico de sus datos y en la adopción de prácticas y herramientas que mejoran la gestión y la toma de decisiones.",
    imageSrc: getAssetPath("/icons/about/inteligenciaIcon.svg"),
    url: "/servicios/inteligencia-negocios/",
  },
];

export const whyNavadavData: WhyNavadavFeature[] = [
  {
    id: 1,
    title: "Visión de negocio",
    description: "Las decisiones tecnológicas parten del entendimiento del negocio y su impacto en el tiempo.",
    icon: getAssetPath("/icons/about/arrow-right.svg"), // Placeholder, necesitarás crear el icono de diana
    iconColor: "purple",
  },
  {
    id: 2,
    title: "A la medida",
    description: "Diseñamos soluciones que se adaptan a la forma real de trabajar de cada organización.",
    icon: getAssetPath("/icons/about/api.svg"), // Placeholder, necesitarás crear el icono de brackets
    iconColor: "light-blue",
  },
  {
    id: 3,
    title: "Responsabilidad técnica",
    description: "Cuidamos que lo que se construye funcione hoy y siga siendo sostenible mañana.",
    icon: getAssetPath("/icons/about/refactor.svg"), // Placeholder, necesitarás crear el icono de escudo
    iconColor: "light-blue",
  },
  {
    id: 4,
    title: "Escalables",
    description: "Las soluciones están pensadas para crecer y adaptarse sin rehacer todo desde cero.",
    icon: getAssetPath("/icons/about/arrowYellow.svg"), // Placeholder, necesitarás crear el icono de flechas
    iconColor: "yellow",
  },
];