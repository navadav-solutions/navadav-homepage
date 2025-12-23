import ContactForm from "../../components/ContactForm/ContactForm";
import MainCard from "../../components/MainCard/MainCard";
import Layout from "../../layout/Layout";
import Image from "next/image";
import { getAssetPath } from "../../utils/assets";
import AccordeonCard from "@/app/components/AccordeonCard/AccordeonCard";
import ServiceHero from "@/app/components/ServiceHero/ServiceHero";

const questions = [
  {
    title: "¿Cómo aborda NAVADAV un proceso de transformación digital?",
    paragraph: "Comenzamos con un diagnóstico de tu modelo operativo, cultura y herramientas actuales. A partir de ahí, definimos una hoja de ruta clara con iniciativas priorizadas, responsables y métricas de impacto que conectan tecnología con resultados de negocio.",
  },
  {
    title: "¿Cómo se garantiza la seguridad de los datos analizados o visualizados?",
    paragraph: "La información se gestiona en entornos privados y bajo políticas de acceso controlado. Además, cumplimos con las buenas prácticas de seguridad recomendadas por Microsoft y los estándares de la industria.",
  },
  {
    title: "¿Necesito tener licencias de Microsoft 365 para acceder a estos servicios?",
    paragraph: "No necesariamente. Podemos asesorarte sobre los planes más convenientes o implementar soluciones compatibles con las herramientas que ya utilizas.",
  },
  {
    title: "¿Cómo puede la inteligencia de datos mejorar mi gestión empresarial?",
    paragraph: "Te permite entender lo que realmente ocurre en tu organización, anticiparte a los problemas y tomar decisiones basadas en evidencia, no en suposiciones. Los datos se convierten en un activo estratégico que guía el crecimiento y la eficiencia.",
  },
  {
    title: "¿Cómo acompañan a la empresa durante el proceso de cambio?",
    paragraph: "Brindamos capacitación, documentación y seguimiento continuo para asegurar la adopción efectiva de nuevas herramientas, prácticas y metodologías.",
  },
  {
    title: "¿Cuánto tiempo toma un proceso de transformación digital?",
    paragraph: "Depende del tamaño de la empresa y su madurez tecnológica, pero trabajamos por fases para generar resultados visibles desde los primeros meses.",
  }
]

const InteligenciaNegocios = () => {
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
          imageSrc={getAssetPath("/images/services/modelamiento.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/icons/services/modelamiento.svg")}
              alt="Main Card Icon"
              width={100}
              height={100}
            />
          }
          title="Modelamiento de Datos y Dashboards Gerenciales"
          description="Convertimos los datos de tu empresa en información útil, visual y accionable, para respaldar decisiones estratégicas."
        />
      </section>

      <section className="w-[80%] mx-auto pt-12 text-center">
        <MainCard
          imageSrc={getAssetPath("/images/services/consultoria.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/icons/services/consultoria.svg")}
              alt="Main Card Icon"
              width={100}
              height={100}
            />
          }
          title="Consultoría Microsoft 365 y Automatización Empresarial"
          description="Optimizamos tus procesos internos aprovechando al máximo las herramientas del ecosistema Microsoft: Power Automate, Power BI, Teams y SharePoint."
          reverse={true}
        />
      </section>

      <section className="w-[80%] mx-auto py-12 text-center">
        <MainCard
          imageSrc={getAssetPath("/images/services/transformacion.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/icons/services/transformacion.svg")}
              alt="Main Card Icon"
              width={100}
              height={100}
            />
          }
          title="Transformación Digital y Metodologías Ágiles"
          description="Te ayudamos a modernizar tu organización, adoptando prácticas ágiles y una cultura digital orientada a la productividad."
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

export default InteligenciaNegocios