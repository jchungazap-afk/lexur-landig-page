"use client";

import { useId, useState, type FormEvent } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { SAAS_SCENES } from "../../data/saasScenes";
import { COMPANY } from "../../data/company";
import {
  WhatsappLogoDuo,
  EnvelopeSimpleDuo,
  MapPinDuo,
  ClockDuo,
  CheckCircleDuo,
  ArrowUpRight,
  CaretDoubleRight,
} from "../common/Icons";

const T = {
  es: {
    title: "Hablemos de tu sistema",
    lead: "Cuéntanos cómo trabaja tu empresa y qué quieres resolver. Te respondemos con una propuesta concreta: qué sistema encaja, qué módulos necesitas y en cuánto tiempo puede estar operando.",
    channels: "Escríbenos directo",
    formTitle: "Solicita una demo o cotización",
    name: "Nombre",
    company: "Empresa",
    contact: "Correo o WhatsApp",
    interest: "¿Qué te interesa?",
    custom: "Desarrollo a medida",
    message: "Mensaje",
    messagePh: "Ej.: Tenemos 3 tiendas y queremos controlar el stock en tiempo real…",
    sendWa: "Enviar por WhatsApp",
    sendMail: "Enviar por correo",
    required: "Completa este campo",
    doneTitle: "Tu mensaje está listo",
    doneBody: "Abrimos la aplicación con el mensaje redactado; solo falta enviarlo. Si no se abrió,",
    doneLink: "ábrelo aquí",
    again: "Escribir otro mensaje",
    note: "Usamos tus datos solo para responder esta solicitud.",
    hello: "Hola LEXUR, soy",
    from: "de",
    interestedIn: "Me interesa",
    reach: "Mi contacto",
  },
  en: {
    title: "Let's talk about your system",
    lead: "Tell us how your company works and what you want to solve. We'll reply with a concrete proposal: which system fits, which modules you need and how soon it can be running.",
    channels: "Reach us directly",
    formTitle: "Request a demo or a quote",
    name: "Name",
    company: "Company",
    contact: "Email or WhatsApp",
    interest: "What are you interested in?",
    custom: "Custom development",
    message: "Message",
    messagePh: "E.g.: We run 3 stores and want real-time stock control…",
    sendWa: "Send via WhatsApp",
    sendMail: "Send via email",
    required: "Please fill in this field",
    doneTitle: "Your message is ready",
    doneBody: "We opened the app with your message drafted; you just need to send it. If it didn't open,",
    doneLink: "open it here",
    again: "Write another message",
    note: "We only use your details to answer this request.",
    hello: "Hi LEXUR, I'm",
    from: "from",
    interestedIn: "I'm interested in",
    reach: "My contact",
  },
};

type Field = "name" | "contact" | "message";

export default function ContactSection() {
  const { language } = useLanguage();
  const t = T[language];
  const uid = useId();
  const options = [...SAAS_SCENES.map((s) => ({ id: s.id, label: s.name, accent: s.accent })), { id: "custom", label: t.custom, accent: "" }];

  const [values, setValues] = useState({ name: "", company: "", contact: "", message: "" });
  const [picked, setPicked] = useState<string[]>([]);
  const [errors, setErrors] = useState<Partial<Record<Field, boolean>>>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const toggle = (id: string) => setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const compose = () => {
    const interests = options.filter((o) => picked.includes(o.id)).map((o) => o.label);
    return [
      `${t.hello} ${values.name.trim()}${values.company.trim() ? ` ${t.from} ${values.company.trim()}` : ""}.`,
      interests.length ? `${t.interestedIn}: ${interests.join(", ")}.` : "",
      "",
      values.message.trim(),
      "",
      `${t.reach}: ${values.contact.trim()}`,
    ]
      .filter((l, i, a) => !(l === "" && a[i - 1] === ""))
      .join("\n");
  };

  const submit = (via: "wa" | "mail") => (e?: FormEvent) => {
    e?.preventDefault();
    const next: Partial<Record<Field, boolean>> = {
      name: !values.name.trim(),
      contact: !values.contact.trim(),
      message: !values.message.trim(),
    };
    setErrors(next);
    const firstBad = (Object.keys(next) as Field[]).find((k) => next[k]);
    if (firstBad) {
      document.getElementById(`${uid}-${firstBad}`)?.focus();
      return;
    }
    const text = compose();
    const url =
      via === "wa"
        ? `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`
        : `mailto:${COMPANY.email}?subject=${encodeURIComponent(`${t.formTitle} — ${values.company.trim() || values.name.trim()}`)}&body=${encodeURIComponent(text)}`;
    window.open(url, via === "wa" ? "_blank" : "_self", "noopener");
    setSentUrl(url);
  };

  const inputCls = (bad?: boolean) =>
    `w-full rounded-xl bg-white/[0.04] border px-4 py-3 text-[16px] text-white placeholder:text-zinc-600 outline-none transition-colors focus:bg-white/[0.06] focus:border-white/40 ${
      bad ? "border-red-400/70" : "border-white/10 hover:border-white/20"
    }`;

  const set = (k: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (k in errors) setErrors((er) => ({ ...er, [k]: false }));
  };

  const channels = [
    { icon: WhatsappLogoDuo, label: `WhatsApp · ${COMPANY.whatsappUser}`, value: COMPANY.whatsappDisplay, href: `https://wa.me/${COMPANY.whatsapp}` },
    { icon: EnvelopeSimpleDuo, label: language === "es" ? "Correo" : "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
    { icon: MapPinDuo, label: language === "es" ? "Oficina" : "Office", value: COMPANY.city[language] },
    { icon: ClockDuo, label: language === "es" ? "Horario" : "Hours", value: COMPANY.hours[language] },
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative bg-black border-t border-white/10 scroll-mt-20 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] w-[60vw] h-[60vw] max-w-[900px] max-h-[900px] rounded-full blur-[140px] opacity-[0.14]" style={{ background: "var(--flow)" }} />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 py-24 sm:py-32 grid gap-14 lg:gap-20 lg:grid-cols-12">
        {/* Columna izquierda: mensaje + canales */}
        <div className="lg:col-span-5">
          <h2 id="contact-title" className="text-[clamp(2.5rem,5.5vw,4.5rem)] font-semibold tracking-[-0.035em] leading-[0.95] text-white text-balance">
            {t.title}
          </h2>
          <p className="mt-6 max-w-[44ch] text-[17px] leading-[1.6] text-zinc-400">{t.lead}</p>

          <h3 className="mt-12 mb-3 text-[13px] text-zinc-500">{t.channels}</h3>
          <ul className="border-t border-white/10">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <Icon className="w-6 h-6 text-zinc-300 shrink-0 transition-colors group-hover:text-[#6e9bff] icon-wiggle" />
                  <span className="flex-1 min-w-0">
                    <span className="block text-[13px] text-zinc-500">{label}</span>
                    <span className="block text-[16px] text-white truncate">{value}</span>
                  </span>
                  {href && <ArrowUpRight className="w-4 h-4 text-zinc-500 icon-nudge group-hover:text-white" />}
                </>
              );
              return (
                <li key={label} className="border-b border-white/10">
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex items-center gap-4 py-4 focus-visible:outline-2 focus-visible:outline-white rounded-sm"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Columna derecha: formulario */}
        <div className="lg:col-span-7">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.025] p-6 sm:p-9">
            {sentUrl ? (
              <div role="status" className="py-10 text-center">
                <CheckCircleDuo className="w-14 h-14 mx-auto text-emerald-400 icon-pop" />
                <p className="mt-5 text-[24px] font-semibold tracking-[-0.02em] text-white">{t.doneTitle}</p>
                <p className="mt-3 mx-auto max-w-[40ch] text-[16px] text-zinc-400 leading-relaxed">
                  {t.doneBody}{" "}
                  <a href={sentUrl} target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4">
                    {t.doneLink}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSentUrl(null);
                    setValues({ name: "", company: "", contact: "", message: "" });
                    setPicked([]);
                  }}
                  className="mt-8 text-[15px] font-medium text-zinc-300 underline decoration-white/30 underline-offset-[6px] hover:text-white"
                >
                  {t.again}
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={submit("wa")}>
                <p className="text-[22px] font-semibold tracking-[-0.02em] text-white">{t.formTitle}</p>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor={`${uid}-name`} className="block mb-2 text-[14px] text-zinc-300">
                      {t.name} <span className="text-zinc-600">*</span>
                    </label>
                    <input id={`${uid}-name`} autoComplete="name" value={values.name} onChange={set("name")} aria-invalid={errors.name || undefined} aria-describedby={errors.name ? `${uid}-name-err` : undefined} className={inputCls(errors.name)} />
                    {errors.name && <p id={`${uid}-name-err`} className="mt-1.5 text-[13px] text-red-400">{t.required}</p>}
                  </div>
                  <div>
                    <label htmlFor={`${uid}-company`} className="block mb-2 text-[14px] text-zinc-300">{t.company}</label>
                    <input id={`${uid}-company`} autoComplete="organization" value={values.company} onChange={set("company")} className={inputCls()} />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor={`${uid}-contact`} className="block mb-2 text-[14px] text-zinc-300">
                      {t.contact} <span className="text-zinc-600">*</span>
                    </label>
                    <input id={`${uid}-contact`} autoComplete="email" value={values.contact} onChange={set("contact")} aria-invalid={errors.contact || undefined} aria-describedby={errors.contact ? `${uid}-contact-err` : undefined} className={inputCls(errors.contact)} />
                    {errors.contact && <p id={`${uid}-contact-err`} className="mt-1.5 text-[13px] text-red-400">{t.required}</p>}
                  </div>
                </div>

                <fieldset className="mt-6">
                  <legend className="mb-3 text-[14px] text-zinc-300">{t.interest}</legend>
                  <div className="flex flex-wrap gap-2">
                    {options.map((o) => {
                      const on = picked.includes(o.id);
                      return (
                        <button
                          key={o.id}
                          type="button"
                          aria-pressed={on}
                          onClick={() => toggle(o.id)}
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[14px] transition-colors focus-visible:outline-2 focus-visible:outline-white ${
                            on ? "border-[#2f6bea] bg-[#2f6bea]/15 text-white" : "border-white/15 text-zinc-300 hover:border-white/35 hover:text-white"
                          }`}
                        >
                          {o.accent && <span className="w-2 h-2 rounded-[3px]" style={{ background: o.accent }} aria-hidden />}
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="mt-6">
                  <label htmlFor={`${uid}-message`} className="block mb-2 text-[14px] text-zinc-300">
                    {t.message} <span className="text-zinc-600">*</span>
                  </label>
                  <textarea id={`${uid}-message`} rows={4} value={values.message} onChange={set("message")} placeholder={t.messagePh} aria-invalid={errors.message || undefined} aria-describedby={errors.message ? `${uid}-message-err` : undefined} className={`${inputCls(errors.message)} resize-y min-h-[120px]`} />
                  {errors.message && <p id={`${uid}-message-err`} className="mt-1.5 text-[13px] text-red-400">{t.required}</p>}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <button type="submit" className="btn-flow group inline-flex items-center gap-2.5 rounded-full pl-6 pr-5 py-3.5 text-[15px] font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    <WhatsappLogoDuo className="w-5 h-5 icon-wiggle" />
                    {t.sendWa}
                    <CaretDoubleRight className="chev" />
                  </button>
                  <button type="button" onClick={submit("mail")} className="inline-flex items-center gap-2 text-[15px] font-medium text-zinc-200 underline decoration-white/30 underline-offset-[6px] hover:text-white hover:decoration-white">
                    {t.sendMail}
                  </button>
                </div>
                <p className="mt-5 text-[13px] text-zinc-500">{t.note}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
