// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "MICROMEGAS Sp. z o.o. | Industrial Spare Parts & Logistics",
    template: "%s | MICROMEGAS Sp. z o.o.",
  },
  description:
    "Based in Warsaw, Poland — international trade and distribution of industrial equipment and spare parts. Seamless supply from Europe to Asia.",
  keywords:
    "industrial spare parts, gas turbines, steam turbines, generators, compressors, Poland, Warsaw, MICROMEGAS, turnkey procurement",
  authors: [{ name: "MICROMEGAS Sp. z o.o." }],
  creator: "MICROMEGAS Sp. z o.o.",
  publisher: "MICROMEGAS Sp. z o.o.",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://micro-megas.com",
    siteName: "MICROMEGAS Sp. z o.o.",
    title: "MICROMEGAS Sp. z o.o. | Industrial Spare Parts from Poland",
    description:
      "Seamless international trade and logistics of industrial equipment and spare parts across Europe and Asia.",
    images: [
      {
        url: "https://micro-megas.com/og-image.jpg", // Place your 1200×630 image in /public/og-image.jpg
        width: 1200,
        height: 630,
        alt: "MICROMEGAS Sp. z o.o. – Industrial Spare Parts Supplier, Warsaw, Poland",
      },
    ],
    emails: ["info@micro-megas.com"],
  },

  twitter: {
    card: "summary_large_image",
    site: "@micromegas_pl", // Change if you have a real handle
    creator: "@micromegas_pl",
    title: "MICROMEGAS Sp. z o.o. | Industrial Spare Parts & Logistics",
    description:
      "Warsaw-based supplier of OEM & aftermarket parts for turbines, generators, and heavy industry.",
    images: ["https://micro-megas.com/twitter-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "", // Add your Google Search Console code later if needed
  },

  alternates: {
    canonical: "https://micro-megas.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f172a", // Deep slate – matches your premium dark design
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
