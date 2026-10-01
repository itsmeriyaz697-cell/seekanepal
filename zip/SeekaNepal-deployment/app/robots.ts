import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/dashboard/", "/login", "/signup", "/account/", "/settings/", "/practice/session/", "/tutor/session/", "/admin/", "/_next/"] }], sitemap: "https://seekanepal.vercel.app/sitemap.xml" }; }
