import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { COMPANY } from "../../data/company";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Servicio",
  description:
    "Términos y condiciones de servicio y uso de la plataforma LEXUR Software Solutions Corp.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#111110] text-[#F1EFEA]">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 pt-36 pb-24 sm:pt-40 sm:pb-32">
        {/* Encabezado */}
        <header className="border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-zinc-400 mb-6">
            <span>CONDICIONES DE SERVICIO</span>
            <span className="text-zinc-600">•</span>
            <span>Última actualización: Octubre 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Términos y Condiciones de Servicio
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Bienvenido a <strong className="text-white">{COMPANY.name}</strong>. Al acceder a este sitio web o utilizar nuestras soluciones de software y plataformas SaaS, aceptas cumplir con los siguientes términos y condiciones.
          </p>
        </header>

        {/* Secciones */}
        <div className="mt-12 space-y-12 text-[15px] sm:text-base leading-relaxed text-zinc-300">
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              1. Aceptación de los Términos
            </h2>
            <p>
              El acceso y uso de este sitio web, así como de las versiones de demostración o producción de nuestros productos (<strong className="text-white">FerreCore, MedClinic EHR, OptiVision Cloud, Lexur Cloud Core</strong>), implica tu conformidad con los presentes Términos de Servicio y con nuestra{" "}
              <Link href="/privacy" className="text-white underline">
                Política de Privacidad
              </Link>
              . Si no estás de acuerdo con alguna cláusula, debes abstenerte de utilizar nuestros servicios.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              2. Propiedad Intelectual y Derechos Reservados
            </h2>
            <p>
              Todos los derechos de propiedad intelectual e industrial sobre el diseño visual, código fuente, arquitecturas de software, logotipos, marcas comerciales, componentes de interfaz gráfica, algoritmos, documentación y contenidos de esta web pertenecen exclusivamente a <strong>{COMPANY.legalName}</strong> o a sus respectivos licenciantes.
            </p>
            <p>
              Queda estrictamente prohibida la reproducción total o parcial, descompilación, ingeniería inversa, distribución comercial no autorizada o copia no autorizada del software o sus elementos constitutivos sin el consentimiento previo y por escrito de {COMPANY.name}.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              3. Uso Permitido y Restricciones
            </h2>
            <p>Al utilizar nuestros servicios te comprometes a no:</p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Utilizar el servicio para fines fraudulentos, ilícitos o contrarios a las leyes peruanas e internacionales.</li>
              <li>Intentar vulnerar las medidas de seguridad, autenticación, firewalls (WAF) o realizar ataques de denegación de servicio (DDoS).</li>
              <li>Extraer información sensible o datos de terceros sin autorización expresa.</li>
              <li>Hacer un uso abusivo de las APIs o interfaces de demostración.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              4. Demos y Servicios en Producción (SLA)
            </h2>
            <p>
              Las demostraciones provistas en este sitio tienen fines informativos y de evaluación técnica. Para clientes con suscripciones activas de software o acuerdos de desarrollo a medida, las condiciones de nivel de servicio (SLA), mantenimiento y soporte se rigen por el contrato de prestación de servicios y orden de servicio correspondiente celebrado entre las partes.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              5. Limitación de Responsabilidad
            </h2>
            <p>
              En la máxima medida permitida por la legislación aplicable, {COMPANY.name} no se responsabiliza por interrupciones atribuibles a fallas de proveedores externos de telecomunicaciones, eventos de fuerza mayor o uso indebido de las credenciales de acceso por parte del usuario final.
            </p>
          </section>

          <section className="space-y-4 border-t border-white/10 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              6. Ley Aplicable y Jurisdicción
            </h2>
            <p>
              Estos términos se interpretan y rigen conforme a las leyes de la <strong>República del Perú</strong>. Para cualquier controversia derivada del uso del sitio web o de los servicios de {COMPANY.name}, las partes se someten expresamente a la competencia de los jueces y tribunales del distrito judicial de Lima, Perú.
            </p>
          </section>
        </div>

        {/* Enlace de regreso */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            ← Volver al inicio
          </Link>
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Ver Política de Privacidad →
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
