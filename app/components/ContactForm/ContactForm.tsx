"use client";

import { getAssetPath } from "@/app/utils/assets";
import Image from "next/image";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM || "");

  if (state.succeeded) {
    return (
      <div id="contact-form">
        <section className="w-[80%] mx-auto py-16 lg:mb-32 mb-8">
          <div className="flex gap-8">
            <div className="w-full bg-white rounded-[24px] md:p-8 p-4 md:py-8 py-8">
              <div className="flex flex-col items-center justify-center min-h-[400px]">
                <h2 className="text-[32px] lg:text-[42px] font-[700] text-gray-800 mb-4 text-center">
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
          <div className="w-full bg-white rounded-[24px] md:p-8 p-4 md:py-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <form onSubmit={handleSubmit}  method="POST" className="flex flex-col  gap-6 lg:w-[50%] w-[100%]">
                <h2 className="text-[32px] lg:text-[42px] font-[700] text-gray-800 mb-8 lg:text-left text-center">
                  Conversemos sobre cómo evolucionar tu negocio
                </h2>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-0">
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
                    <ValidationError prefix="Name" field="name" className="text-red-500 text-sm font-semibold"  errors={state.errors} />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
                    <ValidationError prefix="Email" field="email" className="text-red-500 text-sm font-semibold" errors={state.errors} />
                  </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="flex-1">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-0">
                      Empresa
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800"
                      placeholder=""
                    />
                    <ValidationError prefix="Company" field="company" className="text-red-500 text-sm font-semibold" errors={state.errors} />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      inputMode="tel"
                      pattern="\+?[0-9]*"
                      className="w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-2 text-gray-800"
                      placeholder=""
                      onKeyDown={(e) => {
                        const input = e.currentTarget;
                        const value = input.value;
                        const isNumber = /[0-9]/.test(e.key);
                        const isPlus = e.key === '+';
                        const isControlKey = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Enter', 'Home', 'End'].includes(e.key);
                        
                        // Permitir + solo al inicio
                        if (isPlus && value.length === 0) {
                          return; // Permitir el +
                        }
                        
                        // Permitir números siempre
                        if (isNumber) {
                          return; // Permitir números
                        }
                        
                        // Permitir teclas de control
                        if (isControlKey) {
                          return; // Permitir teclas de control
                        }
                        
                        // Permitir Ctrl/Cmd + A, C, V, X para copiar/pegar/seleccionar
                        if (e.ctrlKey || e.metaKey) {
                          return;
                        }
                        
                        // Bloquear todo lo demás
                        e.preventDefault();
                      }}
                      onChange={(e) => {
                        let value = e.target.value;
                        // Permitir + solo al inicio, luego solo números
                        if (value.startsWith('+')) {
                          value = '+' + value.slice(1).replace(/[^0-9]/g, '');
                        } else {
                          value = value.replace(/[^0-9]/g, '');
                        }
                        e.target.value = value;
                      }}
                    />
                    <ValidationError prefix="Phone" field="phone" className="text-red-500 text-sm font-semibold" errors={state.errors} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
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
                  <ValidationError prefix="Message" field="message" className="text-red-500 text-sm font-semibold"  errors={state.errors} />
                </div>
                <div className="flex lg:flex-row flex-col items-center justify-between gap-4 lg:mt-10 mt-6">
                  <p className="text-[18px] font-[500] lg:font-[400] text-[#2A1A45] lg:text-gray-500 lg:w-[60%] w-[100%] text-left">
                    Al enviar este formulario confirmo que he leído y acepto la
                    Política de Privacidad.
                  </p>
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="lg:w-fit w-full flex justify-center items-center text-white px-[36px] py-[10px] rounded-[16px] text-lg font-semibold shadow-lg flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
              <div className="rounded-[50px] w-full lg:w-[420px] relative h-[400px] lg:h-[537px]  relative overflow-hidden">
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
