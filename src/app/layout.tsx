import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const interBody = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IT-WORX | Powerful Laundry Stain Remover",
  description: "Finally, a stain remover that actually works on real-life messes. Buy IT-WORX on Amazon for professional results at home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5NHZXFWS" />
      <body
        className={`${geistSans.variable} ${interBody.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
