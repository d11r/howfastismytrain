import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ServiceWorkerRegistration } from "@/components/ServiceWorkerRegistration";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://howfastismytrain.com"),
  title: "How Fast Is My Train?",
  description:
    "Measure your train speed in real-time using GPS. Free, ad-free, open source PWA.",
  keywords: ["train speed", "GPS speedometer", "PWA", "train tracker", "speedometer app"],
  authors: [{ name: "Dragos Strugar", url: "https://dragosstrugar.com" }],
  creator: "Dragos Strugar",
  publisher: "Dragos Strugar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://howfastismytrain.com",
  },
  openGraph: {
    title: "How Fast Is My Train?",
    description: "Measure your train speed in real-time using GPS. Free, ad-free, open source.",
    url: "https://howfastismytrain.com",
    siteName: "How Fast Is My Train?",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How Fast Is My Train? - GPS speedometer for trains",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "How Fast Is My Train?",
    description: "Measure your train speed in real-time using GPS. Free, ad-free, open source.",
    images: ["/og-image.png"],
    creator: "@strudra",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "HowFastIsMyTrain",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <ServiceWorkerRegistration />
      </body>
    </html>
  );
}
