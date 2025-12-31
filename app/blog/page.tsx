import Image from "next/image";
import ContactForm from "@/app/components/ContactForm/ContactForm";
import Layout from "@/app/layout/Layout";
import TestimonialCard from "@/app/components/TestimonialCard/TestimonialCard";
import { getAssetPath } from "@/app/utils/assets";
import { blogSocialLinks } from "../data/blogSocialLinks";
import { listTestimonials } from "../data/listTestimonials";

export default function Blog() {
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
            <p className="text-[22px] font-[500] text-[#2B2B40] lg:w-[80%] w-[100%] m-[0px] mb-[48px]">
              Home <span className="text-[#C8B5C6] px-2 py-1 rounded-[4px]">»</span> Blog <span className="text-[#C8B5C6] px-2 py-1 rounded-[4px]">»</span> Metaverse
            </p>

            <h1 className="text-3xl lg:text-[72px] font-[700] mb-10">
              <div className="flex flex-col items-center justify-center text-center">
                <span className="text-center w-[80%]">
                  Developer Hiring Trends in Mobile in 2018
                </span>
              </div>
            </h1>

            <p className="text-[18px] font-[400] text-[#2B2B40] lg:w-[80%] w-[100%] m-[0px] mb-[48px]">
              October 8, 2018 <span className="text-[#C8B5C6] px-2 py-1 rounded-[4px]">|</span> Ilya Goncharov <span className="text-[#C8B5C6] px-2 py-1 rounded-[4px]">|</span> News
            </p>

            <div className="flex items-center justify-center text-center gap-4">
              {blogSocialLinks.map((link) => (
                <a key={link.id} href={link.link} target={"_blank"} rel={"noreferrer"}>
                  <Image src={link.icon} alt={link.title} width={32} height={32} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto pb-16 text-center flex flex-col justify-center items-center">
        <Image
          src={getAssetPath("/images/blog/main.png")}
          alt="Home Layout"
          width={400}
          height={400}
          className="object-cover w-full h-[436px] rounded-[24px]" />
      </section>

      <section className="w-[80%] mx-auto py-16 text-start flex flex-col justify-center items-center">
        <h2 className="text-[32px] font-bold text-[#2B2B40] mb-6 text-start">
          About 384 million smartphones have been sold in the first quarter of 2018. That’s a 1.3% growth over the same period in 2017. That also means that in 2018, the number of mobile users is increasing.
        </h2>
        <p className="text-[24px] font-[400] text-[#585967] m-[0px] text-start">
          Mobile audiences grow, and so do the revenues of mobile app publishers. In 2018, Apple paid an impressive $100 billion to third-party app developers. That’s a 100% increase over the $50 billion earned by app publishers in 2016. Android makes a good running, too. In 2016, Google paid $15 billion to app developers. In 2017, Android app publishers earned $28.6 billion.
          The growth of the mobile app development market fosters the demand for tech talent. So what exactly does the demand-supply situation in the mobile development market look like?
        </p>
      </section>

      <section className="w-[80%] mx-auto py-16 flex flex-col justify-start items-start">
        <h2 className="text-[30px] font-[500] text-[#2B2B40] mb-2 text-start">
          Talent supply and demand in mobile development
        </h2>
        <p className="text-[24px] font-[400] text-[#585967] m-[0px] text-start">
          Stack Overflow included iOS and Android development into their top-3 high-demand skills.
        </p>
      </section>

      <section className="w-[80%] mx-auto pb-16 text-center flex flex-col justify-center items-center">
        <Image
          src={getAssetPath("/images/blog/horizontalchart.png")}
          alt="Home Layout"
          width={400}
          height={400}
          className="object-cover w-full rounded-[24px]" />
      </section>

      <section className="w-[80%] mx-auto py-16 text-start flex flex-col justify-center items-center">
        <p className="text-[24px] font-[400] text-[#585967] m-[0px] text-start">
          According to Evans Data, about 11.5 million software developers participate in the development of app for iOS and Android. This 11.5-million figure includes both the developers whose primary specialization is mobile, as well as other developers who are only partially involved into mobile. Namely, it includes backend engineers working in mobile app development teams.
          <br />
          <br />
          But just how many of these 11.5 million are actually dedicated mobile engineers? More importantly, how many specialize in iOS, and how many are Android developers? Let’s dig deeper and find out!
        </p>
      </section>

      <section className="w-[80%] mx-auto pt-16 pb-8 flex flex-col justify-start items-start">
        <h2 className="text-[40px] font-[700] text-[#2B2B40] mb-2 text-start">
          IOS Development
        </h2>
      </section>

      <section className="w-[80%] mx-auto pb-16 flex flex-col justify-start items-start">
        <h2 className="text-[32px] font-[500] text-[#2B2B40] mb-2 text-start">
          Talent supply
        </h2>
        <p className="text-[24px] font-[400] text-[#585967] m-[0px] text-start">
          Swift seems to be the most popular programming language in iOS development as more than 185K developers work with it. That being said, the popularity of Objective-C is not declining, either. In 2018, there are near 115K LinkedIn profiles of iOS engineers that work with Objective-C
        </p>
      </section>

      <section className="w-[80%] mx-auto pb-16 text-center flex flex-col justify-center items-center">
        <Image
          src={getAssetPath("/images/blog/piechart.png")}
          alt="Home Layout"
          width={400}
          height={400}
          className="object-cover w-full rounded-[24px]" />
      </section>

      <section className="w-[80%] mx-auto pt-8 pb-16 text-start flex flex-col justify-center items-center">
        <p className="text-[24px] font-[400] text-[#585967] m-[0px] text-start">
          There is no significant difference in distribution on the market of iOS development. Swift dominates in most global destinations, and in the US in particular. However, the number of Objective-C developers is also high.
        </p>
      </section>

      <section className="w-[80%] mx-auto pb-16 flex flex-col justify-start items-start">
        <h2 className="text-[32px] font-[500] text-[#2B2B40] mb-2 text-start">
          Outsourcing Mobile Software Development
        </h2>
        <p className="text-[24px] font-[400] text-[#585967] m-[0px] text-start">
          In 2018, the giants like Google, Microsoft, Verizon, and even NASA hire remote tech talent. Companies like Samsung, Harley Davidson, and Wix are also building their Android and iOS apps overseas.
          <br />
          <br />
          If you’re looking for skilled mobile developers, AppDevShop can help you reach the top-3% of talent.
          <br />
          <br />
          Here are just a few facts as to why to consider us as your mobile software development partner:
          <br />
          <br />
          ∙ We rank #2 on Clutch in DC, and #4 in Bay Area.
          <br />
          ∙ We were among the early adopters of React Native back in 2015, and the React Native Showcase features our apps.
          <br />
          ∙ Our engineers come from Swift, Objective-C, and Java, and some are also exploring Kotlin and Dart/Flutter.
        </p>
      </section>

      <section className="w-[80%] mx-auto pt-[45px] pb-[30px] lg:text-center text-start flex flex-row justify-between items-center">
        <h2 className="text-[32px] font-bold text-[#2B2B40] lg:mb-2 mb-0">
          Our stories
        </h2>
      </section>

      <section className="w-[80%] mx-auto pb-[45px] text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {listTestimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              imageSrc={testimonial.imageSrc}
              name={testimonial.name}
              date={testimonial.date}
            />
          ))}
        </div>
      </section>


      <ContactForm />
    </Layout>
  );
}
