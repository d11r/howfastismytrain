"use client";

import { useState } from "react";
import { SpeedDisplay } from "@/components/SpeedDisplay";
import { SpeedUnitDisplay } from "@/components/SpeedUnit";
import { SettingsButton } from "@/components/SettingsButton";
import { SettingsPanel } from "@/components/SettingsPanel";
import { ErrorMessage } from "@/components/ErrorMessage";
import { InfoSection } from "@/components/InfoSection";
import { InstallPrompt } from "@/components/InstallPrompt";
import { useGeolocation } from "@/hooks/useGeolocation";
import { useSpeedUnit } from "@/hooks/useSpeedUnit";
import { useTheme } from "@/components/ThemeProvider";
import { useInstallPrompt } from "@/hooks/useInstallPrompt";

export default function Home() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  const {
    speed,
    error,
    isSupported,
    isTracking,
    isInitialized,
    hasPosition,
    needsPermission,
    startTracking,
  } = useGeolocation();
  const { unit, setUnit, toggleUnit } = useSpeedUnit();
  const { theme, setTheme } = useTheme();
  const { isInstallable, install, dismiss } = useInstallPrompt();

  const hasError = isInitialized && (!isSupported || error !== null);

  // Determine status message
  const getStatusMessage = () => {
    if (!isInitialized) {
      return { color: "zinc", message: "Initializing...", detail: null };
    }
    if (!isTracking) {
      return { color: "zinc", message: "GPS Inactive", detail: null };
    }
    if (!hasPosition) {
      return {
        color: "yellow",
        message: "Acquiring location...",
        detail: "This may take a moment on first use",
      };
    }
    if (speed === null) {
      return {
        color: "green",
        message: "GPS Active",
        detail: "Start moving to see your speed",
      };
    }
    return { color: "green", message: "GPS Active", detail: null };
  };

  const status = getStatusMessage();

  return (
    <div className="relative flex min-h-dvh flex-col">
      {/* Settings */}
      <SettingsButton
        onClick={() => setSettingsOpen(!settingsOpen)}
        isOpen={settingsOpen}
      />
      <SettingsPanel
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        unit={unit}
        onUnitChange={setUnit}
        theme={theme}
        onThemeChange={setTheme}
      />

      {/* Main content - Above fold */}
      <main className="relative flex flex-1 flex-col items-center justify-center px-4">
        {hasError ? (
          <ErrorMessage
            error={error}
            isSupported={isSupported}
            onRetry={startTracking}
          />
        ) : needsPermission ? (
          <div className="flex flex-col items-center gap-6 px-6 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="opacity-50"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Ready to track your speed?</h2>
              <p className="mt-2 max-w-xs text-sm opacity-70">
                Tap below to enable GPS and see how fast you&apos;re going.
              </p>
            </div>
            <button
              onClick={startTracking}
              className="rounded-full bg-foreground px-8 py-3 font-medium text-background transition-opacity hover:opacity-80"
            >
              Enable GPS
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2">
            <SpeedDisplay speed={speed} unit={unit} />
            <SpeedUnitDisplay unit={unit} onToggle={toggleUnit} />

            {/* Status indicator */}
            <div className="mt-4 flex flex-col items-center gap-1">
              <div className="flex items-center gap-2 text-sm opacity-50">
                {status.color === "green" ? (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                ) : status.color === "yellow" ? (
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-500" />
                  </span>
                ) : (
                  <span className="h-2 w-2 rounded-full bg-zinc-400" />
                )}
                {status.message}
              </div>
              {status.detail && (
                <p className="max-w-xs text-center text-xs opacity-40">
                  {status.detail}
                </p>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Below fold - Info section */}
      <InfoSection />

      {/* Install prompt */}
      <InstallPrompt
        isVisible={isInstallable}
        onInstall={install}
        onDismiss={dismiss}
      />
    </div>
  );
}
