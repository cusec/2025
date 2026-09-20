import type { MetadataRoute } from "next";

const BASE_URL = "https://2025.cusec.net";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2025-01-11");

  return [
    { url: BASE_URL, priority: 0.8 },
    { url: `${BASE_URL}/speakers`, priority: 0.5 },
    { url: `${BASE_URL}/schedule`, priority: 0.5 },
    { url: `${BASE_URL}/team`, priority: 0.5 },
    { url: `${BASE_URL}/code-of-conduct`, priority: 0.2 },
    { url: `${BASE_URL}/privacy-policy`, priority: 0.2 },
  ].map((entry) => ({ ...entry, lastModified, changeFrequency: "yearly" as const }));
}
