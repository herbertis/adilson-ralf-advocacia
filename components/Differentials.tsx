"use client";
import { motion } from "framer-motion";
import {
  UserCheck, Target, GraduationCap, Eye, Zap, Trophy
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { DIFFERENTIALS } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  UserCheck, Target, GraduationCap, Eye, Zap, Trophy
};

export default function Differentials() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden">

      <div className="absolute top-0 left-1/3 w-64 h-64 rounded-full bg-steel-500/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Por que nos escolher"
          title="Diferenciais que constroem <em>confiança</em>"
          subtitle="Cada ponto de contato com nosso escritório é pensado para oferecer segurança, clareza e resultados."
          centered
          light
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((d, i) => {
            const Icon = ICON_MAP[d.icon] || Trophy;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.6 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-7 border border-white/5 hover:border-steel-500/25 transition-colors duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-steel-500/15 flex items-center justify-center mb-5">
                  <Icon size={20} strokeWidth={1.5} className="text-steel-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-3">{d.title}</h3>
                <p className="font-sans text-sm text-navy-300 leading-relaxed">{d.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
