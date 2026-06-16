"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { TEAM } from "@/lib/data";

function TeamCard({ member, index }: { member: typeof TEAM[0]; index: number }) {
  const initials = member.name
    .replace(/^(Dr\.|Dra\.)\s/, "")
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.6 }}
      className="bg-white rounded-2xl border border-surface-2 overflow-hidden hover:shadow-lg hover:border-steel-200 transition-all duration-300 group"
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-navy-800 to-navy-950">
        {member.photo ? (
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover object-top"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-steel-500/20 border-2 border-steel-500/40 flex items-center justify-center group-hover:border-steel-500/70 transition-colors">
              <span className="font-display text-2xl font-bold text-steel-400">{initials}</span>
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-display text-lg font-bold text-navy-900 leading-snug mb-1">{member.name}</h3>
        <p className="font-sans text-sm font-medium text-steel-600 italic mb-5">{member.role}</p>

        <div>
          <div className="flex items-center gap-2 mb-3">
            <GraduationCap size={14} strokeWidth={1.5} className="text-navy-400" />
            <span className="font-sans text-xs font-semibold tracking-wider text-navy-400 uppercase">Formação</span>
          </div>
          <ul className="space-y-2">
            {member.education.map((edu, i) => (
              <li key={i} className="flex gap-2">
                <span className="w-1 h-1 rounded-full bg-steel-500 mt-2 shrink-0" />
                <span className="font-sans text-xs text-muted leading-relaxed">{edu}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function TeamList() {
  return (
    <>
      {/* Page header */}
      <section className="pt-40 pb-20 bg-navy-900 relative overflow-hidden">

        <div className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full bg-steel-500/6 blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-px bg-steel-500" />
              <span className="font-sans text-xs font-semibold tracking-[0.2em] text-steel-400 uppercase">Nossa Equipe</span>
              <span className="w-8 h-px bg-steel-500" />
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Profissionais de Excelência
            </h1>
            <p className="font-sans text-lg text-navy-300 max-w-2xl mx-auto leading-relaxed">
              Uma equipe multidisciplinar com formação sólida e atualização constante para oferecer a melhor estratégia jurídica ao seu caso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Partners Group */}
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">Sócios</h2>
            <div className="w-12 h-0.5 bg-steel-500 mx-auto mt-3" />
          </div>
          
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mb-20">
            {TEAM.filter(m => m.role.toLowerCase().includes("sócio")).map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>

          {/* Associates Group */}
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900">Advogados Associados e Equipe</h2>
            <div className="w-12 h-0.5 bg-steel-500 mx-auto mt-3" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {TEAM.filter(m => !m.role.toLowerCase().includes("sócio")).map((member, i) => (
              <TeamCard key={member.name} member={member} index={i + 2} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
