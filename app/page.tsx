import ContactForm from "./components/ContactForm/ContactForm";
import Layout from "./layout/Layout";
import Image from "next/image";
import { getAssetPath } from "./utils/assets";
import CardStepByStep from "./components/CardStepByStep/CardSteoByStep";
import CardServices from "./components/CardServices/CardServices";
import TestimonialCard from "./components/TestimonialCard/TestimonialCard";
import { services } from "./data/listServices";
import { stepByStep } from "./data/stepByStep";
import { listTestimonials } from "./data/listTestimonials";
import CustomerHero from "./components/CustomerHero/CustomerHero";
import TitleSection from "./components/TitleSection/TitleSection";
import MainTitle from "./components/MainTitle/MainTitle";
import AgendaButton from "./components/AgendaButton/AgendaButton";


export default function Home() {
  return (
    <Layout>
      <section
        className="w-full h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: `url(${getAssetPath("/images/misc/ejemplo1.png")})`,
        }}
      >

        <div className="w-full lg:w-[80%] mx-auto h-full flex items-center justify-center relative z-10">
          <div className="flex flex-col items-center justify-center text-center">
            <MainTitle />
            <AgendaButton isVisible />
          </div>
        </div>
      </section>

      <CustomerHero />

      <section className="w-[80%] mx-auto py-16 text-center flex flex-col justify-center items-center">
        <TitleSection
          title="Built Together, Step by Step"
          description="We dive into your business, co-create a functional solution, and fine-tune it based on your feedback—until it fits you perfectly."
        />
      </section>

      <section className="w-[80%] mx-auto py-16 text-center flex flex-col justify-center items-center">
        <div className="flex flex-col lg:flex-row items-start justify-start lg:gap-10 gap-4">
          <div className="grid grid-cols-2">
            {stepByStep.map((step, index) => (
              <div key={step.title} className={index % 2 === 1 ? "lg:mt-10 ml-10" : ""}>
                <CardStepByStep
                  imageSrc={step.imageSrc}
                  title={step.title}
                  description={step.description}
                />
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="w-[90%] mx-auto py-16 text-center flex flex-col justify-center items-center relative">
        <Image
          src={getAssetPath("/images/hero/elemento-abstracto.png")}
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
        <section className="lg:w-[80%] w-[90%] flex flex-col gap-5 mx-auto py-16 text-center flex flex-col justify-center items-center">
          <div className="grid grid-cols-2 gap-4">
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
