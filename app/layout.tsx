import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://primeiro-ape.vercel.app"),
  title: {
    default: "PrimeiroApê — Planeje a compra do seu primeiro imóvel",
    template: "%s | PrimeiroApê",
  },
  description:
    "Descubra quando você pode comprar seu primeiro apê. Simule financiamento, entenda sua entrada necessária e receba um plano para conquistar sua casa própria.",
  keywords: [
    "simulador financiamento",
    "comprar imóvel",
    "financiamento imobiliário",
    "entrada imóvel",
    "calculadora financiamento",
    "primeira casa",
    "financiamento casa",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "PrimeiroApê",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans antialiased">
        <Header />
        <div className="flex-1 flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
