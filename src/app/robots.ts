import type { MetadataRoute } from "next";
import { resume } from "@/data/resume";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${resume.metadata.canonicalUrl}/sitemap.xml`,
  };
}
