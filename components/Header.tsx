// src/components/Header.tsx
"use client";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = ["Home", "About", "Services", "Products", "Contact"];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        {/* Logo + Name – visible on ALL screens */}
        <Link href="/" className="flex items-center gap-3">
          {/* Placeholder logo – replace with your real one */}
          <div className="relative w-10 h-10">
            <Image
              src="/logo.png" // ← Drop your real logo here (or use /logo.png)
              alt="MICROMEGAS logo"
              fill
              className="object-contain rounded-full"
              priority
            />
          </div>
          <span className="text-2xl font-bold text-primary hidden sm:block">
            MICROMEGAS
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="text-muted-foreground hover:text-primary transition font-medium">
              {item}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-8 mt-10 ps-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <Image
                    src="/logo.svg"
                    alt="MICROMEGAS"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl font-bold">MICROMEGAS</span>
              </Link>
              {navItems.map((item) => (
                <Link
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-xl font-medium hover:text-primary transition">
                  {item}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
