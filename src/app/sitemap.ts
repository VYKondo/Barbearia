import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://barbeariaclassica-olive.vercel.app/"; // Alterar para o domínio real quando disponível

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Se houver mais páginas futuramente, adicione-as aqui
  ];
}
