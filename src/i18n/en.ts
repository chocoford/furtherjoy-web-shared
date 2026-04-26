/**
 * English UI strings.
 *
 * Namespaces:
 *  - brand.*   — positioning copy reused across pages.
 *  - home.*    — home page sections.
 *  - nav.*     — navigation labels (resolved into NavItem.label in nav.ts).
 */

export const en = {
  brand: {
    slogan: 'Toward more joyful moments.',
    tagline:
      'Playful, thoughtfully made toys for curious little humans — and the grown-ups who adore them.',
  },
  home: {
    hero: {
      cta: 'Browse all toys',
    },
  },
  nav: {
    shop: 'Shop',
    about: 'About',
    journal: 'Journal',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    refundPolicy: 'Refund Policy',
    termsOfService: 'Terms of Service',
    termsOfUse: 'Terms of Use',
  },
} as const;
