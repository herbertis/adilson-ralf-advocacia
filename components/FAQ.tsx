"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { FAQ } from "@/lib/data";

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="border-b border-surface-2 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-display text-base sm:text-lg font-semibold text-navy-900 group-hover:text-navy-700 transition-colors leading-snug">
          {question}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-navy-200 flex items-center justify-center group-hover:border-steel-400 group-hover:text-steel-600 transition-colors text-navy-500">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 font-sans text-sm text-muted leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="py-24 bg-surface-2">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Dúvidas Comuns"
          title="Perguntas Frequentes"
          subtitle="Respostas diretas para as questões mais comuns dos nossos clientes."
          centered
          className="mb-12"
        />
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-surface-2">
          {FAQ.map((item, i) => (
            <FAQItem key={i} question={item.question} answer={item.answer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
