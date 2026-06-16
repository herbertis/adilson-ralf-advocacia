"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import SectionTitle from "@/components/SectionTitle";
import { TEAM } from "@/lib/data";

function TeamMemberCard({ member }: { member: typeof TEAM[0] }) {
  const initials = member.name
    .replace(/^(Dr\.|Dra\.)\s/, "")
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <div className="bg-white rounded-2xl border border-surface-2 overflow-hidden hover:shadow-lg hover:border-steel-200 transition-all duration-300 group h-full flex flex-col">
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950 shrink-0">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-steel-500/20 border border-steel-500/30 flex items-center justify-center">
              <span className="font-display text-xl font-bold text-steel-400">{initials}</span>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-display text-base font-bold text-navy-900 leading-snug mb-1 group-hover:text-steel-600 transition-colors">
            {member.name}
          </h3>
          <p className="font-sans text-xs font-semibold text-steel-500 tracking-wider uppercase mb-4">
            {member.role}
          </p>
        </div>
        
        {member.education && member.education.length > 0 && (
          <div className="border-t border-navy-50/80 pt-4 mt-auto">
            <div className="flex items-center gap-1.5 mb-1.5 text-navy-400">
              <GraduationCap size={13} strokeWidth={1.5} />
              <span className="font-sans text-[10px] font-bold tracking-wider uppercase">Destaque</span>
            </div>
            <p className="font-sans text-xs text-muted leading-relaxed line-clamp-1">
              {member.education[0]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function TeamSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else if (window.innerWidth < 1280) {
        setVisibleCards(3);
      } else {
        setVisibleCards(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, TEAM.length - visibleCards);

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
    <section className="py-24 bg-white overflow-hidden border-t border-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls & Title Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12">
          <SectionTitle
            eyebrow="Corpo Jurídico"
            title="Nossos <em>Especialistas</em>"
            subtitle="Advogados altamente qualificados comprometidos com a excelência técnica e ética profissional."
            className="flex-1"
          />
          
          <div className="flex gap-3 self-end sm:mb-2">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-navy-200/60 flex items-center justify-center text-navy-700 hover:bg-navy-900 hover:text-steel-400 hover:border-navy-900 transition-all duration-300 shadow-sm"
              aria-label="Membro anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-navy-200/60 flex items-center justify-center text-navy-700 hover:bg-navy-900 hover:text-steel-400 hover:border-navy-900 transition-all duration-300 shadow-sm"
              aria-label="Próximo membro"
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
              animate={{ x: `-${currentIndex * (100 / TEAM.length)}%` }}
              transition={{ type: "spring", stiffness: 100, damping: 20, mass: 0.8 }}
              className="flex"
              style={{ width: `${(TEAM.length / visibleCards) * 100}%` }}
            >
              {TEAM.map((member) => (
                <div 
                  key={member.name}
                  className="px-4 shrink-0 animate-fade-up"
                  style={{ width: `${100 / TEAM.length}%` }}
                >
                  <TeamMemberCard member={member} />
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
              animate={{ width: `${((currentIndex + 1) / (TEAM.length - visibleCards + 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="font-sans text-xs text-navy-400 font-semibold tracking-wider">
            {String(currentIndex + 1).padStart(2, '0')} / {String(TEAM.length - visibleCards + 1).padStart(2, '0')}
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
            href="/equipe"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-sans font-semibold text-sm px-8 py-4 rounded transition-colors duration-200"
          >
            Conhecer toda a equipe
            <span className="text-steel-400">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
