import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://adilsonralfadvocacia.com.br";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/areas-de-atuacao`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/equipe`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/contato`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 }
  ];
}
