import type { MetadataRoute } from "next";

const BASE_URL = "https://triplem-consulting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/pricing", "/about", "/contact"];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
