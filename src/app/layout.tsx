import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { siteMetadata } from "@/lib/metadata";
import "./globals.css";

// Primary font — modern, friendly, and professional
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Emprendimientos Digitales",
    "description": "Soluciones digitales estratégicas para emprendedores",
    "url": "https://emprendedorasdigital.com",
    "image": "https://emprendedorasdigital.com/logoemp.png",
    "telephone": "+502-54122572",
    "email": "wgarcia.10@outlook.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "GT"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Guatemala"
    },
    "priceRange": "Q150-Q750",
    "sameAs": [
      "https://www.facebook.com/walwebede",
      "https://www.instagram.com/walwebestudio/",
      "https://www.tiktok.com/@waltergarciaveliz"
    ]
  };

  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${outfit.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
