"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { GPS_OPTIONS } from "@/lib/constants";

export interface GeolocationState {
  speed: number | null; // Speed in m/s
  accuracy: number | null; // Position accuracy in meters
  isTracking: boolean;
  error: GeolocationPositionError | null;
  lastUpdate: Date | null;
  isSupported: boolean;
  hasPosition: boolean; // Whether we've received at least one position update
  isInitialized: boolean; // Whether we've checked support and started
}

const initialState: GeolocationState = {
  speed: null,
  accuracy: null,
  isTracking: false,
  error: null,
  lastUpdate: null,
  isSupported: true,
  hasPosition: false,
  isInitialized: false,
};

export function useGeolocation(): GeolocationState & {
  startTracking: () => void;
  stopTracking: () => void;
} {
  const [state, setState] = useState<GeolocationState>(initialState);
  const watchIdRef = useRef<number | null>(null);

  const startTracking = useCallback(() => {
    const isSupported =
      typeof navigator !== "undefined" && "geolocation" in navigator;

    if (!isSupported) {
      setState((prev) => ({
        ...prev,
        isSupported: false,
        isInitialized: true,
        error: {
          code: 2,
          message: "Geolocation is not supported by this device",
          PERMISSION_DENIED: 1,
          POSITION_UNAVAILABLE: 2,
          TIMEOUT: 3,
        } as GeolocationPositionError,
      }));
      return;
    }

    // Clear any existing watch before starting a new one
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }

    setState((prev) => ({
      ...prev,
      isTracking: true,
      error: null,
      isInitialized: true,
    }));

    watchIdRef.current = navigator.geolocation.watchPosition(
      (position) => {
        setState((prev) => ({
          ...prev,
          speed: position.coords.speed,
          accuracy: position.coords.accuracy,
          isTracking: true,
          error: null,
          lastUpdate: new Date(),
          isSupported: true,
          hasPosition: true,
        }));
      },
      (error) => {
        // Clear the watch on error so retry can work
        if (watchIdRef.current !== null) {
          navigator.geolocation.clearWatch(watchIdRef.current);
          watchIdRef.current = null;
        }
        setState((prev) => ({
          ...prev,
          error,
          isTracking: false,
        }));
      },
      GPS_OPTIONS
    );
  }, []);

  const stopTracking = useCallback(() => {
    if (watchIdRef.current !== null) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
    setState((prev) => ({ ...prev, isTracking: false }));
  }, []);

  // Start tracking on mount
  useEffect(() => {
    startTracking();
    return () => stopTracking();
  }, [startTracking, stopTracking]);

  return {
    ...state,
    startTracking,
    stopTracking,
  };
}
