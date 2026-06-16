"use client";
import { motion } from "framer-motion";
import SectionTitle from "@/components/SectionTitle";
import { TIMELINE_STEPS } from "@/lib/data";

export default function Timeline() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Como trabalhamos"
          title="Processo de Atendimento"
          subtitle="Da primeira conversa ao desfecho final, cada etapa é conduzida com rigor e transparência."
          centered
          className="mb-16"
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-steel-500 via-steel-300 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {TIMELINE_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex gap-6 sm:gap-10"
              >
                {/* Number badge */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-navy-900 border-2 border-steel-500 flex items-center justify-center">
                    <span className="font-display text-sm font-bold text-steel-400">{step.number}</span>
                  </div>
                </div>
                {/* Content */}
                <div className="flex-1 pb-2">
                  <div className="bg-white rounded-xl p-6 border border-surface-2 hover:border-steel-200 hover:shadow-md transition-all duration-300">
                    <h3 className="font-display text-xl font-semibold text-navy-900 mb-2">{step.title}</h3>
                    <p className="font-sans text-sm text-muted leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
