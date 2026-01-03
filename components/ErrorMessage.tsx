"use client";

interface ErrorMessageProps {
  error: GeolocationPositionError | null;
  isSupported: boolean;
  onRetry: () => void;
}

function getErrorMessage(
  error: GeolocationPositionError | null,
  isSupported: boolean
): { title: string; description: string } {
  if (!isSupported) {
    return {
      title: "GPS Not Available",
      description:
        "Your device or browser doesn't support GPS location services.",
    };
  }

  if (!error) {
    return {
      title: "Starting GPS...",
      description: "Waiting for location access.",
    };
  }

  switch (error.code) {
    case error.PERMISSION_DENIED:
      return {
        title: "Location Access Denied",
        description:
          "Please allow location access in your browser settings to measure speed.",
      };
    case error.POSITION_UNAVAILABLE:
      return {
        title: "GPS Signal Unavailable",
        description:
          "Unable to get GPS signal. Make sure you're outdoors with a clear view of the sky.",
      };
    case error.TIMEOUT:
      return {
        title: "GPS Timeout",
        description:
          "Taking too long to get your location. Please try again.",
      };
    default:
      return {
        title: "GPS Error",
        description: error.message || "An unknown error occurred.",
      };
  }
}

export function ErrorMessage({
  error,
  isSupported,
  onRetry,
}: ErrorMessageProps) {
  const { title, description } = getErrorMessage(error, isSupported);

  return (
    <div className="flex flex-col items-center gap-4 px-6 text-center">
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-50"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="m15 9-6 6" />
          <path d="m9 9 6 6" />
        </svg>
      </div>

      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="max-w-xs text-sm leading-relaxed opacity-70">{description}</p>

      {error && (
        <button
          onClick={onRetry}
          className="mt-2 rounded-full bg-foreground px-6 py-2.5 font-medium text-background transition-opacity hover:opacity-80"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
