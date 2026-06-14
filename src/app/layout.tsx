import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CanvasScale } from "./_components/CanvasScale";
import { RevealOnScroll } from "./_components/RevealOnScroll";
import { HeroAnimation } from "./_components/HeroAnimation";
import { CustomCursor } from "./_components/CustomCursor";
import { CollectionParallax } from "./_components/CollectionParallax";
import { ImageMaskReveal } from "./_components/ImageMaskReveal";

const switzer = localFont({
  src: "../../public/fonts/WEB/fonts/Switzer-Variable.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--font-switzer",
  display: "swap",
});

const TITLE = "FANCIVE — Portfolio";
const DESCRIPTION =
  "FANCIVE — A lifestyle fashion brand inspired by vintage boudoir aesthetics and quiet luxury.";

export const metadata: Metadata = {
  metadataBase: new URL("https://fancive.vercel.app"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    images: [
      {
        url: "/images/hero_bg.png",
        width: 1920,
        height: 1079,
        alt: "FANCIVE portfolio hero",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero_bg.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={switzer.variable}>
      <body className="antialiased">
        <CanvasScale />
        <RevealOnScroll />
        <HeroAnimation />
        <CustomCursor />
        <CollectionParallax />
        <ImageMaskReveal />
        {children}
      </body>
    </html>
  );
}
