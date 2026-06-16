"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
  className
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(centered && "text-center", className)}
    >
      {eyebrow && (
        <div className={cn("flex items-center gap-3 mb-4", centered && "justify-center")}>
          <span className="w-8 h-px bg-steel-500 inline-block" />
          <span
            className={cn(
              "font-sans text-xs font-semibold tracking-[0.2em] uppercase",
              light ? "text-steel-400" : "text-steel-600"
            )}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={cn(
          "font-display font-semibold leading-tight",
          "text-3xl sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-navy-900"
        )}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-navy-200" : "text-muted"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
