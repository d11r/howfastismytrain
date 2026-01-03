# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` - Start development server at localhost:3000
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

## Architecture

A PWA that measures train/vehicle speed using GPS. Next.js 16 App Router with React 19, TypeScript, Tailwind CSS v4.

### Directory Structure

```
app/           # Next.js App Router pages and layouts
components/    # React components
hooks/         # Custom React hooks
lib/           # Utilities and constants
public/        # Static assets, PWA icons, service worker
```

### Key Files

**Core GPS Logic:**
- `hooks/useGeolocation.ts` - GPS speed tracking via `navigator.geolocation.watchPosition`
- `lib/speed-utils.ts` - m/s to km/h and mph conversion
- `lib/locale-utils.ts` - Default unit based on browser locale

**State Management:**
- `hooks/useSpeedUnit.ts` - Unit preference (localStorage)
- `components/ThemeProvider.tsx` - Theme context (light/dark, localStorage)
- `hooks/useInstallPrompt.ts` - PWA install prompt with 15s delay

**Main Components:**
- `components/SpeedDisplay.tsx` - Large speed number display
- `components/SettingsPanel.tsx` - Unit and theme toggles
- `components/InfoSection.tsx` - Below-fold info, accuracy notes, credits
- `components/ErrorMessage.tsx` - GPS error handling

**PWA:**
- `app/manifest.ts` - PWA manifest (Next.js convention)
- `public/sw.js` - Manual service worker for offline caching
- `components/ServiceWorkerRegistration.tsx` - Registers SW in production

### Path Alias

`@/*` maps to project root (e.g., `@/components/SpeedDisplay`)

### Theme System

- CSS variables in `globals.css` (`:root` and `:root.dark`)
- `ThemeProvider` adds `dark` class to `<html>` element
- Tailwind `dark:` variant for all themed styles
