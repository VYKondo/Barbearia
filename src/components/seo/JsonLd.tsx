import { CONTACT_INFO, OPERATING_HOURS } from "@/lib/constants";

export default function JsonLd() {
  const businessData = {
    "@context": "https://schema.org",
    "@type": "BarberShop",
    "name": "Barbearia JK",
    "image": "https://barbeariaclassica-olive.vercel.app/painelsobre.png", // Update with real domain later
    "@id": "https://barbeariaclassica-olive.vercel.app",
    "url": "https://barbeariaclassica-olive.vercel.app",
    "telephone": CONTACT_INFO.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua da Tradição, 123",
      "addressLocality": "São Paulo",
      "addressRegion": "SP",
      "postalCode": "01000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -23.5505,
      "longitude": -46.6333
    },
    "openingHoursSpecification": OPERATING_HOURS.filter(h => h.hours.toLowerCase() !== "fechado").map(h => {
      const dayMap: Record<string, string> = {
        "Segunda-feira": "Monday",
        "Terça-feira": "Tuesday",
        "Quarta-feira": "Wednesday",
        "Quinta-feira": "Thursday",
        "Sexta-feira": "Friday",
        "Sábado": "Saturday",
        "Domingo": "Sunday"
      };
      const [opens, closes] = h.hours.split(" — ");
      return {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": dayMap[h.day],
        "opens": opens.trim(),
        "closes": closes.trim()
      };
    }),
    "priceRange": "$$",
    "sameAs": [
      CONTACT_INFO.socials.instagram,
      CONTACT_INFO.socials.facebook
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
    />
  );
}
