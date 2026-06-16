"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "@/components/AnimatedCounter";
import { STATS } from "@/lib/data";

export default function StatsBar() {
  return (
    <section className="py-16 bg-navy-900 border-y border-navy-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-navy-700/50">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center px-6 py-4"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold text-steel-400 mb-1">
                <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="font-sans text-sm font-semibold text-white mb-1">{stat.label}</div>
              <div className="font-sans text-xs text-navy-400">{stat.description}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
