export type Subject = { slug: string; name: string; icon: string; color: string; description: string; topics: string[] };

export const subjects: Subject[] = [
  { slug: "mathematics", name: "Mathematics", icon: "∑", color: "#5b5ce2", description: "Build confidence with numbers, patterns, geometry and problem solving.", topics: ["Fractions", "Algebra basics", "Geometry", "Data and graphs"] },
  { slug: "science", name: "Science", icon: "✦", color: "#0f9f8f", description: "Understand the world through experiments, evidence and clear explanations.", topics: ["Force and motion", "Living things", "Matter", "Energy"] },
  { slug: "english", name: "English", icon: "Aa", color: "#e06b3c", description: "Strengthen reading, writing, grammar, vocabulary and communication.", topics: ["Reading skills", "Grammar", "Writing", "Vocabulary"] },
  { slug: "nepali", name: "Nepali", icon: "अ", color: "#d3486e", description: "Learn Nepali language, literature, grammar and expression.", topics: ["व्याकरण", "पठन बोध", "निबन्ध लेखन", "साहित्य"] },
  { slug: "social-studies", name: "Social Studies", icon: "◈", color: "#b07b21", description: "Explore society, history, geography, civics and Nepal’s communities.", topics: ["Nepal geography", "Our history", "Civic life", "Community"] },
  { slug: "computer-science", name: "Computer Science", icon: "</>", color: "#2675b9", description: "Develop digital confidence, logic, computing concepts and safe habits.", topics: ["Digital basics", "Algorithms", "Internet safety", "Coding"] },
  { slug: "optional-mathematics", name: "Optional Mathematics", icon: "π", color: "#8059bd", description: "Go deeper into algebra, trigonometry, statistics and advanced reasoning.", topics: ["Functions", "Trigonometry", "Probability", "Coordinate geometry"] }
];

export function getSubject(slug: string) { return subjects.find((subject) => subject.slug === slug); }
export const classes = Array.from({ length: 12 }, (_, index) => index + 1);
