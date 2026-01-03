"use client";

interface InstallPromptProps {
  isVisible: boolean;
  onInstall: () => void;
  onDismiss: () => void;
}

export function InstallPrompt({
  isVisible,
  onInstall,
  onDismiss,
}: InstallPromptProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-sm rounded-2xl bg-white p-4 shadow-xl safe-area-bottom dark:bg-zinc-900">
      <div className="flex-1">
        <h3 className="font-semibold">Like what you see?</h3>
        <p className="mt-1 text-sm opacity-70">
          Install this app on your phone for instant access, even offline.
        </p>
      </div>

      {/* PWA education */}
      <div className="mt-3 rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
        <p className="text-xs opacity-70">
          <strong>What&apos;s a PWA?</strong> It&apos;s like an app from the app
          store, but faster to install and uses less storage. It lives on your
          home screen and works even without internet.
        </p>
      </div>

      <div className="mt-4 flex gap-2">
        <button
          onClick={onDismiss}
          className="flex-1 rounded-lg px-4 py-2 text-sm font-medium opacity-60 transition-opacity hover:opacity-100"
        >
          Maybe later
        </button>
        <button
          onClick={onInstall}
          className="flex-1 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-80"
        >
          Add to Home Screen
        </button>
      </div>
    </div>
  );
}
