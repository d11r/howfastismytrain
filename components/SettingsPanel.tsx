"use client";

import type { SpeedUnit } from "@/lib/speed-utils";
import type { Theme } from "@/components/ThemeProvider";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
  unit: SpeedUnit;
  onUnitChange: (unit: SpeedUnit) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
}

export function SettingsPanel({
  isOpen,
  onClose,
  unit,
  onUnitChange,
  theme,
  onThemeChange,
}: SettingsPanelProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
      />

      {/* Panel */}
      <div className="fixed right-4 top-16 z-50 w-64 rounded-2xl bg-white p-4 shadow-xl dark:bg-zinc-900">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide opacity-50">
          Settings
        </h2>

        {/* Speed Unit */}
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">Speed Unit</label>
          <div className="flex gap-2">
            <button
              onClick={() => onUnitChange("kmh")}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                unit === "kmh"
                  ? "bg-foreground text-background"
                  : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              }`}
            >
              km/h
            </button>
            <button
              onClick={() => onUnitChange("mph")}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                unit === "mph"
                  ? "bg-foreground text-background"
                  : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              }`}
            >
              mph
            </button>
          </div>
        </div>

        {/* Theme */}
        <div>
          <label className="mb-2 block text-sm font-medium">Theme</label>
          <div className="flex gap-2">
            <button
              onClick={() => onThemeChange("light")}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                theme === "light"
                  ? "bg-foreground text-background"
                  : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              }`}
            >
              Light
            </button>
            <button
              onClick={() => onThemeChange("dark")}
              className={`flex-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "bg-foreground text-background"
                  : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
              }`}
            >
              Dark
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
