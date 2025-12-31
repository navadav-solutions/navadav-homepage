import ContactForm from "@/app/components/ContactForm/ContactForm";
import MainCard from "@/app/components/MainCard/MainCard";
import Layout from "@/app/layout/Layout";
import Image from "next/image";
import MainBackground from "../components/MainBackground/MainBackground";
import ConversemosButton from "../components/AgendaButton/AgendaButton";
import { aboutData, brandsData } from "../data/aboutData";

const AboutUs = () => {
  return (
    <Layout>
      <MainBackground>
        <h1 className="text-3xl lg:text-[72px] font-bold mb-12">
          Soluciones empresariales a la <br />  medida, alineadas a tu <br /> negocio
        </h1>
        <ConversemosButton isVisible={true} />
      </MainBackground>

      <section className="w-[90%] mx-auto my-24 mt-0 mb-120 rounded-2xl p-8 pt-[170px] pb-[162.5px] flex flex-col items-center justify-center relative"
        style={{
          background: "linear-gradient(180deg, #F1F3F9 57.97%, rgba(241, 243, 249, 0.00) 100%)"
        }}
      >
        <h2 className="text-[28px] lg:text-[48px] font-[600] text-[#000] mb-6 text-center">
          Sobre <span className="font-bold">NAVADAV</span>
        </h2>
        <p className="text-[18px] lg:text-[32px] text-[#585967] font-normal text-center mb-60">
          Actuamos como socios tecnológicos, acompañando a nuestros clientes desde la definición del problema hasta la evolución continua de la solución, con foco en productividad, claridad y resultados sostenibles.
        </p>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[982px] h-[655px]">
          <Image
            src="/images/about/about-team.jpg"
            alt="Equipo de NAVADAV trabajando juntos"
            fill
            className="rounded-xl object-cover shadow-lg"
          />
        </div>
      </section>

      {aboutData.map((item) => (
        <section
          className="w-[80%] mx-auto pt-0 text-center mt-12"
          key={item.id}
        >
          <MainCard
            key={item.id}
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
          Marcas que confian en nosotros:
        </h2>
      </section>

      <section className="w-[80%] mx-auto py-8 pt-0 text-center flex flex-row justify-between items-center gap-8">
        {
          brandsData.map((brand) => (
            <Image
              key={brand.id}
              src={brand.imageSrc}
              alt={brand.imageAlt}
              width={150}
              height={150}
            />
          ))
        }
      </section>

      <ContactForm />
    </Layout>
  );
};

export default AboutUs;
