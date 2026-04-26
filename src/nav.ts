/**
 * Navigation + cross-domain URL config.
 *
 * Two perspectives — consumers pick the matching pair:
 *  - PORTAL_*  — used by the marketing site at furtherjoy.com (Astro).
 *  - SHOP_*    — used by the Hydrogen storefront at shop.furtherjoy.com.
 *
 * `external` = true means the link crosses subdomains and must use a plain
 * `<a>` (not React Router / Astro link prefetching).
 */

import {STRINGS} from './i18n/index.js';

export const PORTAL_URL = 'https://furtherjoy.com';
export const SHOP_URL = 'https://shop.furtherjoy.com';

export type NavItem = {
  label: string;
  href: string;
  external: boolean;
};

// ── Portal perspective (furtherjoy.com) ────────────────────────────────────

export const PORTAL_HEADER_NAV: NavItem[] = [
  {label: STRINGS.nav.shop, href: SHOP_URL, external: true},
  {label: STRINGS.nav.about, href: '/about', external: false},
  {label: STRINGS.nav.journal, href: '/journal', external: false},
];

export const PORTAL_FOOTER_NAV: NavItem[] = [
  {label: STRINGS.nav.about, href: '/about', external: false},
  {label: STRINGS.nav.journal, href: '/journal', external: false},
  {label: STRINGS.nav.contact, href: '/contact', external: false},
  // Portal carries its own marketing-site Privacy + Terms — distinct from the
  // shop's purchase-scoped policies (shipping, refunds, payment data) which
  // are managed in Shopify Admin and live on shop.furtherjoy.com/policies/*.
  {label: STRINGS.nav.privacyPolicy, href: '/privacy', external: false},
  {label: STRINGS.nav.termsOfUse, href: '/terms', external: false},
];

// ── Shop perspective (shop.furtherjoy.com) ─────────────────────────────────

export const SHOP_HEADER_NAV: NavItem[] = [
  {label: STRINGS.nav.shop, href: '/', external: false},
  {label: STRINGS.nav.about, href: `${PORTAL_URL}/about`, external: true},
  {label: STRINGS.nav.journal, href: `${PORTAL_URL}/journal`, external: true},
];

export const SHOP_FOOTER_NAV: NavItem[] = [
  {label: STRINGS.nav.about, href: `${PORTAL_URL}/about`, external: true},
  {label: STRINGS.nav.journal, href: `${PORTAL_URL}/journal`, external: true},
  {label: STRINGS.nav.contact, href: `${PORTAL_URL}/contact`, external: true},
  {
    label: STRINGS.nav.privacyPolicy,
    href: '/policies/privacy-policy',
    external: false,
  },
  {
    label: STRINGS.nav.refundPolicy,
    href: '/policies/refund-policy',
    external: false,
  },
  {
    label: STRINGS.nav.termsOfService,
    href: '/policies/terms-of-service',
    external: false,
  },
];
