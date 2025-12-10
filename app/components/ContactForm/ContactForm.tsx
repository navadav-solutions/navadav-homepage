import React from "react";
import Image from "next/image";
import { getAssetPath } from "../../utils/assets";

const ContactForm = () => {
  return (
    <div>
      <section className="w-[80%] mx-auto py-16 lg:mb-32 mb-8">
        <div className="flex gap-8">
          {/* Formulario - Lado Izquierdo */}
          <div className="w-full bg-white rounded-[24px] md:p-8 p-4 md:py-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <form className="flex flex-col  gap-6 lg:w-[50%] w-[100%]">
                <h2 className="text-[32px] lg:text-[42px] font-[700] text-gray-800 mb-8 lg:text-left text-center">
                  ¿Listo para discutir tu proyecto con nosotros?
                </h2>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-0">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800"
                      placeholder=""
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800"
                      placeholder=""
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    About the project
                  </label>
                  <input
                    type="text"
                    className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800"
                    placeholder=""
                  />
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-between gap-4 lg:mt-20 mt-6">
                  <p className="text-[18px] font-[500] lg:font-[400] text-[#2A1A45] lg:text-gray-500 lg:w-[60%] w-[100%] text-left">
                    By sending this form I confirm that I have read and accept the
                    Privacy Policy
                  </p>
                  <button
                    type="submit"
                    className="lg:w-fit w-full flex justify-center items-center text-white px-[36px] py-[10px] rounded-[16px] text-lg font-semibold shadow-lg flex items-center gap-2 transition-all cursor-pointer"
                    style={{
                      background:
                        "radial-gradient(85.16% 87.63% at 50% 50%, #0743D7 0%, #2D69FD 100%)",
                      boxShadow: "0 0 30px 0 rgba(113, 137, 255, 0.70)",
                    }}>
                    Send
                    <Image
                      src={getAssetPath("/arrowRight.svg")}
                      alt="Send Icon"
                      width={20}
                      height={20}
                      className="w-5 h-5"
                    />
                  </button>
                </div>

              </form>
              {/* Imagen/Productos - Lado Derecho */}
              <div className="rounded-[50px] relative overflow-hidden">
                <Image
                  src={getAssetPath("/formImage.png")}
                  alt="Contact Products"
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
