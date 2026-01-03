"use client";

export function InfoSection() {
  return (
    <section className="mx-auto w-full max-w-2xl px-6 py-12">
      <div className="space-y-8">
        {/* How it works */}
        <div>
          <h2 className="mb-3 text-lg font-semibold">How it works</h2>
          <p className="text-sm leading-relaxed opacity-70">
            This app uses your device&apos;s GPS to measure your current speed
            in real-time. The speed data comes directly from the GPS chip in
            your phone—the same technology that powers navigation apps.
          </p>
        </div>

        {/* Accuracy */}
        <div>
          <h2 className="mb-3 text-lg font-semibold">Accuracy notes</h2>
          <ul className="space-y-2 text-sm opacity-70">
            <li className="flex items-start gap-2">
              <span className="mt-1">📡</span>
              <span>Works best outdoors with a clear view of the sky</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">🚶</span>
              <span>
                Speed readings may be inaccurate when stationary or moving very
                slowly
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">📱</span>
              <span>
                GPS accuracy varies by device—newer phones generally have better
                GPS chips
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">🏢</span>
              <span>
                Indoor or underground locations (like subways) may have limited
                GPS signal
              </span>
            </li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h2 className="mb-3 text-lg font-semibold">About</h2>
          <p className="text-sm leading-relaxed opacity-70">
            Free, ad-free, and{" "}
            <a
              href="https://github.com/d11r/howfastismytrain"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100"
            >
              open source
            </a>
            . Built for curious commuters who want to know how fast their train
            is going.
          </p>
        </div>

        {/* Install as app */}
        <div>
          <h2 className="mb-3 text-lg font-semibold">Install as an app</h2>
          <p className="mb-3 text-sm leading-relaxed opacity-70">
            You can install this website as an app on your phone. It&apos;ll
            appear on your home screen and work even when you&apos;re offline
            (great for train tunnels!).
          </p>
          <div className="space-y-3 text-sm opacity-70">
            <div className="rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
              <p className="font-medium">On iPhone/iPad (Safari):</p>
              <p className="mt-1">
                Tap the share button (box with arrow) → &quot;Add to Home
                Screen&quot;
              </p>
            </div>
            <div className="rounded-lg bg-zinc-100 p-3 dark:bg-zinc-800">
              <p className="font-medium">On Android (Chrome):</p>
              <p className="mt-1">
                Tap the menu (⋮) → &quot;Add to Home screen&quot; or
                &quot;Install app&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Credits */}
        <div className="border-t border-current/10 pt-8">
          <p className="text-sm opacity-50">
            Created by{" "}
            <a
              href="https://dragosstrugar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100"
            >
              Dragos Strugar
            </a>
          </p>
          <div className="mt-2 flex gap-4 text-sm opacity-50">
            <a
              href="https://github.com/d11r"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100"
            >
              GitHub
            </a>
            <a
              href="https://threads.net/@strudra"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-100"
            >
              Threads
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
