"use client";

import { getUnitLabel } from "@/lib/speed-utils";
import type { SpeedUnit } from "@/lib/speed-utils";

interface SpeedUnitProps {
  unit: SpeedUnit;
  onToggle: () => void;
}

export function SpeedUnitDisplay({ unit, onToggle }: SpeedUnitProps) {
  const label = getUnitLabel(unit);

  return (
    <button
      onClick={onToggle}
      className="text-2xl font-medium opacity-60 transition-opacity hover:opacity-100 sm:text-3xl"
      aria-label={`Switch units (currently ${label})`}
    >
      {label}
    </button>
  );
}
