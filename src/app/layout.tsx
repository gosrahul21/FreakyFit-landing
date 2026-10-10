import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FreakyFit - Turn Workout Reels into Real Routines",
  description: "Stop using messy saved folders, FreakyFit helps you organize workouts into clean routines.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
      </head>
      <body className="selection:bg-brand-lime selection:text-black min-h-screen relative">
        {children}
      </body>
    </html>
  );
}
