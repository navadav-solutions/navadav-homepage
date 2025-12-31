import { StepByStep } from "@/app/types/stepByStepTypes";
import { getAssetPath } from "@/app/utils/assets";
export const stepByStep: StepByStep[] = [
  {
    title: "Diagnóstico Inicial",
    description:
      "Nos involucramos en tu negocio y operación para identificar puntos críticos y oportunidades reales de mejora en tus sistemas.",
    imageSrc: getAssetPath("/icons/steps/diagnostico.svg"),
  },
  {
    title: "Desarrollo progresivo",
    description:
      "Desarrollamos la solución de forma progresiva, entregando avances funcionales que permiten evaluar decisiones, ajustar el enfoque y reducir riesgos desde etapas tempranas.",
    imageSrc: getAssetPath("/icons/steps/demo.svg"),
  },
  {
    title: "Validación operativa",
    description:
      "Revisamos cada avance contigo y con tu equipo, incorporando retroalimentación continua para asegurar que la solución funciona correctamente.",
    imageSrc: getAssetPath("/icons/steps/retroalimentacion.svg"),
  },
  {
    title: "Integración en la operación",
    description:
      "Integramos la solución en tu operación diaria y acompañamos su evolución para asegurar impacto real y sostenibilidad en el tiempo.",
    imageSrc: getAssetPath("/icons/steps/diagnostico2.svg"),
  },
];
