
import ContactForm from "../../components/ContactForm/ContactForm";
import MainCard from "../../components/MainCard/MainCard";
import Layout from "../../layout/Layout";
import Image from "next/image";
import { getAssetPath } from "../../utils/assets";
import AccordeonCard from "@/app/components/AccordeonCard/AccordeonCard";

const questions = [
  {
    title: "¿Qué tan compleja es la implementación de una solución de automatización o IA?",
    paragraph: "El proceso se adapta al tamaño y madurez de tu empresa. Comenzamos con una evaluación de tus operaciones y ejecutamos implementaciones progresivas, con entregas visibles y bajo riesgo.",
  },
  {
    title: "¿Cómo garantizan la seguridad y confidencialidad de la información?",
    paragraph: "El proceso se adapta al tamaño y madurez de tu empresa. Comenzamos con una evaluación de tus operaciones y ejecutamos implementaciones progresivas, con entregas visibles y bajo riesgo.",
  },
  {
    title: "¿Necesito cambiar mis sistemas actuales para implementar automatización o agentes inteligentes?",
    paragraph: "El proceso se adapta al tamaño y madurez de tu empresa. Comenzamos con una evaluación de tus operaciones y ejecutamos implementaciones progresivas, con entregas visibles y bajo riesgo.",
  },
  {
    title: "¿Qué nivel de personalización ofrecen los agentes inteligentes o flujos automatizados?",
    paragraph: "El proceso se adapta al tamaño y madurez de tu empresa. Comenzamos con una evaluación de tus operaciones y ejecutamos implementaciones progresivas, con entregas visibles y bajo riesgo.",
  },
  {
    title: "¿Brindan acompañamiento después de la implementación?",
    paragraph: "El proceso se adapta al tamaño y madurez de tu empresa. Comenzamos con una evaluación de tus operaciones y ejecutamos implementaciones progresivas, con entregas visibles y bajo riesgo.",
  },
]

const AutomatizacionAI = () => {
  return (
    <Layout>
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${getAssetPath("/ejemplo1.png")})`,
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
                src={getAssetPath("/arrowRight.svg")}
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
          imageSrc={getAssetPath("/automatizacionImage.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/automatizacionIcon.svg")}
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
          imageSrc={getAssetPath("/asistentesImage.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/asistentesIcon.svg")}
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
          imageSrc={getAssetPath("/analiticaImage.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/analiticaIcon.svg")}
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