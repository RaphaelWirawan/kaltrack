import React from "react";
import "../src/app/globals.css";
import { Inter, Roboto, Comfortaa } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  variable: "--font-comfortaa",
  weight: ["300", "400", "500", "600", "700"],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main
      className={`${inter.variable} ${roboto.variable} ${comfortaa.variable}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
