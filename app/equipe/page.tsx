import type { Metadata } from "next";
import TeamList from "@/components/TeamList";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Conheça a equipe do escritório Adilson Ralf Advocacia: advogados especializados com formação de excelência e décadas de experiência.",
  alternates: { canonical: "https://adilsonralfadvocacia.com.br/equipe" }
};

export default function EquipePage() {
  return <TeamList />;
}
