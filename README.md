About the Organization
LuminAI is a student-founded 501(c)(3) nonprofit dedicated to expanding access to artificial intelligence (AI) education for students in grades 6–12. Since launching in 2023, LuminAI has delivered accessible, hands-on AI programming to 15,000+ students across 6 countries, including regions in South Asia, Eastern Europe, and rural areas of the United States. With an emphasis on ethical use, technical skill development, and real-world relevance, LuminAI equips students with the tools to understand and shape the future of technology.

## SEO

The site is optimized for search with:

- **Per-page meta**: Unique titles and descriptions on every route (via `react-helmet-async` and `src/components/SEO.jsx`).
- **Canonical URLs**: Set from `VITE_SITE_URL` (see `.env.example`). Use your live domain.
- **Open Graph & Twitter cards**: For better sharing and rich results.
- **Structured data**: JSON-LD for `EducationalOrganization` and `WebSite` in `index.html`.
- **robots.txt** and **sitemap.xml** in `public/` (point to your live domain).

If your live URL is not `https://www.luminlearning.org`, set `VITE_SITE_URL` in `.env` and update the full URL in `public/robots.txt`, `public/sitemap.xml`, and `index.html` (canonical, og:url, og:image, twitter:image, and the JSON-LD `url`/`logo`/image URLs).
