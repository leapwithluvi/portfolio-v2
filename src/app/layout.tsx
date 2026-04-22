import type { Metadata } from "next";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { seo, personJsonLd, projectJsonLd, serviceJsonLd } from "@/data/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Preloader from "@/components/Preloader";
import { Grain } from "@/components/ui/Grain";
import Script from "next/script";
import { GlobalUI } from "@/components/GlobalUI";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/context/LanguageContext";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.url),
  title: {
    default: seo.title,
    template: `%s | ${seo.title}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: seo.author }],
  creator: seo.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: seo.url,
    title: seo.title,
    description: seo.description,
    siteName: seo.title,
    images: [
      {
        url: seo.image,
        width: 1200,
        height: 630,
        alt: seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [seo.image],
    creator: seo.twitterHandle,
  },
  icons: {
    icon: seo.icon,
    shortcut: seo.icon,
    apple: seo.icon,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: seo.url,
  },
  verification: {
    google: "zCJ24W6ZrMWhfQAXIzTAATosljXb3R5Elc8l48Zm7Rs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
        <link rel="preconnect" href="https://giffiles.alphacoders.com" />
        <link rel="dns-prefetch" href="https://giffiles.alphacoders.com" />
        {/* Anti-Flicker Theme Script */}
        <Script id="show-theme">
          {`
            (function() {
              try {
                var theme = localStorage.getItem('theme');
                if (!theme || theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  if (!theme) localStorage.setItem('theme', 'dark');
                }
              } catch (e) {}
            })();
          `}
        </Script>
      </head>
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >

        {/* SEO JSON-LD Person */}
        <Script
          id="ld-json-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />

        {/* SEO JSON-LD Projects */}
        {projectJsonLd.map((project, index) => (
          <Script
            key={`ld-json-project-${index}`}
            id={`ld-json-project-${index}`}
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(project),
            }}
          />
        ))}

        {/* SEO JSON-LD WebSite */}
        <Script
          id="ld-json-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": seo.title,
              "url": seo.url,
              "author": {
                "@type": "Person",
                "name": seo.author
              },
              "description": seo.description,
              "keywords": seo.keywords
            }),
          }}
        />

        {/* SEO JSON-LD Professional Service */}
        <Script
          id="ld-json-service"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd),
          }}
        />

        {/* Global UI Components */}
        <GlobalUI />
        <Grain />

        <LanguageProvider>
          <div className="relative flex min-h-screen flex-col">
            {/* Global Vertical Dividers - Simplified for performance */}
            <div className="absolute left-[calc(50%-600px)] top-0 bottom-0 w-px bg-border/20 hidden xl:block pointer-events-none z-0" />
            <div className="absolute right-[calc(50%-600px)] top-0 bottom-0 w-px bg-border/20 hidden xl:block pointer-events-none z-0" />

            <SmoothScroll>
              <Preloader />
              <Navbar />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </SmoothScroll>
            <SpeedInsights />
            <Analytics />
          </div>
        </LanguageProvider>

      </body>
    </html>
  );
}
