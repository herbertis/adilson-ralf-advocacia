"use client";
import { motion } from "framer-motion";
import {
  Briefcase, Users, Scale, HeartHandshake, Home,
  Building2, TrendingUp, Hospital, Landmark, Shield,
  MessageCircle
} from "lucide-react";
import { SERVICES_ALL, SITE_CONFIG } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Briefcase, Users, Scale, HeartHandshake, Home,
  Building2, TrendingUp, Hospital, Landmark, Shield
};

export default function AreasList() {
  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-steel-500/8 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-steel-500" />
              <span className="font-sans text-xs font-semibold tracking-[0.2em] text-steel-400 uppercase">Adilson Ralf Advocacia</span>
              <span className="w-8 h-px bg-steel-500" />
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Áreas de Atuação
            </h1>
            <p className="font-sans text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
              Atuação estratégica e especializada nas principais demandas jurídicas de pessoas e empresas em todo o Brasil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Areas grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6">
            {SERVICES_ALL.map((service, i) => {
              const Icon = ICON_MAP[service.icon] || Briefcase;
              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.6 }}
                  className="bg-white rounded-2xl p-8 border border-surface-2 hover:border-steel-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center shrink-0 group-hover:bg-navy-900 transition-colors duration-300">
                      <Icon size={22} strokeWidth={1.5} className="text-navy-700 group-hover:text-steel-400 transition-colors duration-300" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-semibold text-navy-900 mb-3 leading-snug">{service.title}</h2>
                      <p className="font-sans text-sm text-muted leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* CTA block */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-navy-900 rounded-2xl p-10 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-steel-500/5 blur-3xl pointer-events-none" />
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10">
              Não encontrou a sua área?
            </h3>
            <p className="font-sans text-navy-300 text-base mb-8 max-w-lg mx-auto leading-relaxed relative z-10">
              Entre em contato e avaliamos juntos o seu caso. O escritório atua em diversas frentes do direito e orienta qual o melhor caminho para a sua situação.
            </p>
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-steel-500 hover:bg-steel-400 text-white font-sans font-bold text-base px-8 py-4 rounded transition-all duration-300 hover:shadow-xl hover:shadow-steel-500/20 relative z-10"
            >
              <MessageCircle size={20} />
              Consultar pelo WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
