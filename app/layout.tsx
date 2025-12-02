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
    default: "LEBRE | Efficient Industrial Trade",
    template: "%s | LEBRE",
  },
  description:
    "Trabzon & Warsaw — coordinating seamless industrial trade across Europe and beyond.",
  openGraph: {
    title: "LEBRE TİCARET LİMİTED ŞİRKETİ",
    description:
      "Efficient trade starts with clear communication, reliable partners, and transparent logistics.",
    url: "https://lebre.com.tr",
    siteName: "LEBRE",
    images: ["/og-lebre.jpg"],
    emails: ["ofis@lebre.com.tr"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0d9488", // Deep teal
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-slate-900 antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
