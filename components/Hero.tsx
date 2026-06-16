"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";
import { SITE_CONFIG, STATS } from "@/lib/data";

function FloatingStatCard({
  value, prefix = "", suffix = "", label, delay
}: { value: number; prefix?: string; suffix?: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="glass rounded-xl px-5 py-4 text-center"
    >
      <div className="font-display text-3xl font-bold text-steel-300">
        {prefix}{value}{suffix}
      </div>
      <div className="font-sans text-xs text-navy-200 mt-1 leading-snug">{label}</div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll progress for the whole section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  // Video parallax: moves slower than scroll (sticky-like)
  const videoY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  // Video scale: subtle zoom-out as user scrolls
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  // Content fades and lifts up
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-15%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  // Overlay darkens as scroll progresses
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.82]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-950"
    >
      {/* ── VIDEO BACKGROUND with parallax ── */}
      <motion.div
        style={{ y: videoY, scale: videoScale }}
        className="absolute inset-0 z-0 origin-center"
      >
        <video
          className="video-cover"
          src="/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </motion.div>

      {/* ── OVERLAY (darkens on scroll) ── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 z-10 bg-navy-950"
      />

      {/* ── GRADIENT at bottom ── */}
      <div className="absolute inset-x-0 bottom-0 h-48 z-10 bg-gradient-to-t from-navy-950 to-transparent" />



      {/* ── CONTENT ── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-10 h-px bg-steel-400" />
              <span className="font-sans text-xs font-semibold tracking-[0.25em] text-steel-300 uppercase">
                Pouso Alegre · Minas Gerais
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-[1.05]"
            >
              Defendendo seus{" "}
              <span className="text-gradient-steel">direitos</span>{" "}
              com excelência, estratégia e resultados.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-8 font-sans text-lg text-navy-100 leading-relaxed max-w-xl drop-shadow-md"
            >
              Duas décadas oferecendo soluções jurídicas personalizadas para pessoas
              e empresas. Fundado pelo Dr. Adilson Ralf, com mais de 31 anos de experiência.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contato"
                className="inline-flex items-center justify-center gap-2 bg-steel-500 hover:bg-steel-400 text-white font-sans font-semibold text-base px-8 py-4 rounded transition-all duration-200 hover:shadow-xl hover:shadow-steel-500/30 group"
              >
                Agendar Consulta
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 border border-white/20 hover:border-steel-400/60 text-white hover:text-steel-300 font-sans font-medium text-base px-8 py-4 rounded transition-all duration-200 glass"
              >
                <MessageCircle size={18} />
                Falar pelo WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Stats cards */}
          <div className="lg:col-span-5 hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <FloatingStatCard
                  key={stat.label}
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  label={stat.label}
                  delay={0.7 + i * 0.1}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              className="mt-4 glass rounded-xl p-5 border border-steel-500/25"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2 h-2 rounded-full bg-steel-400 animate-pulse" />
                <span className="font-sans text-xs font-semibold tracking-wider text-steel-300 uppercase">
                  Atendimento Disponível
                </span>
              </div>
              <p className="font-sans text-sm text-navy-200 leading-relaxed">
                Resposta ágil para consultas. Atuação em todo território nacional.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-xs text-white/40 tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="text-steel-400 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}
