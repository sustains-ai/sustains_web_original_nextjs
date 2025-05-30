"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Keep global css imports
import Footer from "./common/components/Footer";
import Script from "next/script"; // Import Script for JS files
import "./globals.css"; // Ensure this line is present
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/app/common/components/Header";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./common/store";
import { ThemeProvider } from "@mui/material/styles"
import { themeProvider } from "./common/theme";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const pathname = usePathname();
  const isCreateBlog = pathname.includes("/create-edit");

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
      <Provider store={store}>
        {!isCreateBlog && <Header />}
        <main>
            <PersistGate loading={null} persistor={persistor}>
              <ThemeProvider theme={themeProvider}>
                {children}
              </ThemeProvider>
            </PersistGate>
        </main>
        </Provider>
        {!isCreateBlog && <Footer />}

        {/* Local JS (Ensure files exist in /public/js/) */}
        <Script src="/js/theme.min.js" strategy="lazyOnload" />

      </body>
    </html>
  );
}
