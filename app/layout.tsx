import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap"
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://adilsonralfadvocacia.com.br"),
  title: {
    default: "Adilson Ralf Advocacia | Pouso Alegre/MG",
    template: "%s | Adilson Ralf Advocacia"
  },
  description:
    "Escritório jurídico de alta complexidade em Pouso Alegre/MG. Duas décadas de excelência em Direito Empresarial, Tributário, Trabalhista, Hospitalar, Família e mais. Dr. Adilson Ralf — 31+ anos de experiência.",
  keywords: [
    "advogado Pouso Alegre",
    "escritório de advocacia Pouso Alegre",
    "Adilson Ralf Advocacia",
    "direito empresarial Pouso Alegre",
    "direito tributário MG",
    "direito trabalhista empresarial",
    "saúde suplementar advogado",
    "direito hospitalar"
  ],
  authors: [{ name: "Adilson Ralf Advocacia" }],
  creator: "Adilson Ralf Advocacia",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://adilsonralfadvocacia.com.br",
    siteName: "Adilson Ralf Advocacia",
    title: "Adilson Ralf Advocacia | Excelência Jurídica em Pouso Alegre/MG",
    description:
      "Duas décadas de soluções jurídicas de alta complexidade. Equipe especializada em Direito Empresarial, Tributário, Trabalhista, Hospitalar e mais.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Adilson Ralf Advocacia" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Adilson Ralf Advocacia | Pouso Alegre/MG",
    description: "Duas décadas de excelência jurídica. Dr. Adilson Ralf — 31+ anos de experiência."
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://adilsonralfadvocacia.com.br" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${montserrat.variable} scroll-smooth`}>
      <body className="bg-surface text-ink antialiased">
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
