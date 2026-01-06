import ContactForm from "@/app/components/ContactForm/ContactForm";
import MainCard from "@/app/components/MainCard/MainCard";
import Layout from "@/app/layout/Layout";
import Image from "next/image";
import MainBackground from "../components/MainBackground/MainBackground";
import ConversemosButton from "../components/AgendaButton/AgendaButton";
import { aboutData, workLinesData, whyNavadavData } from "../data/aboutData";
import { getAssetPath } from "../utils/assets";
import CardStepByStep from "../components/CardStepByStep/CardStepByStep";
import BrandList from "../components/BrandList/BrandList";

const AboutUs = () => {
  return (
    <Layout>
      <MainBackground>
        <h1 className="text-[28px] lg:text-[72px] font-bold mb-12">
          Soluciones empresariales a la <br /> medida, <span style={{
            background: "linear-gradient(93deg, #32C3EA 2.5%, #3043D0 58.54%, #33055A 98.04%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}> alineadas a tu <br /> negocio</span>
        </h1>
        <ConversemosButton isVisible={true} />
      </MainBackground>

      <section className="w-[90%] mx-auto my-24 mt-0 lg:mb-120 mb-65 rounded-2xl p-8 lg:pt-[170px] lg:pb-[162.5px] pt-12 pb-12 flex flex-col items-center justify-center relative"
        style={{
          background: "linear-gradient(180deg, #F1F3F9 57.97%, rgba(241, 243, 249, 0.00) 100%)"
        }}
      >
        <h2 className="text-[28px] lg:text-[48px] font-[600] text-[#000] mb-6 text-center">
          Sobre <span className="font-bold">NAVADAV</span>
        </h2>
        <p className="text-[18px] lg:text-[32px] text-[#585967] font-normal text-center lg:mb-60 mb-35">
          Actuamos como socios tecnológicos, acompañando a nuestros clientes desde la definición del problema hasta la evolución continua de la solución, con foco en productividad, claridad y resultados sostenibles.
        </p>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-full lg:max-w-[982px] max-w-[300px] lg:h-[655px] h-[200px]">
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

      <div className="w-[80%] mx-auto">
        <BrandList />
      </div>

      <section className="w-[80%] mx-auto py-16 pb-15 text-center flex flex-col justify-center items-center">

      </section>

      <section className="w-[90%] mx-auto flex flex-row  gap-10 justify-between items-start">
        <div className="w-full max-w-[540px] h-[636px] mx-auto rounded-[62px] relative">
          <div className="w-full h-full rounded-[62px] overflow-hidden">
            <Image
              src="/images/about/fundador.jpg"
              alt="Equipo de NAVADAV trabajando juntos"
              width={982}
              height={655}
              className="rounded-[62px] object-cover shadow-lg w-full h-full"
            />
          </div>
          
          {/* Icono abstracto en la esquina superior izquierda de la foto */}
          <div className="absolute -top-12 -left-15 w-16 h-16 lg:w-[153px] lg:h-[146px] z-20">
            <Image
              src={getAssetPath("/images/about/abstracto.png")}
              alt="Elemento abstracto"
              width={153}
              height={146}
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Card del fundador */}
          <div className="absolute -bottom-15 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[450px] bg-white rounded-[32px] py-[24px] px-[36px] shadow-lg z-10">
            {/* Contenido de la card */}
            <div>
              <h3 className="text-[24px] lg:text-[32px] font-[700] text-[#2B2B40] mb-4">
                David Navarro
              </h3>
              <p className="text-[18px] lg:text-[24px] font-[400] text-[#585967]">
                Founder & Principal Architect
              </p>
            </div>
          </div>
        </div>

        <section className="w-full text-center flex flex-col justify-center items-start">
          <h2 className="text-[32px] lg:text-[48px] font-[600] text-[#000] mb-6">
            Nuestro fundador
          </h2>
          <p className="text-[24px] lg:text-[24px] font-[400] text-[#585967] w-[100%] m-[0px] text-justify">
            <b>
              NAVADAV surge a partir de mi experiencia diseñando y acompañando soluciones tecnológicas en contextos empresariales reales, donde la tecnología debe integrarse a operaciones existentes, sistemas en producción y decisiones de negocio concretas.
            </b>
            <br />
            <br />
            Mi trabajo se centra en la definición de soluciones, arquitectura y criterios técnicos que permitan a las empresas evolucionar sus sistemas, automatizar procesos y tomar mejores decisiones sin comprometer la estabilidad ni la operación diaria.
            <br />
            <br />
            A lo largo de mi trayectoria he participado en iniciativas de modernización de sistemas, soluciones a la medida y automatización de flujos críticos, siempre con un enfoque claro: entender el negocio primero y utilizar la tecnología como un medio para resolver problemas reales y generar impacto tangible. Trabajo con un criterio orientado a claridad, sostenibilidad y capacidad de adaptación en el tiempo, que es el estándar que aplico en cada proyecto.
          </p>
        </section>
      </section>


      <section className="w-[90%] mx-auto mt-60 mb-60">
        <div className="flex flex-col lg:flex-row-reverse gap-10 items-stretch overflow-hidden">
          {/* Imagen */}
          <div className="w-full  relative w-[540px] h-[529px] rounded-[24px] overflow-hidden">
            <Image
              src="/images/about/howWeWork.png"
              alt="Personas trabajando con post-its"
              layout="fill"
              className="object-cover"
              priority
            />
          </div>
          {/* Texto */}
          <div className="w-full flex flex-col justify-start p-8 lg:p-12 lg:pt-0 lg:pr-0 text-left">
            <h2 className="text-[28px] lg:text-[48px] font-[600] text-[#000] mb-4">
              Como Trabajamos
            </h2>
            <p className="text-[#585967] text-[24px] font-[400] mb-6 leading-relaxed">
              Acompañamos a las organizaciones en iniciativas donde la tecnología debe integrarse de forma natural a la operación del negocio, generando impacto real y sostenible.
            </p>
            <ul className="list-disc list-inside text-[#585967] pl-0 text-[24px] font-[400]">
              <li>Adaptarse a procesos existentes sin interrumpir la operación</li>
              <li>Mejorar la productividad y el trabajo de los equipos</li>
              <li>Reducir la complejidad operativa y técnica</li>
              <li>Habilitar mejores decisiones a partir de información clara</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto py-16 mt-60 text-center flex flex-col justify-center items-center relative">
        <Image
          src={getAssetPath("/images/hero/elemento-abstracto.png")}
          alt="Elemento Abstracto"
          width={200}
          height={100}
          className="absolute left-10 top-[0%] -translate-y-[50%] hidden lg:block z-1"
        />
        <h2 className="text-[32px] lg:text-[48px] font-[600] text-[#000] mb-6">
          Nuestras líneas de trabajo
        </h2>
      </section>

      <section className="w-[80%] mx-auto py-16 text-center flex flex-col justify-center items-center relative">
        <Image
          src={getAssetPath("/images/about/circleImage.png")}
          alt="Elemento Abstracto"
          width={900}
          height={900}
          className="absolute transform-rotate-[21.75deg] bottom-[0%] translate-y-[20%] translate-x-[90%] hidden md:block z-0"
        />
        <div className="flex flex-col lg:flex-row items-start justify-start lg:gap-10 gap-4 relative z-10">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
            {workLinesData.map((workLine) => (
              <CardStepByStep
                key={workLine.id}
                isWorkLineSection={true}
                title={workLine.title}
                imageSrc={workLine.imageSrc}
                description={workLine.description}
                url={workLine.url}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sección Por qué NAVADAV */}
      <section className="w-[90%] mx-auto py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">

          <div className="w-full lg:w-[540px] relative h-[400px] lg:h-[529px] rounded-[24px] overflow-hidden">
            <Image
              src={getAssetPath("/images/about/apiImage.png")}
              alt="Tecnología API"
              fill
              className="object-cover rounded-[24px]"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h2 className="text-[32px] lg:text-[48px] font-bold text-gray-900 mb-6">
              Por qué NAVADAV
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 mb-8 leading-relaxed">
              Trabajamos con un enfoque responsable frente a la tecnología, evitando decisiones apresuradas que generan sobrecostos, retrabajos o dependencia innecesaria.
            </p>

            <div className="flex flex-col gap-6">
              {whyNavadavData.map((feature) => {
                return (
                  <div key={feature.id} className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg  flex items-center justify-center`}>
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={48}
                        height={48}
                        className=""
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-base lg:text-lg text-gray-600 leading-relaxed w-[80%]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <ContactForm />
    </Layout>
  );
};

export default AboutUs;
