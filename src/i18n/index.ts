/**
 * UI-string resolver.
 *
 * Locale resolution today: hardcoded to `DEFAULT_LOCALE`.
 * When we go multi-locale, replace the `STRINGS` export with the appropriate
 * resolver — call sites using `STRINGS.x.y` should stay untouched.
 *   - Build-time (separate builds per locale):
 *       const LOCALE = process.env.LOCALE ?? DEFAULT_LOCALE;
 *       export const STRINGS = LOCALES[LOCALE in LOCALES ? LOCALE : DEFAULT_LOCALE];
 *   - Runtime routing (/en/*, /zh/*):
 *       wrap into a function `t(locale)` that returns the matching bundle.
 */

import {en} from './en.js';

export const LOCALES = {en} as const;
export type Locale = keyof typeof LOCALES;
export const DEFAULT_LOCALE: Locale = 'en';

export const STRINGS = LOCALES[DEFAULT_LOCALE];
export type Strings = typeof STRINGS;
