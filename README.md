# How Fast Is My Train? 🚂

A simple, ad-free PWA that measures your train speed in real-time using GPS.

**[howfastismytrain.com](https://howfastismytrain.com)**

## Features

- **Real-time GPS speed** - Uses your device's GPS to show current speed
- **Works offline** - Install as a PWA and use even without internet
- **Unit switching** - Toggle between km/h and mph (defaults based on your region)
- **Light/dark mode** - Manual theme toggle
- **Mobile-first** - Designed primarily for phones
- **Minimal UI** - Just the speed, nothing else

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

The app uses the [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) (`navigator.geolocation.watchPosition`) to track your device's GPS position. The `speed` property from the GPS coordinates gives us the current velocity in meters per second, which we convert to km/h or mph.

**Accuracy notes:**
- Works best outdoors with clear sky view
- Speed readings may be inaccurate when stationary
- GPS accuracy varies by device
- Indoor/underground locations may have limited signal

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Author

Created by [Dragos Strugar](https://dragosstrugar.com)

- GitHub: [@d11r](https://github.com/d11r)
- Threads: [@strudra](https://threads.net/@strudra)
