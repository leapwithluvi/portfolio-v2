import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { seo } from "@/data/seo";
import { Navbar } from "@/components/Navbar";
// import { About } from "./(about)/page";

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col pt-10">
        <div className="relative min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Global Vertical Dividers */}
          <div className="absolute left-[calc(50%-640px)] top-0 bottom-0 w-[1px] bg-border hidden xl:block" />
            <div className="absolute right-[calc(50%-640px)] top-0 bottom-0 w-[1px] bg-border hidden xl:block" />
              <Navbar />
                {children}
              {/* <About /> */}
        </div>
      </body>
    </html>
  );
}
