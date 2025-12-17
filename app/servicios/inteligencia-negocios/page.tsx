
import ContactForm from "../../components/ContactForm/ContactForm";
import MainCard from "../../components/MainCard/MainCard";
import Layout from "../../layout/Layout";
import Image from "next/image";
import { getAssetPath } from "../../utils/assets";
import AccordeonCard from "@/app/components/AccordeonCard/AccordeonCard";

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
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${getAssetPath("/images/hero/main.png")})`,
        }}
      >
        <div className="w-full lg:w-[80%] mx-auto h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl lg:text-5xl lg:text-6xl font-bold mb-12">
              <span className="text-gray-800 leading-[1.3]">
                {/* Mobile: cada línea en bloque */}
                <span className="block lg:hidden">
                  Tu aliado tecnológico
                </span>
                <span className="block lg:hidden">
                  para hacer{" "}
                  <span
                    className="inline-block"
                    style={{
                      background:
                        "linear-gradient(93deg, #32C3EA, #3043D0, #33055A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    crecer y
                  </span>
                </span>
                <span className="block lg:hidden">
                  <span
                    className="inline-block"
                    style={{
                      background:
                        "linear-gradient(93deg, #32C3EA, #3043D0, #33055A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    modernizar
                  </span>{" "}
                  tu negocio.
                </span>
                {/* Desktop: todo en línea */}
                <span className="hidden lg:inline">
                  Tu aliado tecnológico para hacer{" "}
                  <span
                    className="inline-block"
                    style={{
                      background:
                        "linear-gradient(93deg, #32C3EA, #3043D0, #33055A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    crecer y modernizar
                  </span>{" "}
                  tu negocio.
                </span>
              </span>
            </h1>
            <button
              className="h-[58px] lg:h-[auto] bg-gradient-to-b from-blue-600 to-blue-500 text-white px-[36px] py-[20px] rounded-[16px] text-lg font-semibold shadow-lg flex items-center gap-2 hover:from-blue-700 hover:to-blue-600 transition-all hover:scale-105 cursor-pointer"
              style={{
                background:
                  "radial-gradient(85.16% 87.63% at 50% 50%, #0743D7 0%, #2D69FD 100%)",
                boxShadow: "0 0 30px 0 rgba(113, 137, 255, 0.70)",
              }}
            >
              Agenda cita
              <Image
                src={getAssetPath("/icons/ui/arrow-right.svg")}
                alt="Arrow Right"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </section>
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