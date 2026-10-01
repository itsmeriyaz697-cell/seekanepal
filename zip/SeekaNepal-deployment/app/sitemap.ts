import type { MetadataRoute } from "next";
import { classes, subjects } from "../class-data/subjects";
const baseUrl = "https://seekanepal.vercel.app";
export default function sitemap(): MetadataRoute.Sitemap { const routes = ["", "/learn", "/practice", "/ai-tutor", "/progress", "/about", "/faq", "/ne/", ...classes.flatMap((c) => [`/class-${c}`, ...subjects.map((s) => `/class-${c}/${s.slug}`)]), "/class-7/science/force-and-motion", "/class-7/mathematics/fractions"]; return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : 0.7 })); }
