import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { COMPANY } from "../../data/company";

export const metadata: Metadata = {
  title: "Política de Privacidad y Tratamiento de Datos Personales",
  description:
    "Políticas de privacidad y tratamiento de datos personales de LEXUR Software Solutions Corp. de conformidad con la Ley N° 29733 de la República del Perú.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#111110] text-[#F1EFEA]">
      <Navbar />

      <article className="max-w-4xl mx-auto px-6 pt-36 pb-24 sm:pt-40 sm:pb-32">
        {/* Encabezado */}
        <header className="border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-zinc-400 mb-6">
            <span>LEY N° 29733 · PERÚ</span>
            <span className="text-zinc-600">•</span>
            <span>Última actualización: Octubre 2026</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white leading-tight">
            Política de Privacidad y Tratamiento de Datos Personales
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            En <strong className="text-white">{COMPANY.legalName}</strong> (en adelante, &quot;{COMPANY.name}&quot;), la privacidad, seguridad y confidencialidad de tu información personal y corporativa son principios fundamentales. Esta política describe cómo recopilamos, utilizamos, almacenamos y protegemos tus datos personales.
          </p>
        </header>

        {/* Contenido Legal Estructurado */}
        <div className="mt-12 space-y-12 text-[15px] sm:text-base leading-relaxed text-zinc-300">
          {/* Sección 1 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              1. Marco Legal y Responsable del Tratamiento
            </h2>
            <p>
              El tratamiento de datos personales realizado por {COMPANY.name} se efectúa en estricto cumplimiento de la <strong>Ley N° 29733 (Ley de Protección de Datos Personales del Perú)</strong>, su Reglamento aprobado mediante <strong>Decreto Supremo N° 003-2013-JUS</strong>, y los más rigurosos estándares internacionales en seguridad de la información.
            </p>
            <div className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-sm text-zinc-400">
              <p><strong className="text-zinc-200">Razón Social:</strong> {COMPANY.legalName}</p>
              <p><strong className="text-zinc-200">Nombre Comercial:</strong> {COMPANY.name}</p>
              <p><strong className="text-zinc-200">Domicilio:</strong> Lima, República del Perú</p>
              <p><strong className="text-zinc-200">Correo Electrónico de Contacto:</strong> <a href={`mailto:${COMPANY.email}`} className="text-white underline">{COMPANY.email}</a></p>
              <p><strong className="text-zinc-200">Canal Oficial de WhatsApp:</strong> {COMPANY.whatsappDisplay}</p>
            </div>
          </section>

          {/* Sección 2 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              2. Principios Rectores del Tratamiento
            </h2>
            <p>
              Garantizamos que en todo momento el tratamiento de tus datos personales observará los siguientes principios:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li><strong className="text-zinc-200">Legalidad:</strong> No se recopilan datos por medios fraudulentos, desleales o ilícitos.</li>
              <li><strong className="text-zinc-200">Consentimiento:</strong> El tratamiento de datos requiere tu consentimiento libre, previo, expreso e informado.</li>
              <li><strong className="text-zinc-200">Finalidad:</strong> Los datos se recopilan únicamente para fines determinados, explícitos y lícitos.</li>
              <li><strong className="text-zinc-200">Proporcionalidad:</strong> Solo solicitamos datos adecuados, relevantes y no excesivos en relación con el servicio solicitado.</li>
              <li><strong className="text-zinc-200">Seguridad y Confidencialidad:</strong> Implementamos medidas técnicas y organizativas para evitar la alteración, pérdida o acceso no autorizado.</li>
            </ul>
          </section>

          {/* Sección 3 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              3. Datos Personales que Recopilamos
            </h2>
            <p>Podemos recopilar los siguientes datos personales cuando interactúas con nuestra plataforma o solicitas información:</p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h3 className="font-semibold text-white mb-2">Datos de Identificación y Contacto</h3>
                <p className="text-sm text-zinc-400">Nombres, apellidos, nombre de la empresa u organización, cargo, correo electrónico corporativo o personal, número de teléfono o WhatsApp.</p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                <h3 className="font-semibold text-white mb-2">Datos de Requerimiento y Navegación</h3>
                <p className="text-sm text-zinc-400">Interés en productos específicos (FerreCore, MedClinic EHR, OptiVision Cloud, Lexur Cloud Core), detalles de requerimientos de software, dirección IP anónima, datos de telemetría y preferencias de interfaz (modo oscuro/claro, idioma).</p>
              </div>
            </div>
          </section>

          {/* Sección 4 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              4. Finalidad del Tratamiento de Datos
            </h2>
            <p>Tus datos son tratados para los siguientes fines:</p>
            <ol className="list-decimal pl-6 space-y-2 text-zinc-400">
              <li>Atender consultas, solicitudes de cotización y propuestas comerciales para desarrollo a medida.</li>
              <li>Coordinar y habilitar accesos de prueba y demostraciones personalizadas de nuestras plataformas SaaS.</li>
              <li>Gestionar la relación contractual, administrativa, contable y de facturación.</li>
              <li>Brindar soporte técnico y mantenimiento de los sistemas contratados.</li>
              <li>Enviar comunicaciones sobre actualizaciones críticas, parches de seguridad y mejoras en la plataforma, siempre que cuentes con el consentimiento correspondiente.</li>
            </ol>
          </section>

          {/* Sección 5 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              5. Medidas de Seguridad y Almacenamiento
            </h2>
            <p>
              {COMPANY.name} adopta rigurosas medidas técnicas, organizativas y legales para proteger los datos personales contra accesos no autorizados, pérdida, robo o manipulación indebida:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-zinc-400">
              <li>Cifrado de comunicaciones mediante protocolos seguros <strong>TLS / HTTPS</strong> de extremo a extremo.</li>
              <li>Cifrado en reposo para bases de datos sensibles con estándar <strong>AES-256</strong>.</li>
              <li>Infraestructura en la nube con certificaciones internacionales de cumplimiento (ISO/IEC 27001, SOC 2 Type II).</li>
              <li>Controles estrictos de acceso basados en roles (RBAC) y políticas de mínimo privilegio.</li>
            </ul>
          </section>

          {/* Sección 6 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              6. Ejercicio de Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición)
            </h2>
            <p>
              De conformidad con la Ley N° 29733, como titular de los datos personales tienes derecho a acceder a tu información en nuestro banco de datos, solicitar la rectificación de datos inexactos o incompletos, exigir su cancelación cuando ya no sean necesarios para las finalidades recopiladas, u oponerte a su tratamiento.
            </p>
            <p>
              Para ejercer cualquiera de tus derechos ARCO, puedes remitir una solicitud gratuita a nuestro correo electrónico:
            </p>
            <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase font-mono text-zinc-400">Correo para Derechos ARCO</p>
                <p className="text-base font-semibold text-white">{COMPANY.email}</p>
              </div>
              <a
                href={`mailto:${COMPANY.email}?subject=Solicitud%20Derechos%20ARCO%20-%20Ley%2029733`}
                className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors"
              >
                Enviar Solicitud
              </a>
            </div>
            <p className="text-xs text-zinc-500">
              La solicitud debe incluir tu nombre completo, copia de documento de identidad (DNI/CE/Pasaporte), descripción clara del derecho a ejercer y documentos de sustento de ser aplicable. Será atendida en los plazos establecidos por ley.
            </p>
          </section>

          {/* Sección 7 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              7. Transferencia y Terceros Proveedores
            </h2>
            <p>
              {COMPANY.name} <strong>no vende, arrienda ni comercializa datos personales</strong> a ningún tercero. Para la prestación de nuestros servicios cloud, podemos recurrir a proveedores de infraestructura tecnológica (proveedores de hosting cloud, bases de datos y CDN) que operan bajo acuerdos estrictos de confidencialidad y procesamiento de datos conforme a estándares internacionales.
            </p>
          </section>

          {/* Sección 8 */}
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              8. Uso de Cookies
            </h2>
            <p>
              Nuestro sitio web utiliza únicamente cookies técnicas estrictamente necesarias para el funcionamiento del portal (como la persistencia del tema oscuro/claro y la preferencia de idioma). No utilizamos cookies de rastreo invasivo ni compartimos perfiles de usuario con redes publicitarias externas sin consentimiento explícito.
            </p>
          </section>

          {/* Sección 9 */}
          <section className="space-y-4 border-t border-white/10 pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight">
              9. Modificaciones a la Política
            </h2>
            <p>
              {COMPANY.name} se reserva el derecho de modificar esta Política de Privacidad para adaptarla a novedades legislativas, jurisprudenciales o mejores prácticas de la industria. Cualquier actualización será publicada en esta misma página con indicación de la fecha de última revisión.
            </p>
          </section>
        </div>

        {/* Botón de regreso */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors"
          >
            ← Volver al inicio
          </Link>
          <Link
            href="/terms"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
          >
            Ver Términos y Condiciones →
          </Link>
        </div>
      </article>

      <Footer />
    </main>
  );
}
