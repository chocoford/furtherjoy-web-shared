/**
 * UI-string resolver.
 *
 * Strategy: build-time per-locale. `PUBLIC_LOCALE=zh` at build time picks
 * the zh bundle; default is en. Each consumer (website, shopify) builds
 * once per locale; the locale is baked into the static output.
 *
 *   .com  — `astro build` (PUBLIC_LOCALE unset → en)
 *   .com.cn — `PUBLIC_LOCALE=zh PUBLIC_BUILD_VARIANT=cn astro build`
 *
 * Why import.meta.env over process.env: import.meta.env.PUBLIC_* is what
 * Vite inlines at consumer-build time, so a `STRINGS.x.y` reference in a
 * .astro file or component resolves to the literal string in the final
 * bundle — no runtime locale lookup, no JS bundle bloat from unused
 * locales. Falls back to DEFAULT_LOCALE if unset.
 *
 * To add a new locale:
 *   1. Create `./{locale}.ts` mirroring en.ts (with `typeof en` enforcement)
 *   2. Import + register in LOCALES below
 *   3. Add a build script that sets PUBLIC_LOCALE={locale}
 */

import {en} from './en.js';
import {zh} from './zh.js';

export const LOCALES = {en, zh} as const;
export type Locale = keyof typeof LOCALES;
export const DEFAULT_LOCALE: Locale = 'en';

const envLocale = (import.meta as {env?: Record<string, string | undefined>})
  .env?.PUBLIC_LOCALE as Locale | undefined;
const resolvedLocale: Locale =
  envLocale && envLocale in LOCALES ? envLocale : DEFAULT_LOCALE;

export const STRINGS = LOCALES[resolvedLocale];
export type Strings = typeof STRINGS;

/** The resolved locale for this build. Useful for HTML lang attribute,
 *  hreflang alternates, og:locale, etc. — anything outside the STRINGS
 *  bundle itself. */
export const LOCALE: Locale = resolvedLocale;

/** ISO 639-1 + region codes for use in `<html lang>` / hreflang etc. */
export const LOCALE_HTML_TAG: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
};

/** Open Graph locale codes (RFC 5646-ish, underscore-separated). */
export const LOCALE_OG_TAG: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
};
