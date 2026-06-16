"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";

const TESTIMONIALS = [
  {
    name: "Carlos M.",
    role: "Empresário",
    text: "O escritório Adilson Ralf foi fundamental para estruturar a proteção jurídica da nossa empresa. A equipe demonstrou conhecimento excepcional e atenção genuína ao nosso caso.",
    rating: 5
  },
  {
    name: "Mariana F.",
    role: "Diretora Financeira",
    text: "Nossa empresa estava enfrentando uma autuação fiscal complexa. A estratégia tributária desenvolvida pelo escritório não apenas resolveu o problema, mas nos trouxe economia significativa.",
    rating: 5
  },
  {
    name: "Roberto A.",
    role: "Administrador Hospitalar",
    text: "A expertise na área de Saúde Suplementar é impressionante. Resolvemos situações urgentes com a ANS de forma rápida e eficiente, sempre com total transparência.",
    rating: 5
  },
  {
    name: "Ana P.",
    role: "Cliente Pessoa Física",
    text: "Passando por um processo de divórcio difícil, encontrei no escritório não apenas competência técnica, mas também o suporte humano que precisava para atravessar esse momento.",
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="py-24 bg-surface-2">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Depoimentos"
          title="O que nossos clientes dizem"
          centered
          className="mb-16"
        />

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl p-8 sm:p-12 border border-surface-2 shadow-sm text-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: TESTIMONIALS[current].rating }).map((_, i) => (
                  <Star key={i} size={18} fill="#3d6fa6" stroke="none" />
                ))}
              </div>
              {/* Quote */}
              <blockquote className="font-display text-xl sm:text-2xl text-navy-800 leading-relaxed mb-8 italic">
                &ldquo;{TESTIMONIALS[current].text}&rdquo;
              </blockquote>
              {/* Author */}
              <div>
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-3">
                  <span className="font-display text-lg font-bold text-navy-700">
                    {TESTIMONIALS[current].name.charAt(0)}
                  </span>
                </div>
                <div className="font-sans font-semibold text-navy-900 text-sm">{TESTIMONIALS[current].name}</div>
                <div className="font-sans text-xs text-muted mt-0.5">{TESTIMONIALS[current].role}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-500 hover:border-steel-400 hover:text-steel-600 transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-steel-500 w-6" : "bg-navy-200"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-navy-200 flex items-center justify-center text-navy-500 hover:border-steel-400 hover:text-steel-600 transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
