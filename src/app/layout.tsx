import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import RainScene from "./components/Effects/Rain";
import RainBackground from "./components/Background";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yazid Yasykur | Software Engineer",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <RainBackground showRainScene={true}>{children}</RainBackground>
        {/* {children} */}
      </body>
    </html>
  );
}
