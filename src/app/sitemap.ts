import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://barbeariaclassica-olive.vercel.app"; // Removida a barra final para evitar duplicidade

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
