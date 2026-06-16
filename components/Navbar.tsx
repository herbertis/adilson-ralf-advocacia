"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { SITE_CONFIG } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/equipe", label: "Equipe" },
  { href: "/contato", label: "Contato" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled && !open
            ? "bg-white shadow-md border-b border-navy-100"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col leading-none group relative" onClick={() => setOpen(false)}>
              {scrolled && !open ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.15, duration: 0.2 }}
                  className="relative w-[180px] h-[55px] select-none"
                >
                  <Image
                    src="/logo.jpg"
                    alt="Adilson Ralf Advocacia"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col"
                >
                  <span className="font-display text-xl font-bold text-white tracking-wide group-hover:text-steel-400 transition-colors">
                    ADILSON RALF
                  </span>
                  <span className="font-sans text-[10px] font-medium tracking-[0.25em] text-steel-500 uppercase mt-0.5">
                    Advocacia
                  </span>
                </motion.div>
              )}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-sans text-sm font-medium transition-colors relative group",
                    scrolled && !open
                      ? "text-navy-900 hover:text-steel-600"
                      : "text-navy-100 hover:text-steel-400"
                  )}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-steel-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className={cn(
                  "flex items-center gap-2 font-sans text-sm transition-colors",
                  scrolled && !open
                    ? "text-navy-700 hover:text-steel-600"
                    : "text-navy-200 hover:text-steel-400"
                )}
              >
                <Phone size={14} />
                {SITE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "font-sans font-semibold text-sm px-5 py-2.5 rounded transition-all duration-200",
                  scrolled && !open
                    ? "bg-navy-900 hover:bg-navy-800 text-white hover:shadow-md"
                    : "bg-steel-500 hover:bg-steel-400 text-navy-900 hover:shadow-lg hover:shadow-steel-500/20"
                )}
              >
                Agendar Consulta
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className={cn(
                "lg:hidden p-2 transition-colors",
                scrolled && !open ? "text-navy-900" : "text-white"
              )}
              aria-label="Menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-navy-950 lg:hidden flex flex-col"
          >
            <div className="h-20" />
            <nav className="flex flex-col items-center justify-center flex-1 gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl font-semibold text-white hover:text-steel-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-8 flex flex-col gap-4 items-center">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="font-sans text-navy-200 text-sm"
                >
                  {SITE_CONFIG.phone}
                </a>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="bg-steel-500 text-navy-900 font-sans font-semibold text-base px-8 py-3 rounded"
                >
                  Agendar Consulta
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
