
import ContactForm from "../../components/ContactForm/ContactForm";
import MainCard from "../../components/MainCard/MainCard";
import Layout from "../../layout/Layout";
import Image from "next/image";
import { getAssetPath } from "../../utils/assets";
import AccordeonCard from "@/app/components/AccordeonCard/AccordeonCard";

const questions = [
  {
    title: "¿Cómo es el proceso de trabajo con NAVADAV?",
    paragraph: "Comenzamos con una fase de entendimiento del negocio, donde analizamos tus flujos de operación, objetivos y prioridades.Luego diseñamos una solución paso a paso, con entregas iterativas y comunicación continua para validar resultados."
  },
  {
    title: "¿Qué nivel de participación tiene el cliente durante el desarrollo?",
    paragraph: "El cliente es parte activa del equipo. Participa en decisiones clave, revisa avances periódicos y valida cada entrega para garantizar que la solución responda a sus necesidades reales.",
  },
  {
    title: "¿Qué ocurre una vez finalizado el proyecto?",
    paragraph: "Entregamos toda la documentación técnica y funcional, capacitamos a tu equipo y, si lo deseas, ofrecemos acompañamiento para la evolución continua del sistema.",
  },
  {
    title: "¿Cómo garantizan que la solución se adapte realmente a la operación del cliente?",
    paragraph: "Dedicamos tiempo a entender tu modelo de negocio y tus herramientas actuales. El diseño técnico se construye alrededor de esos elementos, no en contra de ellos.",
  },
  {
    title: "¿Qué tipo de proyectos suelen desarrollar?",
    paragraph: "Creamos sistemas de gestión, portales internos, aplicaciones web corporativas, APIs empresariales y herramientas de integración entre diferentes plataformas.",
  },
  {
    title: "¿Cuánto tiempo toma implementar una solución?",
    paragraph: "Depende del alcance y la complejidad del proyecto, pero trabajamos con entregas tempranas y visibles desde las primeras semanas para asegurar resultados tangibles y rápidos.",
  },
]

const SolucionesAMedida = () => {
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
          Soluciones a la medida
        </h2>
        <p className="text-[24px] lg:text-[32px] font-[400] text-gray-600 lg:w-[90%] w-[100%] m-[0px]">
          Creamos soluciones digitales que optimizan tus operaciones y mejoran
          la experiencia de tus clientes.
        </p>
      </section>


      <section className="w-[80%] mx-auto pt-0 text-center">
        <MainCard
          imageSrc={getAssetPath("/images/misc/stats.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/icons/ui/s.svg")}
              alt="Main Card Icon"
              width={100}
              height={100}
            />
          }
          title="Aplicaciones a la Medida"
          description="Diseñamos y desarrollamos plataformas adaptadas a tus procesos de negocio, con tecnología moderna, alto rendimiento y escalabilidad."
        />
      </section>

      <section className="w-[80%] mx-auto pt-12 text-center">
        <MainCard
          imageSrc={getAssetPath("/images/services/api.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/icons/ui/api.svg")}
              alt="Main Card Icon"
              width={100}
              height={100}
            />
          }
          title="Integraciones y APIs Empresariales"
          description="Conectamos tus sistemas, aplicaciones y servicios externos para que tu información fluya de forma segura y automatizada."
          reverse={true}
        />
      </section>

      <section className="w-[80%] mx-auto py-12 text-center">
        <MainCard
          imageSrc={getAssetPath("/images/services/refactor.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/icons/ui/refactor.svg")}
              alt="Main Card Icon"
              width={100}
              height={100}
            />
          }
          title="Modernización y Refactorización de Sistemas"
          description="Transformamos aplicaciones heredadas en arquitecturas modernas, más estables, eficientes y fáciles de mantener."
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

export default SolucionesAMedida