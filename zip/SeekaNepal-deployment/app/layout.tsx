import type { Metadata } from "next";
import "./globals.css";

const baseUrl = "https://seekanepal.vercel.app";
export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: { default: "SeekaNepal — Your AI Teacher. Your Learning Journey.", template: "%s | SeekaNepal" },
  description: "Learn, ask questions, practice and improve with SeekaNepal, a Nepal-focused AI learning platform for students from Class 1 to 12.",
  authors: [{ name: "Riyaz Chalise", url: `${baseUrl}/about` }],
  creator: "Riyaz Chalise",
  keywords: ["AI tutor Nepal", "online learning Nepal", "Nepal education", "Class 1 to 12 learning", "SeekaNepal"],
  alternates: { canonical: "/", languages: { en: "/", ne: "/ne/", "x-default": "/" } },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_NP", siteName: "SeekaNepal", title: "SeekaNepal — Your AI Teacher. Your Learning Journey.", description: "A Nepal-focused AI learning platform where students can learn, ask questions, practice and track their progress.", url: baseUrl, images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "SeekaNepal — Learn. Ask. Understand." }] },
  twitter: { card: "summary_large_image", title: "SeekaNepal — Your AI Teacher. Your Learning Journey.", description: "Learn, ask, practice and improve with a personalized AI tutor for Nepal’s students.", images: ["/og-image.svg"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" }, manifest: "/site.webmanifest"
};

const structuredData = { "@context": "https://schema.org", "@graph": [
  { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "SeekaNepal", alternateName: "Seeka Nepal", url: baseUrl, logo: `${baseUrl}/og-image.svg`, founder: { "@id": `${baseUrl}/#riyaz-chalise` }, description: "A Nepal-focused AI learning platform for students from Class 1 to 12." },
  { "@type": "Person", "@id": `${baseUrl}/#riyaz-chalise`, name: "Riyaz Chalise", jobTitle: "Founder and Builder of SeekaNepal", worksFor: { "@id": `${baseUrl}/#organization` } },
  { "@type": "WebSite", "@id": `${baseUrl}/#website`, url: baseUrl, name: "SeekaNepal", description: "Learn. Ask. Understand.", publisher: { "@id": `${baseUrl}/#organization` }, inLanguage: ["en", "ne"] }
] };

function Header() { return <><div className="topbar"><div className="wrap"><span>Built for Nepal’s learners</span><span>English · नेपाली</span></div></div><header className="header"><nav className="wrap nav"><a className="logo" href="/"><span className="logo-mark">S</span><span>SeekaNepal<small>Learn. Ask. Understand.</small></span></a><div className="navlinks"><a href="/learn">Learn</a><a href="/practice">Practice</a><a href="/ai-tutor">AI Tutor</a><a href="/progress">Progress</a></div><a className="button" href="/learn">Start learning</a></nav></header></>; }
function Footer() { return <footer className="footer"><div className="wrap footer-grid"><div><h2>SeekaNepal</h2><p>Learn, ask, practice and understand with a supportive AI learning journey.</p><p>Founded and built by <strong>Riyaz Chalise</strong>.</p></div><div><h3>Explore</h3><a href="/learn">Classes 1–12</a><a href="/practice">Practice</a><a href="/ai-tutor">AI Tutor</a></div><div><h3>About</h3><a href="/about">Our purpose</a><a href="/faq">FAQ</a><a href="/ne/">नेपाली</a></div></div><div className="wrap footer-bottom">© 2026 SeekaNepal. Demo learning content is clearly labeled; curriculum alignment should be verified before making official claims.</div></footer>; }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /><Header />{children}<Footer /></body></html>; }
