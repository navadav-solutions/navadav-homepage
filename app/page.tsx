import ContactForm from "./components/ContactForm/ContactForm";
import MainCard from "./components/MainCard/MainCard";
import Layout from "./layout/Layout";
import Image from "next/image";
import { getAssetPath } from "./utils/assets";
import CardStepByStep from "./components/CardStepByStep/CardSteoByStep";
import CardServices from "./components/CardServices/CardServices";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";

const listServices = [
  {
    title: "Diseño web",
    link: "https://www.google.com",
  },
  {
    title: "UX/UI Design",
    link: "https://www.google.com",
  },
  {
    title: "Mobile app design",
    link: "https://www.google.com",
  },
  {
    title: "Branding",
    link: "https://www.google.com",
  },
]

const listServicesDevelopment = [
  {
    title: "Custom software",
    link: "https://www.google.com",
  },
  {
    title: "Business Intelligence Consulting",
    link: "https://www.google.com",
  },
  {
    title: "Mobile app design",
    link: "https://www.google.com",
  },
  {
    title: "MS 365 Consulting",
    link: "https://www.google.com",
  },
]

export default function Home() {
  return (
    <Layout isHome={true}>
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${getAssetPath("/ejemplo1.png")})`,
        }}
      >
        <div className="w-full lg:w-[80%] mx-auto h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl lg:text-[72px] font-[700] mb-10">
              <span className="text-gray-800 leading-[1.3]">
                {/* Mobile: cada línea en bloque */}
                <span className="block lg:hidden">
                  Your Custom Digital
                </span>
                <span className="block lg:hidden">
                  Product,{" "}
                  <span
                    className="inline-block"
                    style={{
                      background:
                        "linear-gradient(270deg, #FAC354 -5.84%, #EF2A2A 4.3%, #340551 14.64%, #2C0296 26.14%, #3155E0 40.04%, #32C3EA 56.2%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    On Subscription
                  </span>
                </span>
                <p className="block lg:hidden text-[16px] font-[400] text-gray-600 lg:w-[90%] w-[100%] m-[0px]">We craft tailored online solutions that grow with you—no long-term commitments required.</p>
                {/* Desktop: todo en línea */}
                <span className="hidden lg:inline">
                  Your Custom Digital <br /> Product,{" "}
                  <span
                    className="inline-block"
                    style={{
                      background:
                        "linear-gradient(270deg, #FAC354 -5.84%, #EF2A2A 4.3%, #340551 14.64%, #2C0296 26.14%, #3155E0 40.04%, #32C3EA 56.2%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      // fontFeatureSettings: "'liga' off, 'clig' off",

                    }}
                  >
                    On Subscription
                  </span>{" "}
                </span>
              </span>
              <div className="hidden lg:inline-flex flex-col items-center justify-center">
                <p className="text-[24px] font-[700] text-gray-500 lg:w-[80%] w-[100%] m-[0px]">We craft tailored online solutions that grow with you—no long-term commitments required.</p>
              </div>
            </h1>
            <button
              className="h-[55px] lg:h-[auto] bg-gradient-to-b from-blue-600 to-blue-500 text-white px-[36px] py-[17px] rounded-[16px] text-lg font-semibold shadow-lg flex items-center gap-2 hover:from-blue-700 hover:to-blue-600 transition-all hover:scale-105 cursor-pointer"
              style={{
                background: "radial-gradient(50% 50% at 50% 50%, #0743D7 0%, #2D69FD 100%)",
                boxShadow: "0 -4px 4px 0 rgba(3, 47, 157, 0.40) inset, 0 4px 4px 0 rgba(250, 251, 255, 0.40) inset",
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

      <section className="flex flex-col lg:flex-row gap-10 w-[90%] bg-[#F1F2F9] mx-auto rounded-[24px] p-[64px]">
        <div className="flex-1w-[465px] max-w-[465px] max-h-[392px] h-[392px]">
          <Image
            src={getAssetPath("/testimonialImage.png")}
            alt="Home Layout"
            width={400}
            height={400}
            className="object-cover w-full h-full rounded-[53px]" />
        </div>

        <div className="flex-1 flex flex-col items-start justify-start">
          <div>
            <Image src={getAssetPath("/quoteIcon.svg")} alt="Quote Icon" width={115} height={115} />
          </div>
          <p className="text-[32px] font-[500] w-[80%] text-[#53535B]" >
            We love navadav! Our designers were using it for their projects, so clients already knew what navadav was and how to use it.
          </p>
          <div className="flex items-center justify-start gap-2 mt-auto">
            <p className="text-[16px] font-[400] text-gray-600">
              <b>Jenn Wilson</b>  Co-founder de
            </p>
            <Image src={getAssetPath("/amazonBadge.png")} alt="Amazon Badge" width={100} height={100} />

          </div>
        </div>
      </section>

      <section className="w-[80%] mx-auto py-16 text-center flex flex-col justify-center items-center">
        <h2 className="text-[32px] lg:text-[56px] font-bold text-[#2B2B40] mb-6">
          Built Together, Step by Step
        </h2>
        <p className="text-[24px] font-[400] text-[#585967] lg:w-[80%] w-[100%] m-[0px]">
          We dive into your business, co-create a functional solution, and fine-tune it based on your feedback—until it fits you perfectly.
        </p>
      </section>

      <section className="w-[80%] mx-auto py-16 text-center flex flex-col justify-center items-center">
        <div className="flex flex-row items-start justify-start gap-10">
          <div className="flex flex-col items-start justify-start gap-10 ">
            <CardStepByStep
              imageSrc={getAssetPath("/diagnosticoIcon.svg")}
              title="Diagnóstico Inicial"
              description="Profundizamos en cómo funciona tu negocio, identificando desafíos y oportunidades clave para trazar la ruta de mejora."
            />
            <CardStepByStep
              imageSrc={getAssetPath("/retroalimentacionIcon.svg")}
              title="Diagnóstico Inicial"
              description="Profundizamos en cómo funciona tu negocio, identificando desafíos y oportunidades clave para trazar la ruta de mejora."
            />
          </div>
          <div className="flex flex-col items-start justify-start gap-10 mt-20">
            <CardStepByStep
              imageSrc={getAssetPath("/demoIcon.svg")}
              title="Diagnóstico Inicial"
              description="Profundizamos en cómo funciona tu negocio, identificando desafíos y oportunidades clave para trazar la ruta de mejora."
            />
            <CardStepByStep
              imageSrc={getAssetPath("/diagnostico2Icon.svg")}
              title="Diagnóstico Inicial"
              description="Profundizamos en cómo funciona tu negocio, identificando desafíos y oportunidades clave para trazar la ruta de mejora."
            />
          </div>
        </div>
      </section>


      <section className="w-[90%] mx-auto py-16 text-center flex flex-col justify-center items-center relative">
        <Image
          src={getAssetPath("/elementoAbstracto.png")}
          alt="Elemento Abstracto"
          width={200}
          height={100}
          className="absolute left-10 top-[0%] -translate-y-[50%] hidden lg:block"
        />
        <h2 className="text-[32px] lg:text-[56px] font-bold text-[#2B2B40] mb-6">
          Expert Services, Tangible Results
        </h2>
        <p className="text-[24px] font-[400] text-[#585967] lg:w-[60%] w-[100%] m-[0px]">
          From strategy to execution, our services are designed to solve real problems and grow your business.
        </p>
      </section>
      <div className="relative">
        <section className="w-[80%] flex flex-row items-start justify-start gap-10 mx-auto py-16 text-center flex flex-col justify-center items-center">

          <div className="flex-1">
            <CardServices
              title="Diseño"
              imageSrc={getAssetPath("/disenoServiceImage.png")}
              listServices={listServices}
            />
          </div>

          <div className="flex-1">
            <CardServices
              title="Desarrollo"
              imageSrc={getAssetPath("/desarrolloServiceImage.png")}
              listServices={listServicesDevelopment}
            />
          </div>
        </section>
        <Image
          src={getAssetPath("/resplandorImage.png")}
          alt="Resplandor Image"
          width={200}
          height={100}
          className="absolute left-0 bottom-[0] -translate-y-[0%] hidden lg:block"
        />
      </div>

      <section className="w-[80%] mx-auto py-[45px] text-center flex flex-row justify-between items-center">
        <h2 className="text-[32px] lg:text-[56px] font-bold text-[#2B2B40] mb-6">
          Historias que Transforman
        </h2>
        <button className="bg-white rounded-[16px] font-bold text-[#032F9D] p-[12px] transition-all cursor-pointer shadow-sm">
          View all
        </button>
      </section>

      <section className="w-[80%] mx-auto pb-[45px] text-center flex flex-row gap-4 justify-between items-center">
        <TestimonialCard
          imageSrc={getAssetPath("/testimonial1.png")}
          name="How to write content about your photographs"
          date="April 09,  2022"
        />
        <TestimonialCard
          imageSrc={getAssetPath("/testimonial2.png")}
          name="How to write content about your photographs"
          date="April 09,  2022"
        />
        <TestimonialCard
          imageSrc={getAssetPath("/testimonial3.png")}
          name="How to write content about your photographs"
          date="April 09,  2022"
        />
        <TestimonialCard
          imageSrc={getAssetPath("/testimonial4.png")}
          name="How to write content about your photographs"
          date="April 09,  2022"
        />
      </section>


      {/* <section className="w-[80%] mx-auto pt-0 text-center">
        <MainCard
          imageSrc={getAssetPath("/statsImage.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/iconS.svg")}
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
          imageSrc={getAssetPath("/apiImage.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/iconApi.svg")}
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
          imageSrc={getAssetPath("/refactorImage.png")}
          imageAlt="Main Card Image"
          icon={
            <Image
              src={getAssetPath("/iconRefactor.svg")}
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

      */}
      <ContactForm /> 
    </Layout>
  );
}
