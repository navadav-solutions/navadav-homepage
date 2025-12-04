import ContactForm from "./components/ContactForm/ContactForm";
import MainCard from "./components/MainCard/MainCard";
import Layout from "./layout/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url(/mainHeroImage.png)",
        }}
      >
        <div className="w-full md:w-[80%] mx-auto h-full flex items-center justify-center">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gray-800 leading-[1.3]">
                Tu aliado tecnológico para <br /> hacer{" "}
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
                </span>
                <br /> tu negocio.
              </span>
            </h1>
            <button
              className="bg-gradient-to-b from-blue-600 to-blue-500 text-white px-[36px] py-[20px] rounded-[16px] text-lg font-semibold shadow-lg flex items-center gap-2 hover:from-blue-700 hover:to-blue-600 transition-all hover:scale-105 cursor-pointer"
              style={{
                background:
                  "radial-gradient(85.16% 87.63% at 50% 50%, #0743D7 0%, #2D69FD 100%)",
                boxShadow: "0 0 30px 0 rgba(113, 137, 255, 0.70)",
              }}
            >
              Agenda cita
              <Image
                src="/arrowRight.svg"
                alt="Arrow Right"
                width={20}
                height={20}
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="w-[80%] mx-auto py-16 text-center">
        <h2 className="text-[48px] font-semibold text-gray-800 mb-6">
          Soluciones a la medida
        </h2>
        <p className="text-[32px] font-[400] text-gray-600 mx-auto w-[90%]">
          Creamos soluciones digitales que optimizan tus operaciones y mejoran
           la experiencia de tus clientes.
        </p>
      </section>

      <section className="w-[80%] mx-auto pt-12 text-center">
        <MainCard
          imageSrc="/statsImage.png"
          imageAlt="Main Card Image"
          icon={
            <Image
              src="/iconService.svg"
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
          imageSrc="/apiImage.png"
          imageAlt="Main Card Image"
          icon={
            <Image
              src="/iconApi.svg"
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
          imageSrc="/refactorImage.png"
          imageAlt="Main Card Image"
          icon={
            <Image
              src="/iconRefactor.svg"
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

      <ContactForm />
    </Layout>
  );
}
