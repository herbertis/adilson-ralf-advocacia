"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { ABOUT_TEXT } from "@/lib/data";

const HIGHLIGHTS = [
  "20 anos de trajetória institucional",
  "Dr. Adilson Ralf: + 31 anos de experiência",
  "Equipe multidisciplinar especializada",
  "Atuação em todo o território nacional"
];

export default function About() {
  return (
    <section className="py-24 bg-surface-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: visual */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-navy-900">
              <Image
                src="/team/adilson-ralf.jpg"
                alt="Dr. Adilson Ralf"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-top"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              {/* Bottom badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass-dark rounded-xl p-4">
                  <div className="font-display text-2xl font-bold text-white">20 Anos</div>
                  <div className="font-sans text-xs text-navy-300 mt-0.5">de Excelência Jurídica</div>
                </div>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 rounded-xl border border-steel-500/20 -z-10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-lg bg-steel-500/10 -z-10" />
          </motion.div>

          {/* Right: text */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <SectionTitle
              eyebrow="Sobre o Escritório"
              title={ABOUT_TEXT.heading}
              className="mb-8"
            />

            <div className="space-y-5">
              {ABOUT_TEXT.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-sans text-base text-muted leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: p }}
                />
              ))}
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {HIGHLIGHTS.map((h) => (
                <div key={h} className="flex items-start gap-3">
                  <CheckCircle2 size={18} strokeWidth={1.5} className="text-steel-500 mt-0.5 shrink-0" />
                  <span className="font-sans text-sm text-navy-800 leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
