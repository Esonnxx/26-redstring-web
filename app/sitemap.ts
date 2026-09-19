import type { MetadataRoute } from "next";
import { metadataBase } from "@/lib/seo";

const routes = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/information", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/organizing", changeFrequency: "monthly", priority: 0.8 },
  { path: "/sponsors", changeFrequency: "monthly", priority: 0.7 },
  { path: "/interview", changeFrequency: "weekly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: new URL(path, metadataBase).toString(),
    changeFrequency,
    priority,
  }));
}
