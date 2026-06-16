"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContatoView() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulated send — integrate with email service (Resend, SendGrid, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-20 bg-navy-900 relative overflow-hidden">

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-steel-500" />
              <span className="font-sans text-xs font-semibold tracking-[0.2em] text-steel-400 uppercase">Fale Conosco</span>
              <span className="w-8 h-px bg-steel-500" />
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Entre em Contato
            </h1>
            <p className="font-sans text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
              Aguardamos o seu contato para entender sua demanda e construir juntos a melhor estratégia jurídica.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-display text-2xl font-semibold text-navy-900 mb-6">Informações de Contato</h2>
                <div className="space-y-5">
                  {[
                    { icon: MapPin, label: "Endereço", value: SITE_CONFIG.address.full },
                    { icon: Phone, label: "Telefone", value: SITE_CONFIG.phone, href: `tel:${SITE_CONFIG.phone}` },
                    { icon: Mail, label: "E-mail", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}` }
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center shrink-0">
                        <Icon size={18} strokeWidth={1.5} className="text-navy-700" />
                      </div>
                      <div>
                        <div className="font-sans text-xs font-semibold text-navy-400 uppercase tracking-wider mb-1">{label}</div>
                        {href ? (
                          <a href={href} className="font-sans text-sm text-navy-800 hover:text-steel-600 transition-colors">{value}</a>
                        ) : (
                          <p className="font-sans text-sm text-navy-800 leading-relaxed">{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-navy-900 rounded-2xl p-6">
                <h3 className="font-display text-lg font-semibold text-white mb-3">Atendimento Rápido</h3>
                <p className="font-sans text-sm text-navy-300 leading-relaxed mb-5">
                  Para demandas urgentes, o WhatsApp é o canal mais rápido. Respondemos com agilidade em horário comercial.
                </p>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-steel-500 hover:bg-steel-400 text-navy-900 font-sans font-bold text-sm px-6 py-3 rounded transition-colors w-full justify-center"
                >
                  <MessageCircle size={18} />
                  Falar no WhatsApp
                </a>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-surface-2 aspect-video bg-navy-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin size={28} strokeWidth={1.5} className="text-navy-400 mx-auto mb-2" />
                  <p className="font-sans text-xs text-navy-400">
                    Rua Luiz Junqueira de Carvalho, 168<br />Medicina, Pouso Alegre/MG
                  </p>
                  <a
                    href="https://maps.google.com/?q=Rua+Luiz+Junqueira+de+Carvalho+168+Pouso+Alegre+MG"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 font-sans text-xs text-navy-600 hover:text-steel-600 underline transition-colors"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl p-8 border border-surface-2">
                <h2 className="font-display text-2xl font-semibold text-navy-900 mb-8">Envie uma Mensagem</h2>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle2 size={52} strokeWidth={1.5} className="text-green-500 mx-auto mb-4" />
                    <h3 className="font-display text-2xl font-semibold text-navy-900 mb-3">Mensagem enviada!</h3>
                    <p className="font-sans text-sm text-muted">
                      Sua mensagem foi enviada com sucesso. Retornaremos em breve.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-sans text-xs font-semibold text-navy-600 mb-2 uppercase tracking-wider">Nome *</label>
                        <input
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Seu nome completo"
                          className="w-full rounded-lg border border-surface-2 px-4 py-3 font-sans text-sm text-navy-900 placeholder:text-muted focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400/30 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs font-semibold text-navy-600 mb-2 uppercase tracking-wider">E-mail *</label>
                        <input
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="seu@email.com"
                          className="w-full rounded-lg border border-surface-2 px-4 py-3 font-sans text-sm text-navy-900 placeholder:text-muted focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400/30 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block font-sans text-xs font-semibold text-navy-600 mb-2 uppercase tracking-wider">Telefone</label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(35) 99999-9999"
                          className="w-full rounded-lg border border-surface-2 px-4 py-3 font-sans text-sm text-navy-900 placeholder:text-muted focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400/30 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs font-semibold text-navy-600 mb-2 uppercase tracking-wider">Assunto *</label>
                        <select
                          name="subject"
                          required
                          value={form.subject}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-surface-2 px-4 py-3 font-sans text-sm text-navy-900 focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400/30 transition-colors bg-white"
                        >
                          <option value="">Selecione uma área</option>
                          <option>Direito Empresarial</option>
                          <option>Direito Trabalhista</option>
                          <option>Direito Tributário</option>
                          <option>Direito Hospitalar / Saúde</option>
                          <option>Família e Sucessões</option>
                          <option>Cobranças e Execuções</option>
                          <option>Direito Societário</option>
                          <option>Direito Público</option>
                          <option>Direito Previdenciário</option>
                          <option>Outro</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block font-sans text-xs font-semibold text-navy-600 mb-2 uppercase tracking-wider">Mensagem *</label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Descreva brevemente a sua demanda..."
                        className="w-full rounded-lg border border-surface-2 px-4 py-3 font-sans text-sm text-navy-900 placeholder:text-muted focus:outline-none focus:border-steel-400 focus:ring-1 focus:ring-steel-400/30 transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="w-full flex items-center justify-center gap-2 bg-navy-900 hover:bg-navy-800 disabled:opacity-60 text-white font-sans font-semibold text-base px-8 py-4 rounded transition-colors"
                    >
                      {status === "sending" ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          Enviar Mensagem
                        </>
                      )}
                    </button>
                    <p className="font-sans text-xs text-muted text-center">
                      Ao enviar, suas informações são encaminhadas para{" "}
                      <span className="text-navy-600">{SITE_CONFIG.email}</span>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
