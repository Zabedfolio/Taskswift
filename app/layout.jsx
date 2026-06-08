// app/layout.jsx
// This is the ROOT LAYOUT — Next.js wraps every page inside this.
// Think of it as the "HTML shell" that never changes between pages.

import "./globals.css"; // Import our global styles (Tailwind + fonts)

// Metadata object — Next.js uses this to set <title> and <meta description>
export const metadata = {
  title: "TaskSwift",
  description: "A clean, fast task tracker",
};

// RootLayout receives `children` — that's whatever page is currently active
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        next/font or a manual link tag would go in <head>.
        We're loading fonts via @import in globals.css for simplicity.
      */}
      <body>{children}</body>
    </html>
  );
}
