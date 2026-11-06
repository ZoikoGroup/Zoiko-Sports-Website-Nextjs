import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/layout/Preloader";
import "./globals.css";

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zoiko Sports — Sports operations software",
    template: "%s | Zoiko Sports",
  },
  description:
    "Sports operations software from Zoiko Tech Inc., a Zoiko Group company. Coordinate events from planning and readiness through event-day decisions and review.",
};

export const viewport: Viewport = {
  themeColor: "#261a42",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={hanken.variable}>
      <body className="flex min-h-dvh flex-col">
        <noscript>
          <style>{`#preloader{display:none!important}.reveal,.hero-image{opacity:1!important}`}</style>
        </noscript>
        <Preloader />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
