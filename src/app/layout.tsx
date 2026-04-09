import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seo } from "@/data/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Spotlight from "@/components/ui/Spotlight";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import CommandPalette from "@/components/CommandPalette";
import BackToTop from "@/components/BackToTop";
import Preloader from "@/components/Preloader";
import SectionNav from "@/components/SectionNav";
import CustomCursor from "@/components/CustomCursor";
import { Grain } from "@/components/ui/Grain";
import { contactJsonData } from "@/data/contact_json";
import Script from "next/script";
import { profile } from "@/data/profile";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        {/* Anti-Flicker Theme Script */}
        <Script
          id="show-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches === true;
                  if (!theme && supportDarkMode) theme = 'dark';
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* SEO JSON-LD Person */}
        <Script
          id="ld-json-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": seo.author,
              "url": seo.url,
              "image": `${seo.url}${seo.image}`,
              "sameAs": [
                `https://github.com/${contactJsonData.contact.github}`,
                `https://www.linkedin.com/in/${contactJsonData.contact.linkedin}`,
                `https://www.instagram.com/${contactJsonData.contact.instagram}`,
                `https://x.com/${contactJsonData.contact.x}`
              ],
              "jobTitle": profile.title,
              "worksFor": {
                "@type": "Organization",
                "name": "Freelance"
              },
              "description": seo.description
            }),
          }}
        />

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

        {/* Global UI Components */}
        <CustomCursor />
        <Grain />
        <ScrollProgress />
        <CommandPalette />
        <BackToTop />
        <SectionNav />
        <Spotlight />

        <div className="relative flex min-h-screen flex-col">
          {/* Global Vertical Dividers */}
          <div className="absolute left-[calc(50%-640px)] top-0 bottom-0 w-[1px] bg-border/50 hidden xl:block pointer-events-none z-0" />
          <div className="absolute right-[calc(50%-640px)] top-0 bottom-0 w-[1px] bg-border/50 hidden xl:block pointer-events-none z-0" />

          <SmoothScroll>
            <Preloader />
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </div>
      </body>
    </html>
  );
}
