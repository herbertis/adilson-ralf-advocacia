"use client";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Adilson Ralf Advocacia",
    url: "https://adilsonralfadvocacia.com.br",
    logo: "https://adilsonralfadvocacia.com.br/logo.png",
    telephone: "+55-35-3425-2020",
    email: "adilsonralf@adilsonralfadvocacia.com.br",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Luiz Junqueira de Carvalho, 168",
      addressLocality: "Pouso Alegre",
      addressRegion: "MG",
      postalCode: "37553-051",
      addressCountry: "BR"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -22.2295,
      longitude: -45.9295
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00"
    },
    description:
      "Escritório jurídico de alta complexidade em Pouso Alegre/MG. Duas décadas de excelência em Direito Empresarial, Tributário, Trabalhista, Hospitalar e mais.",
    founder: { "@type": "Person", name: "Dr. Adilson Ralf Santos" },
    foundingDate: "2006",
    areaServed: { "@type": "Country", name: "Brasil" },
    priceRange: "Consulte"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
