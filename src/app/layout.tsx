import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://freakyfit.truemindlabs.com"),
  title: "FreakyFit - Turn Workout Reels into Real Routines",
  description: "Stop using messy saved folders, FreakyFit helps you organize workouts into clean routines.",
  alternates: {
    canonical: "https://freakyfit.truemindlabs.com",
  },
  openGraph: {
    title: "FreakyFit - Turn Workout Reels into Real Routines",
    description: "Stop using messy saved folders, FreakyFit helps you organize workouts into clean routines.",
    url: "https://freakyfit.truemindlabs.com",
    siteName: "FreakyFit",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const envTheme = (
    process.env.NEXT_PUBLIC_THEME ||
    process.env.THEME ||
    "dark"
  ).toLowerCase();
  const defaultTheme = envTheme === "light" ? "light" : "dark";

  return (
    <html
      lang="en"
      className={defaultTheme}
      data-theme={defaultTheme}
      style={{ colorScheme: defaultTheme }}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var e=${JSON.stringify(
              defaultTheme
            )},t=localStorage.getItem("ff_theme"),r=t||e,n=document.documentElement;n.classList.remove("light","dark"),n.classList.add(r),n.setAttribute("data-theme",r),n.style.colorScheme=r}catch(a){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Plus+Jakarta+Sans:wght@500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="selection:bg-[#FF5E1A] selection:text-white dark:selection:bg-brand-lime dark:selection:text-black min-h-screen relative antialiased">
        {children}
      </body>
    </html>
  );
}
