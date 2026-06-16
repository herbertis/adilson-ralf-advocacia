import type { Metadata } from "next";
import ContatoView from "@/components/ContatoView";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o escritório Adilson Ralf Advocacia. Rua Luiz Junqueira de Carvalho, 168, Pouso Alegre/MG. Tel: (35) 3425-2020.",
  alternates: { canonical: "https://adilsonralfadvocacia.com.br/contato" }
};

export default function ContatoPage() {
  return <ContatoView />;
}
