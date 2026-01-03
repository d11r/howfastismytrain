import type { SpeedUnit } from "./speed-utils";

// Countries/regions that use mph for road speed
const MPH_LOCALES = [
  "en-US", // United States
  "en-GB", // United Kingdom
  "en-LR", // Liberia
  "my-MM", // Myanmar
];

/**
 * Determine the default speed unit based on the user's browser locale.
 * Returns 'mph' for US, UK, Liberia, Myanmar; 'kmh' for everywhere else.
 */
export function getDefaultSpeedUnit(): SpeedUnit {
  if (typeof navigator === "undefined") return "kmh";

  const language = navigator.language;

  // Check for exact match first
  if (MPH_LOCALES.includes(language)) {
    return "mph";
  }

  // Check if it starts with a known mph locale prefix
  // e.g., "en-US-x-..." should match "en-US"
  for (const locale of MPH_LOCALES) {
    if (language.startsWith(locale)) {
      return "mph";
    }
  }

  return "kmh";
}
