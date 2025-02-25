import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Keep global css imports
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script"; // Import Script for JS files

import "bootstrap-icons/font/bootstrap-icons.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sustains.ai",
  description: "AI-Driven Risk Analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
         {/*Local css (Ensure files exist in /public/css/)*/}
        <link rel="stylesheet" href="/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/css/theme.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/bootstrap-icons.css" />
        <link rel="stylesheet" href="/css/hs-mega-menu.css" />
        <link rel="stylesheet" href="/css/snippets.min.css" />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Local JS (Ensure files exist in /public/js/) */}
        <Script src="/js/theme.min.js" strategy="lazyOnload" />


      </body>
    </html>
  );
}
