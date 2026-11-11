import { existsSync } from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import { SiteFooter } from "./_components/site-footer";
import { SiteHeader } from "./_components/site-header";
import { Ticker } from "./_components/ticker";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

// Resolved at build time (on each request in dev); drop a logo into public/ to swap out the text wordmark.
const hasLogo = existsSync(path.join(process.cwd(), "public", "logo.png"));

export const metadata: Metadata = {
  title: {
    default: "Catch Us on Main Street | Elevated Family Travel",
    template: "%s | Catch Us on Main Street",
  },
  description:
    "Elevated, intentional family travel from Prosper, Texas: Disney and Universal, cruises, resorts, milestone trips, and multigenerational journeys.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader hasLogo={hasLogo} />
        {children}
        <Ticker />
        <SiteFooter hasLogo={hasLogo} />
      </body>
    </html>
  );
}
