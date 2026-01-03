export const GPS_OPTIONS: PositionOptions = {
  enableHighAccuracy: true,
  maximumAge: 0, // Always get fresh position data
  timeout: 5000,
};

// Speeds below this threshold (in m/s) are treated as 0
// This filters out GPS noise when stationary (~1.8 km/h / ~1.1 mph)
export const MIN_SPEED_THRESHOLD = 0.5;
