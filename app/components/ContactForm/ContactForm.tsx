"use client";

import { useState } from "react";
import { getAssetPath } from "@/app/utils/assets";
import Image from "next/image";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || "");
  const [phone, setPhone] = useState("");

  if (state.succeeded) {
    return (
      <div id="contact-form">
        <section className="w-[80%] mx-auto py-16 lg:mb-32 mb-8">
          <div className="flex gap-8">
            <div className="w-full bg-white rounded-3xl md:p-8 p-4 md:py-8 py-8">
              <div className="flex flex-col items-center justify-center min-h-[400px]">
                <h2 className="text-[32px] lg:text-[42px] font-boldtext-gray-800 mb-4 text-center">
                  ¡Gracias por contactarnos!
                </h2>
                <p className="text-lg text-gray-600 text-center">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div id="contact-form">
      <section className="w-[80%] mx-auto py-16 lg:mb-32 mb-8">
        <div className="flex gap-8">
          {/* Formulario - Lado Izquierdo */}
          <div className="w-full bg-white rounded-3xl md:p-8 p-4 md:py-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <form
                onSubmit={handleSubmit}
                method="POST"
                className="flex flex-col  gap-6 lg:w-[50%] w-full"
              >
                <h2 className="text-[32px] lg:text-[42px] font-bold text-gray-800 mb-8 lg:text-left text-center">
                  Conversemos sobre cómo evolucionar tu negocio
                </h2>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-0"
                    >
                      Nombre
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800"
                      placeholder=""
                      required
                    />
                    <ValidationError
                      prefix="Name"
                      field="name"
                      className="text-red-500 text-sm font-semibold"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Correo electrónico
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800"
                      placeholder=""
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      className="text-red-500 text-sm font-semibold"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-0"
                    >
                      Empresa
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800"
                      placeholder=""
                    />
                    <ValidationError
                      prefix="Company"
                      field="company"
                      className="text-red-500 text-sm font-semibold"
                      errors={state.errors}
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Teléfono
                    </label>
                    <PhoneInput
                      country="us"
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      inputProps={{
                        name: "phone",
                        id: "phone",
                        required: false,
                      }}
                      containerStyle={{
                        width: "100%",
                      }}
                      inputStyle={{
                        width: "100%",
                        border: "none",
                        borderBottom: "2px solid #d1d5db",
                        borderRadius: "0",
                        padding: "8px 0 8px 50px",
                        fontSize: "16px",
                        color: "#1f2937",
                        outline: "none",
                        background: "transparent",
                      }}
                      buttonStyle={{
                        border: "none",
                        borderBottom: "2px solid #d1d5db",
                        borderRadius: "0",
                        background: "transparent",
                        padding: "8px 4px 8px 0",
                      }}
                      inputClass="phone-input-custom"
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      className="text-red-500 text-sm font-semibold"
                      errors={state.errors}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Cuéntanos brevemente qué te gustaría mejorar o evolucionar.
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none text-gray-800 resize-none"
                    placeholder=""
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    className="text-red-500 text-sm font-semibold"
                    errors={state.errors}
                  />
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-between gap-4 lg:mt-10 mt-6">
                  <p className="text-[18px] font-medium lg:font-normal text-[#2A1A45] lg:text-gray-500 lg:w-[60%] w-full text-left">
                    Al enviar este formulario confirmo que he leído y acepto la{" "}
                    <Link
                      href="/politica-de-privacidad"
                      className="underline font-semibold text-[#0743D7]"
                    >
                      Política de Privacidad
                    </Link>
                    .
                  </p>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="lg:w-fit w-full flex justify-center items-center text-white px-9 py-2.5 rounded-2xl text-lg font-semibold shadow-lg gap-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      background:
                        "radial-gradient(85.16% 87.63% at 50% 50%, #0743D7 0%, #2D69FD 100%)",
                      boxShadow: "0 0 30px 0 rgba(113, 137, 255, 0.70)",
                    }}
                  >
                    {state.submitting ? "Enviando..." : "Conversemos"}
                    {!state.submitting && (
                      <Image
                        src={getAssetPath("/icons/ui/arrow-right.svg")}
                        alt="Send Icon"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    )}
                  </button>
                </div>
                <ValidationError errors={state.errors} />
              </form>
              {/* Imagen/Productos - Lado Derecho */}
              <div className="rounded-[50px] w-full lg:w-[420px] relative h-[400px] lg:h-[537px] overflow-hidden">
                <Image
                  src={getAssetPath("/images/misc/form.png")}
                  alt="Contact Products"
                  fill
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
