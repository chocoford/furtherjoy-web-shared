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
    aiPrinter: 'AIPrinter',
    app: 'FurtherJoy App',
    about: 'About',
    journal: 'Journal',
    contact: 'Contact',
    privacyPolicy: 'Privacy Policy',
    refundPolicy: 'Refund Policy',
    termsOfService: 'Terms of Service',
    termsOfUse: 'Terms of Use',
  },
  footer: {
    sections: {
      products: 'Shop and Products',
      company: 'Company',
      support: 'Support',
      legal: 'Legal',
    },
  },
} as const;
