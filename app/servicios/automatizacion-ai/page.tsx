import ContactForm from "../../components/ContactForm/ContactForm";
import MainCard from "../../components/MainCard/MainCard";
import Layout from "../../layout/Layout";
import Image from "next/image";
import { getAssetPath } from "../../utils/assets";
import AccordeonCard from "@/app/components/AccordeonCard/AccordeonCard";
import ServiceHero from "@/app/components/ServiceHero/ServiceHero";

const questions = [
  {
    title: "¿Qué tan compleja es la implementación de una solución de automatización o IA?",
    paragraph: "El proceso se adapta al tamaño y madurez de tu empresa. Comenzamos con una evaluación de tus operaciones y ejecutamos implementaciones progresivas, con entregas visibles y bajo riesgo.",
  },
  {
    title: "¿Cómo garantizan la seguridad y confidencialidad de la información?",
    paragraph: "Protegemos los datos de cada cliente mediante control de acceso, cifrado y buenas prácticas de desarrollo seguro. La información sensible se gestiona de forma privada y segura, sin exponerla a entornos externos ni comprometer su confidencialidad.",
  },
  {
    title: "¿Necesito cambiar mis sistemas actuales para implementar automatización o agentes inteligentes?",
    paragraph: "No. Diseñamos soluciones que se integran con tus herramientas y sistemas existentes, evitando interrupciones o reemplazos innecesarios.",
  },
  {
    title: "¿Qué tipo de resultados puedo esperar y en cuánto tiempo?",
    paragraph: "Depende del alcance, pero las mejoras en tiempos, precisión y reducción de errores suelen ser visibles en las primeras semanas tras la implementación.",
  },
  {
    title: "¿Qué nivel de personalización ofrecen los agentes inteligentes o flujos automatizados?",
    paragraph: "Cada solución se construye en torno a tus procesos, políticas y lenguaje interno. No usamos plantillas; creamos modelos adaptados a tu contexto.",
  },
  {
    title: "¿Brindan acompañamiento después de la implementación?",
    paragraph: "Sí. Ofrecemos acompañamiento estratégico, revisión periódica de desempeño y optimización continua para maximizar los beneficios a largo plazo.",
  },
]

const AutomatizacionAI = () => {
  return (
    <Layout>
      <ServiceHero />
      <section className="w-[80%] mx-auto py-16 text-center flex flex-col justify-center items-center">
        <h2 className="text-[32px] lg:text-[48px] font-semibold text-gray-800 mb-6">
          Automatización e Inteligencia Artificial
        </h2>
        <p className="text-[24px] lg:text-[32px] font-[400] text-gray-600 lg:w-[80%] w-[100%] m-[0px]">
          Reducimos tareas manuales y mejoramos la eficiencia con flujos automatizados e inteligencia artificial aplicada.
        </p>
      </section>


      <section className="w-[80%] mx-auto pt-0 text-center">
        <MainCard
          imageSrc={getAssetPath("/images/services/automatizacion.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/icons/services/automatizacion.svg")}
              alt="Main Card Icon"
              width={100}
              height={100}
            />
          }
          title="Automatización de Procesos"
          description="Implementamos soluciones que ahorran tiempo y eliminan errores humanos, optimizando la productividad y la precisión operativa."
        />
      </section>

      <section className="w-[80%] mx-auto pt-12 text-center">
        <MainCard
          imageSrc={getAssetPath("/images/services/asistentes.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/icons/services/asistentes.svg")}
              alt="Main Card Icon"
              width={100}
              height={100}
            />
          }
          title="Asistentes y Chatbots Inteligentes"
          description="Creamos asistentes virtuales y bots entrenados con la información de tu empresa, que agilizan la atención y la toma de decisiones."
          reverse={true}
        />
      </section>

      <section className="w-[80%] mx-auto py-12 text-center">
        <MainCard
          imageSrc={getAssetPath("/images/services/analitica.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/icons/services/analitica.svg")}
              alt="Main Card Icon"
              width={100}
              height={100}
            />
          }
          title="Analítica y Datos Inteligentes"
          description="Integramos y procesamos tus datos para generar reportes y dashboards que impulsen decisiones estratégicas."
          reverse={false}
        />
      </section>

      <section className="w-[80%] mx-auto py-16 text-center flex flex-col justify-center items-center">
        <h2 className="text-[32px] lg:text-[48px] font-semibold text-gray-800 mb-6">
          Preguntas Frecuentes
        </h2>
        <p className="text-[24px] lg:text-[32px] font-[400] text-gray-600 lg:w-[80%] w-[100%] m-[0px]">
          Respuestas a tus dudas más comunes
        </p>
      </section>

      <section className="w-[80%] lg:w-[60%] mx-auto py-8 text-center flex flex-col justify-center items-center gap-8">
        {
          questions?.map((question) => (
            <AccordeonCard
              key={question.title}
              title={question.title}
              paragraph={question.paragraph}
            />
          ))
        }
      </section>

      <ContactForm />
    </Layout>
  )
}

export default AutomatizacionAI