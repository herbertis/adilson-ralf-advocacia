"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Briefcase, Users, Scale, HeartHandshake, Home,
  Building2, TrendingUp, Hospital, Landmark, Shield,
  ChevronLeft, ChevronRight
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { SERVICES_HOME } from "@/lib/data";

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Briefcase, Users, Scale, HeartHandshake, Home,
  Building2, TrendingUp, Hospital, Landmark, Shield
};

function ServiceCard({
  icon,
  title,
  summary,
  href
}: {
  icon: string;
  title: string;
  summary: string;
  href: string;
}) {
  const Icon = ICON_MAP[icon] || Briefcase;
  return (
    <Link
      href={href}
      className="group flex flex-col h-full bg-white rounded-2xl p-7 border border-surface-2 hover:border-steel-300 hover:shadow-xl hover:shadow-navy-900/8 transition-all duration-300 min-h-[260px]"
    >
      <div className="w-12 h-12 rounded-xl bg-navy-50 flex items-center justify-center mb-5 group-hover:bg-steel-500 transition-colors duration-300">
        <Icon size={22} strokeWidth={1.5} className="text-navy-700 group-hover:text-navy-900 transition-colors duration-300" />
      </div>
      <h3 className="font-display text-lg font-semibold text-navy-900 leading-snug mb-3 group-hover:text-navy-800">
        {title}
      </h3>
      <p className="font-sans text-sm text-muted leading-relaxed flex-1">
        {summary}
      </p>
      <div className="mt-5 flex items-center gap-2 font-sans text-xs font-semibold text-navy-600 group-hover:text-steel-600 transition-colors">
        <span>Saiba mais</span>
        <span className="w-0 group-hover:w-6 h-px bg-steel-500 transition-all duration-300" />
      </div>
    </Link>
  );
}

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, SERVICES_HOME.length - visibleCards);

  // Auto-scroll loop
  useEffect(() => {
    if (isHovered || maxIndex === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, [maxIndex, isHovered]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleDragEnd = (event: any, info: any) => {
    const swipeThreshold = 50;
    const offset = info.offset.x;
    if (offset < -swipeThreshold) {
      nextSlide();
    } else if (offset > swipeThreshold) {
      prevSlide();
    }
  };

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls & Title Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <SectionTitle
            eyebrow="Áreas de Atuação"
            title="Soluções jurídicas de <em>alta complexidade</em>"
            subtitle="Atuamos com rigor técnico e visão estratégica nas principais demandas de pessoas e empresas."
            className="flex-1"
          />
          
          <div className="flex gap-3 self-end sm:mb-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-navy-200/60 flex items-center justify-center text-navy-700 hover:bg-navy-900 hover:text-steel-400 hover:border-navy-900 transition-all duration-300 shadow-sm"
              aria-label="Área anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-navy-200/60 flex items-center justify-center text-navy-700 hover:bg-navy-900 hover:text-steel-400 hover:border-navy-900 transition-all duration-300 shadow-sm"
              aria-label="Próxima área"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden -mx-4 px-4 py-4">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={handleDragEnd}
              animate={{ x: `-${currentIndex * (100 / SERVICES_HOME.length)}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.8 }}
              className="flex"
              style={{ width: `${(SERVICES_HOME.length / visibleCards) * 100}%` }}
            >
              {SERVICES_HOME.map((s) => (
                <div 
                  key={s.id}
                  className="px-4 shrink-0"
                  style={{ width: `${100 / SERVICES_HOME.length}%` }}
                >
                  <ServiceCard {...s} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <div className="mt-8 flex justify-center items-center gap-4">
          <div className="h-[2px] w-48 bg-navy-100/50 rounded overflow-hidden relative">
            <motion.div 
              className="absolute top-0 bottom-0 left-0 bg-steel-500 rounded"
              animate={{ width: `${((currentIndex + 1) / (SERVICES_HOME.length - visibleCards + 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="font-sans text-xs text-navy-400 font-semibold tracking-wider">
            {String(currentIndex + 1).padStart(2, '0')} / {String(SERVICES_HOME.length - visibleCards + 1).padStart(2, '0')}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/areas-de-atuacao"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-sans font-semibold text-sm px-8 py-4 rounded transition-colors duration-200"
          >
            Ver todas as Áreas de Atuação
            <span className="text-steel-400">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
