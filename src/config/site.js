/**
 * SITE CONFIG — SINGLE SOURCE OF TRUTH
 * =====================================
 * This is the ONLY file you edit when cloning this foundation for a new site.
 * Every SEO tag, schema block, header, and footer pulls from here.
 *
 * Per-project setup checklist:
 *   1. Fill in every field below
 *   2. Replace the PLACEHOLDER assets: /public/favicon.svg, /public/logo.svg
 *      (min 112x112), /public/og-default.jpg (1200x630, <300KB)
 *   3. Update /public/llms.txt
 *   4. Run `npm test` — must pass before first deploy
 */

export const SITE = {
  // ── Identity ──────────────────────────────────────────────
  name: 'Site Name',                       // Organization / brand name
  legalName: 'Legal Entity Name, Inc.',    // For Organization schema
  url: 'https://www.example.org',          // Production URL, no trailing slash
  titleTemplate: '%s | Site Name',         // %s = page title
  description:
    'Default meta description, 145–160 characters, primary keyword within the first 50 characters. Written for humans first, answer-shaped for AEO.',
  locale: 'en_US',
  language: 'en',

  // ── Organization schema (schema.org/Organization) ─────────
  // Set orgType to 'Organization', 'NGO', 'LocalBusiness', 'Corporation', etc.
  orgType: 'Organization',
  logo: '/logo.svg',                       // Absolute path from site root, min 112x112
  foundingDate: '2024',
  email: 'hello@example.org',
  telephone: '+1-904-555-0100',
  address: {
    streetAddress: '123 Main St',
    addressLocality: 'Jacksonville',
    addressRegion: 'FL',
    postalCode: '32202',
    addressCountry: 'US',
  },
  // Social profiles — used for schema sameAs AND footer links
  socials: [
    // { label: 'LinkedIn', url: 'https://www.linkedin.com/company/example' },
    // { label: 'Instagram', url: 'https://www.instagram.com/example' },
  ],

  // ── Default social sharing image ───────────────────────────
  ogImage: '/og-default.jpg',              // 1200x630, <300KB

  // ── Navigation (drives Header + Footer) ────────────────────
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about/' },
    { label: 'FAQ', href: '/faq/' },
  ],
  footerNav: [
    { label: 'Accessibility Statement', href: '/accessibility/' },
    { label: 'Privacy Policy', href: '/privacy/' },
    { label: 'Contact', href: '/contact/' },
  ],

  // ── Phase 2 integrations (see INTEGRATIONS.md) ─────────────
  // Only PUBLIC identifiers belong here. Secrets go in env vars.
  integrations: {
    ga4Id: '',              // e.g. 'G-XXXXXXXXXX' — empty disables GA4
    hubspotPortalId: '',    // e.g. '244603402' — empty disables HubSpot
    // Stripe publishable key only needed for Pattern C (Checkout Sessions):
    stripePublishableKey: '',
  },
};
