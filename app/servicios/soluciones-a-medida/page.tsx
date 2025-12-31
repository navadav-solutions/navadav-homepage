import ContactForm from "@/app/components/ContactForm/ContactForm";
import MainCard from "@/app/components/MainCard/MainCard";
import Layout from "@/app/layout/Layout";
import Image from "next/image";
import AccordeonCard from "@/app/components/AccordeonCard/AccordeonCard";
import ServiceHero from "@/app/components/ServiceHero/ServiceHero";
import { solucionesAMedidaData } from "@/app/data/solucionesAMedidaData";
import { questionsSolucionesAMedida } from "@/app/data/questionsData";

const SolucionesAMedida = () => {
  return (
    <Layout>
      <ServiceHero evolutionLabel="tecnológica" />
      <section className="w-[80%] mx-auto py-16 text-center flex flex-col justify-center items-center">
        <h2 className="text-[32px] lg:text-[48px] font-semibold text-gray-800 mb-6">
          Soluciones Empresariales a la Medida
        </h2>
        <p className="text-[24px] lg:text-[32px] font-[400] text-gray-600 lg:w-[90%] w-[100%] m-[0px]">
          Diseñamos y desarrollamos soluciones tecnológicas que se integran a la
          operación real de tu empresa y generan resultados medibles desde las
          primeras entregas.
        </p>
      </section>

      {solucionesAMedidaData.map((item) => (
        <section
          className="w-[80%] mx-auto pt-0 text-center mt-12"
          key={item.id}
        >
          <MainCard
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            icon={
              <Image
                src={item.icon}
                alt="Main Card Icon"
                width={100}
                height={100}
              />
            }
            title={item.title}
            description={item.description}
            reverse={item.reverse}
          />
        </section>
      ))}

      <section className="w-[80%] mx-auto py-16 text-center flex flex-col justify-center items-center">
        <h2 className="text-[32px] lg:text-[48px] font-semibold text-gray-800 mb-6">
          Preguntas Frecuentes
        </h2>
        <p className="text-[24px] lg:text-[32px] font-[400] text-gray-600 lg:w-[80%] w-[100%] m-[0px]">
          Respuestas a tus dudas más comunes
        </p>
      </section>

      <section className="w-[80%] lg:w-[60%] mx-auto py-8 text-center flex flex-col justify-center items-center gap-8">
        {questionsSolucionesAMedida?.map((question) => (
          <AccordeonCard
            key={question.title}
            title={question.title}
            paragraph={question.paragraph}
          />
        ))}
      </section>

      <ContactForm />
    </Layout>
  );
};

export default SolucionesAMedida;
