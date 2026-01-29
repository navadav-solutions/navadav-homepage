import Link from "next/link";
import type { Metadata } from "next";
import Layout from "@/app/layout/Layout";

export const metadata: Metadata = {
  title: "Política de Privacidad | Navadav",
  description:
    "Navadav respeta tu privacidad y solo utiliza la información del formulario de contacto para responder tu consulta y coordinar un seguimiento.",
};

const PrivacyPolicy = () => {
  return (
    <Layout>
      <section className="w-[90%] max-w-[960px] mx-auto py-20 text-[#111122]">
        <div className="space-y-6">
          <p className="text-sm tracking-[0.4em] uppercase text-[#5c6277]">
            Política de Privacidad
          </p>
          <h1 className="text-[32px] lg:text-[44px] font-semibold leading-tight">
            Tratamos tus datos con cuidado para responderte rápido
          </h1>
          <p className="text-lg text-[#3a3a4a] leading-relaxed">
            Navadav solo usa un formulario de contacto. No existen usuarios
            registrados, no desplegamos autenticación ni cuentas, y no
            utilizamos cookies de tracking ni analítica avanzada. Todo lo que
            compartes con nosotros viaja únicamente para que podamos responder
            tu consulta y coordinar una llamada o propuesta.
          </p>
        </div>

        <div className="mt-12 space-y-10">
          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#10112d]">
              ¿Qué datos recopilamos?
            </h2>
            <p className="text-[#3a3a4a] leading-relaxed">
              Solo pedimos los datos necesarios para responderte:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#3a3a4a]">
              <li>Nombre y apellido para saber con quién hablamos.</li>
              <li>Correo electrónico para enviarte la respuesta.</li>
              <li>Empresa (opcional) para entender tu contexto.</li>
              <li>
                Número telefónico (opcional) si deseas que coordinemos una
                llamada.
              </li>
              <li>Mensaje libre donde nos cuentas tu necesidad o proyecto.</li>
            </ul>
            <p className="text-[#3a3a4a] leading-relaxed">
              También recogemos la información técnica mínima que necesita
              nuestro proveedor de formularios para entregar el mensaje; nada
              más. No activamos scripts de seguimiento ni cookies externas.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#10112d]">
              ¿Para qué usamos tus datos?
            </h2>
            <p className="text-[#3a3a4a] leading-relaxed">
              Tu información se utiliza exclusivamente para:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#3a3a4a]">
              <li>Responder la consulta que enviaste desde el formulario.</li>
              <li>Coordinar una llamada o reunión si nos lo pides.</li>
              <li>
                Enviar información relacionada con nuestros servicios que tú
                solicitaste.
              </li>
            </ul>
            <p className="text-[#3a3a4a] leading-relaxed">
              No vendemos ni alquilamos tus datos, ni los usamos para publicidad
              no solicitada.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#10112d]">
              Quién tiene acceso
            </h2>
            <p className="text-[#3a3a4a] leading-relaxed">
              Navadav es responsable de los datos que nos compartes. Para
              recibir los mensajes utilizamos el proveedor del formulario, que
              actúa bajo nuestras instrucciones y no reutiliza tu información
              con fines propios.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#10112d]">
              Conservación y seguridad
            </h2>
            <p className="text-[#3a3a4a] leading-relaxed">
              Conservamos tus datos solo mientras sean útiles para responderte y
              hasta 12 meses para mantener el historial de la conversación.
              Después los eliminamos o anonimizamos.
            </p>
            <p className="text-[#3a3a4a] leading-relaxed">
              Aplicamos controles técnicos y organizativos razonables (accesos
              restringidos, cifrado cuando se requiere, respaldos regulares)
              para evitar accesos no autorizados.
            </p>
          </article>

          <article className="space-y-4">
            <h2 className="text-2xl font-semibold text-[#10112d]">
              Tus derechos
            </h2>
            <p className="text-[#3a3a4a] leading-relaxed">
              En cualquier momento puedes solicitar:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#3a3a4a]">
              <li>
                Acceder, corregir o eliminar los datos que nos compartiste.
              </li>
              <li>
                Oponerte a su uso o solicitar que limitemos su tratamiento.
              </li>
              <li>Solicitar la portabilidad si así lo necesitas.</li>
            </ul>
            <p className="text-[#3a3a4a] leading-relaxed">
              Escríbenos a{" "}
              <Link
                href="mailto:contacto@navadav.com"
                className="font-semibold text-[#0f4ee6]"
              >
                contacto@navadav.com
              </Link>{" "}
              y cuéntanos qué necesitas; responderemos en breve.
            </p>
          </article>

          <article className="space-y-3">
            <h2 className="text-2xl font-semibold text-[#10112d]">
              Conversaciones y actualizaciones
            </h2>
            <p className="text-[#3a3a4a] leading-relaxed">
              Mantenemos esta política en esta ruta y la actualizamos si
              agregamos servicios nuevos o cambian nuestras prácticas. Siempre
              verás la versión vigente en esta página.
            </p>
            <p className="text-sm text-[#5c6277]">
              Última actualización: 29 de enero de 2026.
            </p>
            <p className="text-sm text-[#5c6277]">
              ¿Quieres volver al formulario de contacto?{" "}
              <Link
                href="/#contact-form"
                className="font-semibold text-[#0f4ee6]"
              >
                Haz clic aquí
              </Link>
              .
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
