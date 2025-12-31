import { AboutData, Brand } from "../types/aboutDataTypes";
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