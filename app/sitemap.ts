import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.monopolymarketing.co.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.monopolymarketing.co.in/thank-you",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.1,
    },
  ];
}
