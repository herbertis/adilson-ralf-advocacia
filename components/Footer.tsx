"use client";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Instagram, Linkedin, Facebook, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/areas-de-atuacao", label: "Áreas de Atuação" },
  { href: "/equipe", label: "Equipe" },
  { href: "/contato", label: "Contato" }
];

const AREAS_LINKS = [
  { href: "/areas-de-atuacao#empresarial", label: "Direito Empresarial" },
  { href: "/areas-de-atuacao#trabalhista", label: "Direito Trabalhista" },
  { href: "/areas-de-atuacao#tributario", label: "Direito Tributário" },
  { href: "/areas-de-atuacao#hospitalar-b2b", label: "Direito Hospitalar" },
  { href: "/areas-de-atuacao#familia", label: "Família e Sucessões" },
  { href: "/areas-de-atuacao#previdenciario", label: "Direito Previdenciário" }
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-navy-100">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6 relative w-[200px] h-[67px] select-none">
              <Image
                src="/logo.jpg"
                alt="Adilson Ralf Advocacia"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            <p className="font-sans text-sm text-navy-700 leading-relaxed mb-6">
              Duas décadas de excelência em soluções jurídicas para pessoas e empresas em todo o Brasil.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Instagram, href: SITE_CONFIG.social.instagram, label: "Instagram" },
                { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
                { icon: Facebook, href: SITE_CONFIG.social.facebook, label: "Facebook" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-navy-100 flex items-center justify-center text-navy-600 hover:text-white hover:bg-steel-500 hover:border-steel-500 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-navy-900 uppercase mb-5">Navegação</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm text-navy-700 hover:text-steel-500 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-navy-900 uppercase mb-5">Áreas de Atuação</h4>
            <ul className="space-y-3">
              {AREAS_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="font-sans text-sm text-navy-700 hover:text-steel-500 transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-navy-900 uppercase mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} strokeWidth={1.5} className="text-steel-500 mt-0.5 shrink-0" />
                <span className="font-sans text-sm text-navy-700 leading-snug">
                  Rua Luiz Junqueira de Carvalho, 168<br />
                  Medicina, Pouso Alegre/MG<br />
                  CEP 37.553-051
                </span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} strokeWidth={1.5} className="text-steel-500 mt-0.5 shrink-0" />
                <a href={`tel:${SITE_CONFIG.phone}`} className="font-sans text-sm text-navy-700 hover:text-steel-500 transition-colors">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-steel-500 mt-0.5 shrink-0" />
                <a href={`mailto:${SITE_CONFIG.email}`} className="font-sans text-sm text-navy-700 hover:text-steel-500 transition-colors break-all">
                  {SITE_CONFIG.email}
                </a>
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-navy-950 border-t border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-navy-300">
            © {new Date().getFullYear()} Adilson Ralf Advocacia. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-navy-300">
            OAB/MG
          </p>
        </div>
      </div>
    </footer>
  );
}
