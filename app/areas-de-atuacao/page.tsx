import type { Metadata } from "next";
import AreasList from "@/components/AreasList";

export const metadata: Metadata = {
  title: "Áreas de Atuação",
  description:
    "Conheça todas as áreas de atuação do escritório Adilson Ralf Advocacia: Direito Empresarial, Tributário, Trabalhista, Hospitalar, Societário, Família e mais.",
  alternates: { canonical: "https://adilsonralfadvocacia.com.br/areas-de-atuacao" }
};

export default function AreasPage() {
  return <AreasList />;
}
