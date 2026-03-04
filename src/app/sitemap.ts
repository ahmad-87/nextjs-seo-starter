import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://example.com";

  return [
    {
      lastModified: new Date(),
      url: baseUrl,
    },
  ];
}