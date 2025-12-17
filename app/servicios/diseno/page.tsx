import { getAssetPath } from "@/app/utils/assets";
import Layout from "../../layout/Layout";
import Image from "next/image";
import MainCard from "@/app/components/MainCard/MainCard";
import AccordeonCard from "@/app/components/AccordeonCard/AccordeonCard";
import ContactForm from "@/app/components/ContactForm/ContactForm";

const questions = [
  {
    title: "¿Qué diferencia el enfoque de NAVADAV frente a una agencia de diseño tradicional?",
    paragraph: "Integramos diseño, estrategia y tecnología. No solo creamos interfaces atractivas, sino soluciones que fortalecen la comunicación y mejoran los resultados del negocio."
  },
  {
    title: "¿Puedo mantener mi identidad visual actual?",
    paragraph: "Sí. Podemos trabajar sobre tu identidad existente o proponer una evolución que conserve la esencia de tu marca, adaptándola a entornos digitales modernos.",
  },
  {
    title: "¿Los sitios web que desarrollan son administrables por el cliente?",
    paragraph: "Sí. Entregamos sitios autogestionables y capacitamos a tu equipo para realizar actualizaciones sin depender de soporte técnico constante.",
  },
  {
    title: "¿Cómo garantizan que la solución se adapte realmente a la operación del cliente?",
    paragraph: "Evaluamos indicadores de interacción, tiempo en sitio, conversión, usabilidad y satisfacción del usuario para medir el impacto de cada mejora.",
  },
  {
    title: "¿Qué tan involucrado debe estar mi equipo durante el diseño?",
    paragraph: "Tu equipo participa en etapas clave: definición de objetivos, validación de prototipos y revisión final. Trabajamos de forma colaborativa para garantizar resultados que representen a tu empresa.",
  },
  {
    title: "¿Qué tipo de mantenimiento o evolución recomiendan después del lanzamiento?",
    paragraph: "Revisiones periódicas de contenido, rendimiento y usabilidad, acompañadas de actualizaciones visuales y técnicas que mantengan la relevancia de tu marca digital.",
  },
]

export default function DisenoPage() {
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
          Diseño y Desarrollo Web
        </h2>
        <p className="text-[24px] lg:text-[32px] font-[400] text-gray-600 lg:w-[80%] w-[100%] m-[0px]">
          Reducimos tareas manuales y mejoramos la eficiencia con flujos automatizados e inteligencia artificial aplicada.
        </p>
      </section>


      <section className="w-[80%] mx-auto pt-0 text-center">
        <MainCard
          imageSrc={getAssetPath("/images/services/diseno.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/icons/services/diseno.svg")}
              alt="Main Card Icon"
              width={100}
              height={100}
            />
          }
          title="Diseño UX/UI"
          description="Diseñamos interfaces intuitivas y atractivas que conectan con tus usuarios y mejoran la experiencia digital."
        />
      </section>

      <section className="w-[80%] mx-auto pt-12 text-center">
        <MainCard
          imageSrc={getAssetPath("/images/services/identidad.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/icons/services/identidad.svg")}
              alt="Main Card Icon"
              width={100}
              height={100}
            />
          }
          title="Identidad Visual y Sitios Web Corporativos"
          description="Construimos tu imagen digital: logo, colores, tipografía y sitio web, transmitiendo la esencia y profesionalismo de tu marca."
          reverse={true}
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
  );
}

