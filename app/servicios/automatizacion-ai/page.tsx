import ContactForm from "@/app/components/ContactForm/ContactForm";
import MainCard from "@/app/components/MainCard/MainCard";
import Layout from "@/app/layout/Layout";
import Image from "next/image";
import { getAssetPath } from "@/app/utils/assets";
import AccordeonCard from "@/app/components/AccordeonCard/AccordeonCard";
import ServiceHero from "@/app/components/ServiceHero/ServiceHero";
import { questions } from "@/app/data/questionsData";
import { automatizationData } from "@/app/data/automatizationData";


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

      {
        automatizationData.map((item) => (
          <section className="w-[80%] mx-auto pt-0 text-center mt-12" key={item.id}>
            <MainCard
              key={item.id}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              reverse={item.reverse}
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
            />
          </section>
        ))
      }

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
          questions.map((question) => (
            <AccordeonCard
              key={question.title}
              title={question.title}
              paragraph={question.paragraph}
            />
          ))
        }
      </section>

      <ContactForm />
    </Layout >
  )
}

export default AutomatizacionAI