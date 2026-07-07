import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brewtech CC | Premium Brewery Equipment for Africa",
  description: "Brewtech CC supplies world-class brewery instrumentation and equipment across Africa. Authorised distributors of Aber Instruments, Countstar and Scanjet.",
  keywords: "brewery equipment Africa, Aber Instruments, Countstar, Scanjet, yeast monitor, tank cleaning, brewery instrumentation South Africa",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
    shortcut: "/favicon-32x32.png",
  },
  openGraph: {
    title: "Brewtech CC | Premium Brewery Equipment for Africa",
    description: "World-class brewery instrumentation and equipment across Africa.",
    url: "https://www.brew-tech.co.za",
    siteName: "Brewtech CC",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
