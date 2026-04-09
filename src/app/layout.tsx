import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seo } from "@/data/seo";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: `%s | ${seo.author}`,
  },
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: "website",
    url: seo.url,
    siteName: seo.author,
    locale: 'en_US',
    images: [
      {
        url: seo.image,
        width: 1200,
        height: 630,
        alt: seo.author,
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
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
      </head>
      <body className="antialiased min-h-screen">
        <div className="relative flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300">
          {/* Global Vertical Dividers - Synced with 1280px Container */}
          <div className="absolute left-[calc(50%-640px)] top-0 bottom-0 w-[1px] bg-border/50 hidden xl:block pointer-events-none z-0" />
          <div className="absolute right-[calc(50%-640px)] top-0 bottom-0 w-[1px] bg-border/50 hidden xl:block pointer-events-none z-0" />
          
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
