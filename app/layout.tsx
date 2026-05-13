import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevon.framer.media"),
  title: {
    default: "Home - ELEVON",
    template: "%s | ELEVON",
  },
  description:
    "We help ambitious brands scale with performance marketing, creative strategy, and conversion-focused campaigns.",
  openGraph: {
    type: "website",
    siteName: "ELEVON",
    title: "Home - ELEVON",
    description:
      "We help ambitious brands scale with performance marketing, creative strategy, and conversion-focused campaigns.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
