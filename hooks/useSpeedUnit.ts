"use client";

import { useCallback, useEffect, useState } from "react";
import { getDefaultSpeedUnit } from "@/lib/locale-utils";
import type { SpeedUnit } from "@/lib/speed-utils";

const STORAGE_KEY = "howfastismytrain-speed-unit";

export function useSpeedUnit() {
  const [unit, setUnitState] = useState<SpeedUnit>("kmh");
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize from localStorage or locale on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "kmh" || stored === "mph") {
      setUnitState(stored);
    } else {
      setUnitState(getDefaultSpeedUnit());
    }
    setIsInitialized(true);
  }, []);

  const setUnit = useCallback((newUnit: SpeedUnit) => {
    setUnitState(newUnit);
    localStorage.setItem(STORAGE_KEY, newUnit);
  }, []);

  const toggleUnit = useCallback(() => {
    setUnitState((prev) => {
      const next = prev === "kmh" ? "mph" : "kmh";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return {
    unit,
    setUnit,
    toggleUnit,
    isInitialized,
  };
}
