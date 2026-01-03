import { MIN_SPEED_THRESHOLD } from "./constants";

export type SpeedUnit = "kmh" | "mph";

/**
 * Convert meters per second to kilometers per hour
 */
export function msToKmh(ms: number): number {
  return ms * 3.6;
}

/**
 * Convert meters per second to miles per hour
 */
export function msToMph(ms: number): number {
  return ms * 2.237;
}

/**
 * Convert speed from m/s to the specified unit
 */
export function convertSpeed(ms: number, unit: SpeedUnit): number {
  return unit === "kmh" ? msToKmh(ms) : msToMph(ms);
}

/**
 * Format speed for display (no decimals when >= 10, one decimal below)
 * Speeds below MIN_SPEED_THRESHOLD are shown as 0 to filter GPS noise
 */
export function formatSpeed(ms: number | null, unit: SpeedUnit): string {
  if (ms === null || ms < MIN_SPEED_THRESHOLD) return "0";

  const converted = convertSpeed(ms, unit);

  if (converted >= 10) return Math.round(converted).toString();
  return converted.toFixed(1);
}

/**
 * Get the display label for a speed unit
 */
export function getUnitLabel(unit: SpeedUnit): string {
  return unit === "kmh" ? "km/h" : "mph";
}
