import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jais Tollette — Fractional Product Manager",
  description:
    "Jais Tollette is a fractional PM helping health, wellness, food, and women's lifestyle companies improve onboarding, engagement, and retention.",
  keywords: [
    "fractional product manager",
    "women's health product",
    "wellness product management",
    "postpartum product",
    "food tech PM",
    "fractional PM",
  ],
  authors: [{ name: "Jais Tollette" }],
  openGraph: {
    title: "Jais Tollette — Fractional Product Manager",
    description:
      "Fractional PM for health, wellness, food, and women's lifestyle products. I help companies improve onboarding, engagement, and retention.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jais Tollette — Fractional Product Manager",
    description:
      "Fractional PM for health, wellness, food, and women's lifestyle products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#374151]">
        {children}
      </body>
    </html>
  );
}
