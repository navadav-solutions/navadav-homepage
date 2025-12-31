import Image from "next/image";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import Layout from "@/app/layout/Layout";
import { getAssetPath } from "@/app/utils/assets";
import CardStepByStep from "@/app/components/CardStepByStep/CardStepByStep";
import CardServices from "@/app/components/CardServices/CardServices";
import TestimonialCard from "@/app/components/TestimonialCard/TestimonialCard";
import { services } from "@/app/data/listServices";
import { stepByStep } from "@/app/data/stepByStep";
import { listTestimonials } from "@/app/data/listTestimonials";
import CustomerHero from "@/app/components/CustomerHero/CustomerHero";
import TitleSection from "@/app/components/TitleSection/TitleSection";
import MainTitle from "@/app/components/MainTitle/MainTitle";
import ConversemosButton from "@/app/components/AgendaButton/AgendaButton";
import { brandsData } from "./data/aboutData";

export default function Home() {
  return (
    <Layout>
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: `url(${getAssetPath("/images/misc/ejemplo1.png")})`,
        }}
      >
        <div className="w-full lg:w-[80%] mx-auto h-full flex flex-col items-center justify-center relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <MainTitle />
            <ConversemosButton isVisible />
          </div>
        </div>

        <section className="absolute bottom-0 left-0 right-0 w-[80%] mx-auto py-8 text-center flex flex-row justify-between items-center gap-8">
          {
            brandsData.map((brand) => (
              <Image
                key={brand.id}
                src={brand.imageSrc}
                alt={brand.imageAlt}
                width={150}
                height={69}
                className="color-[#2B2B40]"
              />
            ))
          }
        </section>
      </section>


      <CustomerHero />

      <section className="w-[80%] mx-auto py-16 text-center flex flex-col justify-center items-center">
        <TitleSection
          title="Evolución tecnológica, paso a paso."
          description="Nos involucramos en tu negocio, entregamos soluciones funcionales
          alineadas a tu operación y te acompañamos en su evolución."
        />
      </section>

      <section className="w-[80%] mx-auto py-16 text-center flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row items-start justify-start lg:gap-10 gap-4">
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4">
            {stepByStep.map((step, index) => (
              <div
                key={step.title}
                className={index % 2 === 1 ? "lg:mt-10 lg:ml-10 ml-0" : ""}
              >
                <CardStepByStep
                  title={step.title}
                  imageSrc={step.imageSrc}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto py-16 mt-18 text-center flex flex-col justify-center items-center relative">
        <Image
          src={getAssetPath("/images/hero/elemento-abstracto.png")}
          alt="Elemento Abstracto"
          width={200}
          height={100}
          className="absolute left-10 top-[0%] -translate-y-[50%] hidden lg:block"
        />
        <h2 className="text-[32px] lg:text-[56px] font-bold text-[#2B2B40] mb-6">
          Servicios Especializados, Impacto Real
        </h2>
        <p className="text-[24px] font-[400] text-[#585967] lg:w-[60%] w-[100%] m-[0px]">
          Trabajamos con tu equipo para diseñar e implementar soluciones que
          generan impacto real y evolucionan con tu negocio.
        </p>
      </section>

      <div className="relative">
        <section
          id="services"
          className="scroll-mt-24 w-[90%] flex flex-col gap-5 mx-auto py-16 text-center flex flex-col justify-center items-center"
        >
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10">
            {services.map((service) => (
              <CardServices
                key={service.title}
                title={service.title}
                imageSrc={service.imageSrc}
                listServices={service.listServices}
              />
            ))}
          </div>
        </section>
        <Image
          src={getAssetPath("/images/hero/resplandor.png")}
          alt="Resplandor Image"
          width={200}
          height={100}
          className="absolute left-0 bottom-[0] -translate-y-[0%] hidden lg:block"
        />
      </div>

      <section className="w-[80%] mx-auto py-[45px] lg:text-center text-start flex flex-row justify-between items-center">
        <h2 className="text-[18px] lg:text-[56px] font-bold text-[#2B2B40] lg:mb-6 mb-0">
          Historias que Transforman
        </h2>
        <button className="bg-white w-[40%] lg:w-auto rounded-[16px] font-bold text-[#032F9D] lg:p-[12px] p-[8px] transition-all cursor-pointer shadow-sm">
          View all
        </button>
      </section>

      <section className="w-[80%] mx-auto pb-[45px] text-center flex lg:flex-row flex-col gap-4 justify-between items-center">
        {listTestimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            imageSrc={testimonial.imageSrc}
            name={testimonial.name}
            date={testimonial.date}
          />
        ))}
      </section>
      <ContactForm />
    </Layout>
  );
}
