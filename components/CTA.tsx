"use client";
import { motion } from "framer-motion";
import { MessageCircle, CalendarCheck } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/data";

export default function CTA() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-steel-500/8 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(13,27,50,0.8))]" />
      </div>
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel-500 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block font-sans text-xs font-semibold tracking-[0.25em] text-steel-400 uppercase mb-6">
            Dê o primeiro passo
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
            Seu caso merece a atenção de{" "}
            <span className="text-gradient-steel">especialistas</span>.
          </h2>
          <p className="font-sans text-lg text-navy-300 leading-relaxed mb-10 max-w-2xl mx-auto">
            Entre em contato agora e descubra como o escritório Adilson Ralf Advocacia pode
            proteger seus direitos e construir a melhor estratégia jurídica para o seu caso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-steel-500 hover:bg-steel-400 text-navy-900 font-sans font-bold text-base px-8 py-4 rounded transition-all duration-200 hover:shadow-xl hover:shadow-steel-500/30 group"
            >
              <MessageCircle size={20} />
              Falar pelo WhatsApp
            </a>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 border border-navy-600 hover:border-steel-500/40 text-white hover:text-steel-400 font-sans font-semibold text-base px-8 py-4 rounded transition-all duration-200 glass"
            >
              <CalendarCheck size={20} />
              Agendar Consulta
            </Link>
          </div>

          <p className="mt-8 font-sans text-xs text-navy-500">
            {SITE_CONFIG.address.full} · {SITE_CONFIG.phone}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
