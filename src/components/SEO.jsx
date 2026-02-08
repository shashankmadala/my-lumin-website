import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_URL } from '../config';

const defaultImage = `${SITE_URL}/images/home.png`;

/**
 * Per-page SEO: title, description, canonical, Open Graph, Twitter.
 * Use on every page for better indexing and rich snippets.
 */
export default function SEO({
  title,
  description,
  canonicalPath = '',
  image = defaultImage,
  noindex = false,
  type = 'website',
}) {
  const canonical = canonicalPath ? `${SITE_URL.replace(/\/$/, '')}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}` : SITE_URL;
  const fullTitle = title ? `${title} | Lumin AI` : 'Lumin AI – AI Education Made Easy for Students';
  const fullDescription = description || 'Free AI and machine learning education for grades 6–12. 15,000+ students worldwide. Learn AI with Lumin AI.';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image.startsWith('http') ? image : `${SITE_URL}${image.startsWith('/') ? '' : '/'}${image}`} />
    </Helmet>
  );
}
