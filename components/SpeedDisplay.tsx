"use client";

import { formatSpeed } from "@/lib/speed-utils";
import type { SpeedUnit } from "@/lib/speed-utils";

interface SpeedDisplayProps {
  speed: number | null;
  unit: SpeedUnit;
}

export function SpeedDisplay({ speed, unit }: SpeedDisplayProps) {
  const displaySpeed = formatSpeed(speed, unit);

  return (
    <span
      className="text-[8rem] font-bold leading-none tracking-tight tabular-nums sm:text-[10rem] md:text-[12rem]"
      style={{ fontVariantNumeric: "tabular-nums" }}
    >
      {displaySpeed}
    </span>
  );
}
