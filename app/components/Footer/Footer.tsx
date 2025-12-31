import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/app/utils/assets";
import { footerLinks, footerSocialLinks } from "@/app/data/footerLinks";

const Footer = () => {
  return (
    <footer
      className="text-center text-sm text-gray-500"
      style={{
        background: "linear-gradient(174deg, #190347, #3414C8, #59E9F4)",
      }}
    >
      <div className="w-[90%] mx-auto text-white py-24">
        <Image
          src={getAssetPath("/logos/final.svg")}
          alt="logo"
          width={200}
          height={0}
          className="w-[300px] h-[auto] z-10 relative mb-4"
        />
        <div className="flex flex-col lg:flex-row items-start justify-between gap-16 lg:gap-0">
          <p className="text-[22px] font-[700] text-white text-left">
            Partner para la evolución tecnológica de tu negocio.
          </p>
          <div className="flex flex-col items-start justify-center text-[#D3C7D2]">
            <p className="text-[24px] font-bold text-left mb-[40px] text-white">
              Contacto
            </p>

            <ul className="flex flex-col items-start justify-center gap-[24px]">
              {/* WhatsApp */}
              <li>
                <Link
                  href="https://wa.me/573209788422"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-[16px] hover:text-white transition-colors"
                >
                  <Image
                    src={getAssetPath("/icons/social/whatsapp.svg")}
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                  <span>+57 320 9788422</span>
                </Link>
              </li>

              {/* Email */}
              <li>
                <Link
                  href="mailto:contacto@navadav.com"
                  className="text-[16px] hover:text-white transition-colors"
                >
                  contacto@navadav.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start justify-center">
            <p className="text-[24px] font-bold text-left mb-[40px]">Links</p>
            <ul className="flex flex-col items-start justify-center gap-[24px] text-[#D3C7D2] lg:font-weight-[400] font-[700]">
              {footerLinks.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.link}
                    className="text-[16px] font-weight-[400] text-left"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row  items-start lg:items-center gap-12 lg:gap-72 mt-12 lg:mt-0">
          <p className="text-[18px] font-weight-[700] text-white text-left">
            © NAVADAV. Todos los derechos reservados.
          </p>

          <div className="flex items-center justify-center gap-4">
            {footerSocialLinks.map((link) => (
              <a
                key={link.title}
                href={link.link}
                target={"_blank"}
                rel={"noreferrer"}
              >
                <Image
                  src={getAssetPath(
                    `/icons/social/${link.title.toLowerCase()}.svg`
                  )}
                  alt={link.title}
                  width={20}
                  height={20}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
