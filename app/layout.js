// layout.js
import Footer from "./components/Footer";
import "./globals.css"; // Add global styles here

import GlobalStyle from "./styles/GlobalStyle";
import { Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen"; // Import the loading screen
import LoadingPages from "./components/LoadingPages";

export const metadata = {
  title: "Retro Portfolio",
  description: "A retro-themed portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <GlobalStyle />
        <div className="grid-background" />

        {/* Suspense for loading transition */}
        <Suspense fallback={<LoadingPages />}>{children}</Suspense>

        <Footer />
      </body>
    </html>
  );
}
