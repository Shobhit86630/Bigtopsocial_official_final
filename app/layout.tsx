import type { Metadata } from "next";
import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import "@/components/BorderGlow.css";

const helveticaNeue = localFont({
  src: "../public/helvetica-neue-5/HelveticaNeueMedium.otf",
  variable: "--font-helvetica-neue",
  display: "swap",
  weight: "200"
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
    <html lang="en" className={helveticaNeue.variable}>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
