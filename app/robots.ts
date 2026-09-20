import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://2025.cusec.net/sitemap.xml",
    host: "https://2025.cusec.net",
  };
}
