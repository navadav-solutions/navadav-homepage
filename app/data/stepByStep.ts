import { StepByStep } from "@/app/types/stepByStepTypes";
import { getAssetPath } from "@/app/utils/assets";
export const stepByStep: StepByStep[] = [
  {
    title: "Diagnóstico Inicial",
    description: "Profundizamos en cómo funciona tu negocio, identificando desafíos y oportunidades clave para trazar la ruta de mejora.",
    imageSrc: getAssetPath("/icons/steps/diagnostico.svg"),
  },
  {
    title: "Demo funcional",
    description: "Mostramos un primer avance práctico de la solución, para que visualices rápidamente cómo encaja con tus necesidades.",
    imageSrc: getAssetPath("/icons/steps/demo.svg"),
  },
  {
    title: "Retroalimentación Activa",
    description: "Recogemos tus impresiones y las de tu equipo para pulir la propuesta y asegurar que responde al 100% a tus expectativas.",
    imageSrc: getAssetPath("/icons/steps/retroalimentacion.svg"),
  },
  {
    title: "Despliegue Estratégico",
    description: "Lanzamos la solución en tu día a día, acompañándote de cerca para que impacte de forma inmediata en tus objetivos y crezca junto a ti.",
    imageSrc: getAssetPath("/icons/steps/diagnostico2.svg"),
  },
]

