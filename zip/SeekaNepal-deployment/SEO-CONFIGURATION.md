# SeekaNepal SEO configuration

This bundle assumes the production origin is `https://seekanepal.vercel.app`. Replace that origin everywhere if the final Vercel deployment URL is different.

## Files

- `public/seo-head.html` — reusable homepage metadata and JSON-LD.
- `public/robots.txt` — crawler access rules.
- `public/sitemap.xml` — public indexable routes.
- `public/og-image.svg` — social preview image placeholder to replace with the final brand artwork.

## Per-route metadata

Do not reuse one title and description for every page. Use route-specific metadata:

| Route | Title template | Description focus |
|---|---|---|
| `/` | `SeekaNepal — Your AI Teacher. Your Learning Journey.` | AI learning platform for Nepal-focused school education |
| `/class-7` | `Class 7 Learning Resources and AI Tutor | SeekaNepal` | Class 7 subjects, lessons, practice, and tutor support |
| `/class-7/mathematics` | `Class 7 Mathematics Help and Practice | SeekaNepal` | Mathematics topics and guided practice |
| `/class-7/science/force-and-motion` | `Force and Motion for Class 7 | SeekaNepal` | A genuinely useful lesson, examples, and practice |
| `/ai-tutor` | `AI Tutor for Students | SeekaNepal` | Step-by-step explanations, hints, examples, and follow-up questions |
| `/practice` | `Practice Questions and Quizzes | SeekaNepal` | Multiple choice, true/false, short-answer, and numerical practice |
| `/about` | `About SeekaNepal and Riyaz Chalise` | Founder, purpose, and product direction |

## Implementation rules

1. Render meaningful page content in the initial HTML. Do not expose an empty client-only shell to crawlers.
2. Use exactly one descriptive `<h1>` per public page, followed by logical `<h2>` sections.
3. Add internal links between class, subject, topic, tutor, practice, and FAQ pages.
4. Only add a URL to the sitemap after its content is genuinely useful and publicly accessible.
5. Keep dashboards, tutor sessions, accounts, API routes, and personalized progress pages out of the sitemap.
6. Return a real `404` for unknown classes, subjects, and topics; do not return a successful page with “not found” text.
7. Use `noindex,follow` for search-result pages and private app views when appropriate.
8. Add `FAQPage` JSON-LD only when the same questions and answers are visible on the page.
9. Add `Course` or `LearningResource` JSON-LD only when the referenced lesson content actually exists.
10. Submit the sitemap in Google Search Console and Bing Webmaster Tools after the production domain is verified.

## Important limitation

SEO improves discoverability but cannot guarantee a top search position. Rankings depend on original educational content, technical performance, indexing, links, trust, and ongoing quality. Do not claim official Nepal curriculum alignment until the relevant curriculum data has been verified and implemented.
